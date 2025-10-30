/**
 * Community Service
 * Service for managing posts, comments, and likes in the community feed
 */

import {
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  orderBy,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  limit,
  startAfter,
  increment,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { COLLECTIONS } from '../constants/Collections';
import { handleFirestoreError } from '../utils/errorHandler';
import {
  validateAndSanitizePostData,
  validateAndSanitizeCommentData,
  validateUserId,
} from './validationService';
import { auth } from '../../firebaseConfig';

/**
 * Create a new post
 * @param {string} userId - User ID
 * @param {object} postData - Post data { content, type?, visibility?, images? }
 * @returns {Promise<{success: boolean, postId?: string, error?: object}>}
 */
export const createPost = async (userId, postData) => {
  try {
    if (!validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Invalid user ID' },
      };
    }
    
    // Get user profile for author info
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.exists() ? userDoc.data() : {};
    
    const validation = validateAndSanitizePostData(postData);
    if (!validation.valid) {
      return {
        success: false,
        error: { message: validation.errors.join(', ') },
      };
    }
    
    const postDoc = {
      userId,
      authorName: userData.displayName || userData.emailPrefix || 'Anonymous',
      authorAvatar: userData.photoURL || null,
      content: validation.data.content,
      type: validation.data.type,
      visibility: validation.data.visibility,
      images: validation.data.images || [],
      likesCount: 0,
      commentsCount: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      isEdited: false,
      isReported: false,
    };
    
    const docRef = await addDoc(collection(db, COLLECTIONS.POSTS), postDoc);
    
    return {
      success: true,
      postId: docRef.id,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Update a post
 * @param {string} postId - Post document ID
 * @param {object} updates - Updates to apply { content?, type?, visibility?, images? }
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const updatePost = async (postId, updates) => {
  try {
    if (!postId) {
      return {
        success: false,
        error: { message: 'Post ID is required' },
      };
    }
    
    // Validate updates
    const validatedUpdates = {};
    
    if (updates.content) {
      const validation = validateAndSanitizePostData({ content: updates.content });
      if (!validation.valid) {
        return {
          success: false,
          error: { message: validation.errors.join(', ') },
        };
      }
      validatedUpdates.content = validation.data.content;
      validatedUpdates.isEdited = true;
    }
    
    if (updates.type) {
      validatedUpdates.type = updates.type;
    }
    
    if (updates.visibility) {
      validatedUpdates.visibility = updates.visibility;
    }
    
    if (updates.images) {
      validatedUpdates.images = updates.images;
    }
    
    validatedUpdates.updatedAt = serverTimestamp();
    
    await setDoc(doc(db, COLLECTIONS.POSTS, postId), validatedUpdates, { merge: true });
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Delete a post
 * @param {string} postId - Post document ID
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const deletePost = async (postId) => {
  try {
    if (!postId) {
      return {
        success: false,
        error: { message: 'Post ID is required' },
      };
    }
    
    await deleteDoc(doc(db, COLLECTIONS.POSTS, postId));
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get posts with pagination and filters
 * @param {object} filters - Filter options { userId?, type?, visibility? }
 * @param {number} pageSize - Number of posts per page (default: 20)
 * @param {string} lastPostId - Last post ID for pagination
 * @returns {Promise<{success: boolean, posts?: Array, lastPostId?: string, error?: object}>}
 */
export const getPosts = async (filters = {}, pageSize = 20, lastPostId = null) => {
  try {
    let q = query(
      collection(db, COLLECTIONS.POSTS),
      orderBy('createdAt', 'desc')
    );
    
    // Apply filters
    if (filters.userId) {
      q = query(q, where('userId', '==', filters.userId));
    }
    
    if (filters.type) {
      q = query(q, where('type', '==', filters.type));
    }
    
    if (filters.visibility) {
      q = query(q, where('visibility', '==', filters.visibility));
    } else {
      // Default to public posts only
      q = query(q, where('visibility', '==', 'public'));
    }
    
    // Apply pagination
    q = query(q, limit(pageSize));
    
    if (lastPostId) {
      const lastDoc = await getDoc(doc(db, COLLECTIONS.POSTS, lastPostId));
      if (lastDoc.exists()) {
        q = query(q, startAfter(lastDoc));
      }
    }
    
    const querySnapshot = await getDocs(q);
    const posts = [];
    let newLastPostId = null;
    
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data(),
      });
      newLastPostId = doc.id;
    });
    
    return {
      success: true,
      posts,
      lastPostId: newLastPostId,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get a single post by ID
 * @param {string} postId - Post document ID
 * @returns {Promise<{success: boolean, post?: object, error?: object}>}
 */
export const getPostById = async (postId) => {
  try {
    if (!postId) {
      return {
        success: false,
        error: { message: 'Post ID is required' },
      };
    }
    
    const docRef = doc(db, COLLECTIONS.POSTS, postId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        success: true,
        post: {
          id: docSnap.id,
          ...docSnap.data(),
        },
      };
    } else {
      return {
        success: false,
        error: { message: 'Post not found' },
      };
    }
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get user's posts
 * @param {string} userId - User ID
 * @param {number} pageSize - Number of posts per page
 * @param {string} lastPostId - Last post ID for pagination
 * @returns {Promise<{success: boolean, posts?: Array, lastPostId?: string, error?: object}>}
 */
export const getUserPosts = async (userId, pageSize = 20, lastPostId = null) => {
  return getPosts({ userId }, pageSize, lastPostId);
};

/**
 * Create a comment on a post
 * @param {string} postId - Post ID
 * @param {string} userId - User ID
 * @param {string} content - Comment content
 * @returns {Promise<{success: boolean, commentId?: string, error?: object}>}
 */
export const createComment = async (postId, userId, content) => {
  try {
    if (!postId || !validateUserId(userId)) {
      return {
        success: false,
        error: { message: 'Post ID and User ID are required' },
      };
    }
    
    // Get user profile for author info
    const userRef = doc(db, COLLECTIONS.USERS, userId);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.exists() ? userDoc.data() : {};
    
    const validation = validateAndSanitizeCommentData({ content });
    if (!validation.valid) {
      return {
        success: false,
        error: { message: validation.errors.join(', ') },
      };
    }
    
    // Check if post exists
    const postRef = doc(db, COLLECTIONS.POSTS, postId);
    const postDoc = await getDoc(postRef);
    
    if (!postDoc.exists()) {
      return {
        success: false,
        error: { message: 'Post not found' },
      };
    }
    
    // Create comment
    const commentDoc = {
      postId,
      userId,
      authorName: userData.displayName || userData.emailPrefix || 'Anonymous',
      authorAvatar: userData.photoURL || null,
      content: validation.data.content,
      likesCount: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      isEdited: false,
      isReported: false,
    };
    
    const commentRef = await addDoc(collection(db, COLLECTIONS.COMMENTS), commentDoc);
    
    // Update post comments count
    await setDoc(
      postRef,
      { commentsCount: increment(1), updatedAt: serverTimestamp() },
      { merge: true }
    );
    
    return {
      success: true,
      commentId: commentRef.id,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Delete a comment
 * @param {string} commentId - Comment document ID
 * @param {string} postId - Post ID (to decrement comment count)
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const deleteComment = async (commentId, postId) => {
  try {
    if (!commentId) {
      return {
        success: false,
        error: { message: 'Comment ID is required' },
      };
    }
    
    await deleteDoc(doc(db, COLLECTIONS.COMMENTS, commentId));
    
    // Decrement post comments count if postId provided
    if (postId) {
      const postRef = doc(db, COLLECTIONS.POSTS, postId);
      await setDoc(
        postRef,
        { commentsCount: increment(-1), updatedAt: serverTimestamp() },
        { merge: true }
      );
    }
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Get comments for a post
 * @param {string} postId - Post ID
 * @param {number} pageSize - Number of comments per page
 * @param {string} lastCommentId - Last comment ID for pagination
 * @returns {Promise<{success: boolean, comments?: Array, lastCommentId?: string, error?: object}>}
 */
export const getPostComments = async (postId, pageSize = 50, lastCommentId = null) => {
  try {
    if (!postId) {
      return {
        success: false,
        error: { message: 'Post ID is required' },
      };
    }
    
    let q = query(
      collection(db, COLLECTIONS.COMMENTS),
      where('postId', '==', postId),
      orderBy('createdAt', 'asc')
    );
    
    q = query(q, limit(pageSize));
    
    if (lastCommentId) {
      const lastDoc = await getDoc(doc(db, COLLECTIONS.COMMENTS, lastCommentId));
      if (lastDoc.exists()) {
        q = query(q, startAfter(lastDoc));
      }
    }
    
    const querySnapshot = await getDocs(q);
    const comments = [];
    let newLastCommentId = null;
    
    querySnapshot.forEach((doc) => {
      comments.push({
        id: doc.id,
        ...doc.data(),
      });
      newLastCommentId = doc.id;
    });
    
    return {
      success: true,
      comments,
      lastCommentId: newLastCommentId,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Toggle like on post or comment
 * @param {string} userId - User ID
 * @param {string} targetType - 'post' or 'comment'
 * @param {string} targetId - Post or Comment ID
 * @returns {Promise<{success: boolean, liked?: boolean, error?: object}>}
 */
export const toggleLike = async (userId, targetType, targetId) => {
  try {
    if (!validateUserId(userId) || !['post', 'comment'].includes(targetType) || !targetId) {
      return {
        success: false,
        error: { message: 'Invalid parameters' },
      };
    }
    
    // Check if like already exists
    const likeQuery = query(
      collection(db, COLLECTIONS.LIKES),
      where('userId', '==', userId),
      where('targetType', '==', targetType),
      where('targetId', '==', targetId)
    );
    
    const likeSnapshot = await getDocs(likeQuery);
    
    let liked = false;
    
    if (!likeSnapshot.empty) {
      // Unlike - delete existing like
      const likeDoc = likeSnapshot.docs[0];
      await deleteDoc(doc(db, COLLECTIONS.LIKES, likeDoc.id));
      
      // Decrement likes count
      const targetCollection = targetType === 'post' ? COLLECTIONS.POSTS : COLLECTIONS.COMMENTS;
      const targetRef = doc(db, targetCollection, targetId);
      await setDoc(targetRef, { likesCount: increment(-1) }, { merge: true });
      
      liked = false;
    } else {
      // Like - create new like
      const likeDoc = {
        userId,
        targetType,
        targetId,
        createdAt: serverTimestamp(),
      };
      
      await addDoc(collection(db, COLLECTIONS.LIKES), likeDoc);
      
      // Increment likes count
      const targetCollection = targetType === 'post' ? COLLECTIONS.POSTS : COLLECTIONS.COMMENTS;
      const targetRef = doc(db, targetCollection, targetId);
      await setDoc(targetRef, { likesCount: increment(1) }, { merge: true });
      
      liked = true;
    }
    
    return {
      success: true,
      liked,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Check if user has liked a post or comment
 * @param {string} userId - User ID
 * @param {string} targetType - 'post' or 'comment'
 * @param {string} targetId - Post or Comment ID
 * @returns {Promise<{success: boolean, liked?: boolean, error?: object}>}
 */
export const getLikeStatus = async (userId, targetType, targetId) => {
  try {
    if (!validateUserId(userId) || !['post', 'comment'].includes(targetType) || !targetId) {
      return {
        success: false,
        error: { message: 'Invalid parameters' },
      };
    }
    
    const q = query(
      collection(db, COLLECTIONS.LIKES),
      where('userId', '==', userId),
      where('targetType', '==', targetType),
      where('targetId', '==', targetId)
    );
    
    const querySnapshot = await getDocs(q);
    
    return {
      success: true,
      liked: !querySnapshot.empty,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

/**
 * Report content (post or comment)
 * @param {string} contentType - 'post' or 'comment'
 * @param {string} contentId - Post or Comment ID
 * @param {string} reason - Reason for reporting
 * @returns {Promise<{success: boolean, error?: object}>}
 */
export const reportContent = async (contentType, contentId, reason) => {
  try {
    if (!['post', 'comment'].includes(contentType) || !contentId) {
      return {
        success: false,
        error: { message: 'Invalid parameters' },
      };
    }
    
    const targetCollection = contentType === 'post' ? COLLECTIONS.POSTS : COLLECTIONS.COMMENTS;
    const targetRef = doc(db, targetCollection, contentId);
    
    // Mark as reported (in production, you might want a separate reports collection)
    await setDoc(
      targetRef,
      { isReported: true, reportReason: reason, reportedAt: serverTimestamp() },
      { merge: true }
    );
    
    return {
      success: true,
    };
  } catch (error) {
    return handleFirestoreError(error);
  }
};

