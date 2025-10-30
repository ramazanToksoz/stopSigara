/**
 * Cloud Functions Örnek Kodu
 * 
 * Bu dosya Cloud Functions için örnek implementasyon içerir.
 * Gerçek implementasyon için Firebase CLI ile functions klasörü oluşturmalısın:
 * 
 * firebase init functions
 * 
 * Sonra functions/index.js dosyasına bu kodları ekle.
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

/**
 * Like/Unlike işlemlerinde sayaçları atomik olarak güncelle
 * 
 * Trigger: likes collection'ında create/delete
 */
exports.updateLikeCount = functions.firestore
  .document('likes/{likeId}')
  .onWrite(async (change, context) => {
    const likeData = change.after.exists ? change.after.data() : change.before.data();
    const { targetType, targetId } = likeData;
    
    if (!targetType || !targetId) {
      console.error('Invalid like data:', likeData);
      return null;
    }
    
    const collectionName = targetType === 'post' ? 'posts' : 'comments';
    const targetRef = db.collection(collectionName).doc(targetId);
    
    const increment = change.after.exists ? 1 : -1;
    
    try {
      await targetRef.update({
        likesCount: admin.firestore.FieldValue.increment(increment),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`Updated ${targetType} ${targetId} likesCount by ${increment}`);
    } catch (error) {
      console.error(`Error updating ${targetType} likesCount:`, error);
    }
    
    return null;
  });

/**
 * Yorum oluşturulduğunda post'un commentsCount'unu artır
 */
exports.updateCommentCount = functions.firestore
  .document('comments/{commentId}')
  .onCreate(async (snap, context) => {
    const commentData = snap.data();
    const { postId } = commentData;
    
    if (!postId) {
      console.error('Comment has no postId:', commentData);
      return null;
    }
    
    const postRef = db.collection('posts').doc(postId);
    
    try {
      await postRef.update({
        commentsCount: admin.firestore.FieldValue.increment(1),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`Incremented commentsCount for post ${postId}`);
    } catch (error) {
      console.error(`Error incrementing commentsCount:`, error);
    }
    
    return null;
  });

/**
 * Yorum silindiğinde post'un commentsCount'unu azalt
 */
exports.decrementCommentCount = functions.firestore
  .document('comments/{commentId}')
  .onDelete(async (snap, context) => {
    const commentData = snap.data();
    const { postId } = commentData;
    
    if (!postId) {
      return null;
    }
    
    const postRef = db.collection('posts').doc(postId);
    
    try {
      await postRef.update({
        commentsCount: admin.firestore.FieldValue.increment(-1),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      console.log(`Decremented commentsCount for post ${postId}`);
    } catch (error) {
      console.error(`Error decrementing commentsCount:`, error);
    }
    
    return null;
  });

/**
 * Yeni kullanıcı oluşturulduğunda profil dokümanı oluştur
 * 
 * Trigger: Firebase Auth'da yeni kullanıcı oluşturulduğunda
 */
exports.createUserProfile = functions.auth.user().onCreate(async (user) => {
  const { uid, email, displayName, photoURL } = user;
  
  const userRef = db.collection('users').doc(uid);
  const userDoc = await userRef.get();
  
  // Eğer zaten varsa oluşturma
  if (userDoc.exists) {
    console.log(`User profile already exists for ${uid}`);
    return null;
  }
  
  const emailPrefix = email ? email.split('@')[0] : uid;
  
  const profileData = {
    uid,
    email: email || null,
    emailPrefix,
    displayName: displayName || emailPrefix || 'User',
    photoURL: photoURL || null,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    authProvider: user.providerData[0]?.providerId || 'email'
  };
  
  try {
    await userRef.set(profileData);
    console.log(`Created user profile for ${uid}`);
  } catch (error) {
    console.error(`Error creating user profile for ${uid}:`, error);
  }
  
  return null;
});

/**
 * Yeni yorum oluşturulduğunda bildirim oluştur
 * (Post sahibine bildirim)
 */
exports.createCommentNotification = functions.firestore
  .document('comments/{commentId}')
  .onCreate(async (snap, context) => {
    const commentData = snap.data();
    const { postId, userId: commenterId } = commentData;
    
    if (!postId) {
      return null;
    }
    
    // Post sahibini bul
    const postDoc = await db.collection('posts').doc(postId).get();
    if (!postDoc.exists) {
      return null;
    }
    
    const postData = postDoc.data();
    const postOwnerId = postData.userId;
    
    // Kendi postuna yorum yapıyorsa bildirim gönderme
    if (postOwnerId === commenterId) {
      return null;
    }
    
    // Bildirim oluştur
    const notificationData = {
      userId: postOwnerId,
      type: 'comment',
      title: 'New Comment',
      body: `${commentData.authorName || 'Someone'} commented on your post`,
      data: {
        postId,
        commentId: context.params.commentId
      },
      read: false,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    
    try {
      await db.collection('notifications').add(notificationData);
      console.log(`Created notification for user ${postOwnerId}`);
    } catch (error) {
      console.error('Error creating notification:', error);
    }
    
    return null;
  });

/**
 * Storage'da profil fotoğrafı silindiğinde metadata'yı temizle
 */
exports.cleanupStorageMetadata = functions.storage
  .object()
  .onDelete(async (object) => {
    const filePath = object.name;
    
    // Eğer profil fotoğrafı siliniyorsa
    if (filePath.match(/^users\/([^/]+)\/profile\.(jpg|jpeg|png)$/)) {
      const userId = filePath.split('/')[1];
      
      try {
        await db.collection('users').doc(userId).update({
          photoURL: null,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
        console.log(`Cleaned up photoURL for user ${userId}`);
      } catch (error) {
        console.error(`Error cleaning up photoURL:`, error);
      }
    }
    
    return null;
  });

/**
 * Günlük istatistikleri hesapla (scheduled function)
 * 
 * Her gece çalışır ve kullanıcı istatistiklerini günceller
 */
exports.calculateDailyStats = functions.pubsub
  .schedule('0 2 * * *') // Her gün saat 02:00'de
  .timeZone('Europe/Istanbul')
  .onRun(async (context) => {
    console.log('Running daily stats calculation...');
    
    // Bu fonksiyon tüm kullanıcılar için istatistikleri günceller
    // İmplementasyon detayları proje gereksinimlerine göre değişir
    
    return null;
  });

