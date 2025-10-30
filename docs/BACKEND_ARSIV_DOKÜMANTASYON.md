# Backend Altyapı Dokümantasyonu

## 📋 İçindekiler
1. [Genel Bakış](#genel-bakış)
2. [Mimari Yapı](#mimari-yapı)
3. [Servisler (Services)](#servisler-services)
4. [Custom Hooks](#custom-hooks)
5. [Constants ve Utilities](#constants-ve-utilities)
6. [Kullanım Örnekleri](#kullanım-örnekleri)
7. [Firestore Database Schema](#firestore-database-schema)
8. [Best Practices](#best-practices)

---

## 🎯 Genel Bakış

Bu backend altyapısı **Firebase/Firestore** tabanlı olarak geliştirilmiştir. Clean Code ve SOLID prensiplerine uygun, scalable ve maintainable bir yapı kurulmuştur.

### Temel Prensipler
- **Separation of Concerns**: Her servis tek bir sorumluluğa sahip
- **Error Handling**: Tüm servisler standart hata yönetimi kullanır
- **Validation**: Tüm input'lar validate edilir
- **Type Safety**: JSDoc ile tam dokümantasyon
- **Reusability**: Custom hook'lar ile kod tekrarı önlenir

---

## 🏗️ Mimari Yapı

```
src/
├── services/           # Backend servisleri
│   ├── checkInService.js
│   ├── communityService.js
│   ├── achievementService.js
│   ├── notificationService.js
│   ├── statisticsService.js
│   ├── validationService.js
│   ├── authService.js (mevcut)
│   ├── firestoreService.js (mevcut)
│   └── trackingService.js (mevcut)
│
├── hooks/              # Custom React hooks
│   ├── useCheckIn.js
│   ├── useCommunity.js
│   ├── useAchievements.js
│   ├── useNotifications.js
│   ├── useStatistics.js
│   ├── useProfileData.js (mevcut - güncellendi)
│   └── useTrackingData.js (mevcut)
│
├── constants/          # Sabitler
│   ├── Collections.js
│   ├── ErrorMessages.js
│   ├── AchievementTypes.js
│   ├── NotificationTypes.js
│   └── Colors.js (mevcut)
│
└── utils/              # Yardımcı fonksiyonlar
    ├── dateHelpers.js
    ├── errorHandler.js
    ├── validators.js
    └── calculations.js
```

---

## 🔧 Servisler (Services)

### 1. checkInService.js

**Amaç**: Günlük check-in işlemlerini yönetir (Mood, Craving, Smoking Records).

**Fonksiyonlar**:
- `createMoodEntry(userId, moodData, date?)` - Mood kaydı oluşturur
- `createCravingEntry(userId, cravingData, date?)` - İstek kaydı oluşturur
- `createSmokingRecord(userId, smokingData, date?)` - Sigara kaydı oluşturur
- `completeCheckIn(userId, checkInData, date?)` - Check-in'i tamamlar ve tüm kayıtları birleştirir
- `getTodayCheckIn(userId, date?)` - Bugünün check-in'ini getirir
- `getCheckInHistory(userId, limit?, startDate?, endDate?)` - Check-in geçmişini getirir
- `getCheckInStats(userId, period)` - İstatistikleri getirir

**Kullanım Örneği**:
```javascript
import { createMoodEntry } from '../services/checkInService';

const result = await createMoodEntry(userId, {
  moodType: 'happy',
  notes: 'İyi bir gün'
});

if (result.success) {
  console.log('Mood kaydedildi:', result.moodId);
} else {
  console.error('Hata:', result.message);
}
```

---

### 2. communityService.js

**Amaç**: Community özelliklerini yönetir (Posts, Comments, Likes).

**Fonksiyonlar**:
- `createPost(userId, postData)` - Yeni post oluşturur
- `updatePost(postId, updates)` - Post günceller
- `deletePost(postId)` - Post siler
- `getPosts(filters, pageSize, lastPostId?)` - Postları getirir (pagination)
- `getPostById(postId)` - Tek post getirir
- `getUserPosts(userId, pageSize, lastPostId?)` - Kullanıcının postlarını getirir
- `createComment(postId, userId, content)` - Yorum oluşturur
- `deleteComment(commentId, postId)` - Yorum siler
- `getPostComments(postId, pageSize, lastCommentId?)` - Post yorumlarını getirir
- `toggleLike(userId, targetType, targetId)` - Beğeni aç/kapat
- `getLikeStatus(userId, targetType, targetId)` - Beğeni durumunu kontrol eder
- `reportContent(contentType, contentId, reason)` - İçeriği raporlar

**Kullanım Örneği**:
```javascript
import { createPost, toggleLike } from '../services/communityService';

// Post oluştur
const postResult = await createPost(userId, {
  content: 'Bu harika bir gün!',
  type: 'story',
  visibility: 'public'
});

// Post'u beğen
const likeResult = await toggleLike(userId, 'post', postResult.postId);
```

---

### 3. achievementService.js

**Amaç**: Kullanıcı achievement'larını ve milestone tracking'i yönetir.

**Fonksiyonlar**:
- `checkAndUnlockAchievements(userId)` - Achievement'ları kontrol eder ve unlock eder
- `getUserAchievements(userId)` - Kullanıcının achievement'larını getirir
- `markAchievementAsSeen(achievementId)` - Achievement'ı görüldü olarak işaretler
- `getAchievementDefinitions()` - Tüm achievement tanımlarını getirir
- `hasAchievement(userId, achievementType)` - Belirli achievement'ı kontrol eder

**Achievement Tipleri**:
- Zaman bazlı: first_day, one_week, one_month, three_months, one_year
- Sigara bazlı: ten_avoided, fifty_avoided, one_hundred_avoided, vb.
- İstek bazlı: ten_cravings_resisted, fifty_cravings_resisted, vb.
- Community: first_post, ten_interactions
- Streak: seven_day_streak, thirty_day_streak

**Kullanım Örneği**:
```javascript
import { checkAndUnlockAchievements } from '../services/achievementService';

// Kullanıcı check-in tamamladıktan sonra achievement kontrolü yap
const result = await checkAndUnlockAchievements(userId);

if (result.success && result.unlockedAchievements.length > 0) {
  // Yeni achievement'lar unlock edildi
  result.unlockedAchievements.forEach(achievement => {
    console.log('Yeni achievement:', achievement.type);
  });
}
```

---

### 4. notificationService.js

**Amaç**: In-app bildirimlerini yönetir.

**Fonksiyonlar**:
- `createNotification(userId, notificationData)` - Bildirim oluşturur
- `getUserNotifications(userId, pageSize, lastNotificationId?, unreadOnly?)` - Bildirimleri getirir
- `markAsRead(notificationId)` - Bildirimi okundu işaretler
- `markAllAsRead(userId)` - Tüm bildirimleri okundu işaretler
- `deleteNotification(notificationId)` - Bildirim siler
- `getUnreadCount(userId)` - Okunmamış bildirim sayısını getirir
- `scheduleReminder(userId, reminderData)` - Hatırlatıcı oluşturur

**Notification Tipleri**:
- `reminder` - Hatırlatıcılar (günlük check-in, vb.)
- `achievement` - Achievement unlock bildirimleri
- `community` - Community etkileşimleri (beğeni, yorum)
- `milestone` - Milestone bildirimleri (1 hafta, 1 ay, vb.)

**Kullanım Örneği**:
```javascript
import { createNotification, NOTIFICATION_TYPES } from '../services/notificationService';

// Achievement bildirimi oluştur
await createNotification(userId, {
  type: NOTIFICATION_TYPES.ACHIEVEMENT,
  title: 'Yeni Başarı!',
  body: 'İlk gününü tamamladın! 🎉',
  data: { achievementId: 'achievement_123' }
});

// Okunmamış sayısını getir
const countResult = await getUnreadCount(userId);
console.log('Okunmamış bildirim:', countResult.count);
```

---

### 5. statisticsService.js

**Amaç**: Kullanıcı istatistiklerini ve analitik verilerini hesaplar.

**Fonksiyonlar**:
- `getProgressStats(userId, quitMethod)` - Genel ilerleme istatistikleri
- `getWeeklyStats(userId)` - Haftalık istatistikler
- `getMonthlyStats(userId)` - Aylık istatistikler
- `getAllTimeStats(userId)` - Tüm zamanlar istatistikleri
- `getHealthImprovements(userId, quitDate)` - Sağlık iyileşmeleri
- `getSavingsBreakdown(userId)` - Tasarruf detayları
- `getCravingPatterns(userId, period)` - İstek pattern'leri
- `getMoodTrends(userId, period)` - Ruh hali trendleri

**Kullanım Örneği**:
```javascript
import { getWeeklyStats, getHealthImprovements } from '../services/statisticsService';

// Haftalık istatistikleri getir
const weeklyStats = await getWeeklyStats(userId);
console.log('Bu hafta:', {
  checkIns: weeklyStats.stats.checkInsCompleted,
  cravings: weeklyStats.stats.totalCravings,
  savings: weeklyStats.stats.netSavings
});

// Sağlık iyileşmelerini getir
const health = await getHealthImprovements(userId, quitDate);
console.log('Sağlık iyileşmeleri:', health.improvements);
```

---

### 6. validationService.js

**Amaç**: Tüm input validasyonlarını ve sanitizasyon işlemlerini yönetir.

**Fonksiyonlar**:
- `validateUserProfileData(profileData)` - Kullanıcı profili validasyonu
- `validateCheckInData(checkInData)` - Check-in verisi validasyonu
- `validateAndSanitizeMoodData(moodData)` - Mood verisi validasyonu ve temizleme
- `validateAndSanitizeCravingData(cravingData)` - Craving verisi validasyonu
- `validateAndSanitizeSmokingRecordData(smokingData)` - Smoking record validasyonu
- `validateAndSanitizePostData(postData)` - Post içeriği validasyonu
- `validateAndSanitizeCommentData(commentData)` - Comment içeriği validasyonu

**Kullanım Örneği**:
```javascript
import { validateAndSanitizePostData } from '../services/validationService';

const validation = validateAndSanitizePostData({
  content: 'Merhaba dünya!',
  type: 'story'
});

if (validation.valid) {
  // Güvenli veri kullanılabilir
  const safeData = validation.data;
} else {
  // Hata mesajları
  console.error(validation.errors);
}
```

---

## 🎣 Custom Hooks

Custom hook'lar React component'lerinde servislerin kullanımını kolaylaştırır ve state yönetimini sağlar.

### 1. useCheckIn.js

**Hook'lar**:
- `useTodayCheckIn()` - Bugünün check-in'ini yönetir
- `useCheckInHistory(limit, startDate, endDate)` - Check-in geçmişini yönetir
- `useCheckInStats(period)` - Check-in istatistiklerini yönetir

**Kullanım**:
```javascript
import { useTodayCheckIn } from '../hooks/useCheckIn';

function CheckInScreen() {
  const { checkIn, isLoading, saveMood, saveCraving, finishCheckIn } = useTodayCheckIn();
  
  const handleMoodSave = async (moodType) => {
    const result = await saveMood({ moodType });
    if (result.success) {
      console.log('Mood kaydedildi!');
    }
  };
  
  return (
    <View>
      {isLoading && <Loading />}
      {checkIn && <Text>Bugünün check-in'i tamamlandı</Text>}
      {/* ... */}
    </View>
  );
}
```

---

### 2. useCommunity.js

**Hook'lar**:
- `usePosts(filters, pageSize)` - Post feed'ini yönetir
- `usePost(postId)` - Tek post'u yönetir
- `usePostComments(postId, pageSize)` - Post yorumlarını yönetir
- `useLikeStatus(targetType, targetId)` - Beğeni durumunu yönetir

**Kullanım**:
```javascript
import { usePosts, useLikeStatus } from '../hooks/useCommunity';

function CommunityScreen() {
  const { posts, isLoading, createPost, loadMore } = usePosts({ type: 'story' });
  
  return (
    <FlatList
      data={posts}
      onEndReached={loadMore}
      renderItem={({ item }) => (
        <PostItem post={item} />
      )}
    />
  );
}

function PostItem({ post }) {
  const { liked, toggleLike } = useLikeStatus('post', post.id);
  
  return (
    <View>
      <Text>{post.content}</Text>
      <Button 
        onPress={toggleLike}
        title={liked ? 'Beğenme' : 'Beğen'}
      />
    </View>
  );
}
```

---

### 3. useAchievements.js

**Hook'lar**:
- `useUserAchievements()` - Kullanıcının achievement'larını yönetir
- `useHasAchievement(achievementType)` - Belirli achievement durumunu kontrol eder

**Kullanım**:
```javascript
import { useUserAchievements } from '../hooks/useAchievements';

function AchievementsScreen() {
  const { achievements, isLoading, checkAchievements, unreadCount } = useUserAchievements();
  
  useEffect(() => {
    // Check-in tamamlandıktan sonra achievement kontrolü yap
    checkAchievements();
  }, []);
  
  return (
    <View>
      {unreadCount > 0 && <Badge count={unreadCount} />}
      {achievements.map(achievement => (
        <AchievementCard key={achievement.id} achievement={achievement} />
      ))}
    </View>
  );
}
```

---

### 4. useNotifications.js

**Hook'lar**:
- `useNotifications(pageSize, unreadOnly)` - Bildirimleri yönetir
- `useUnreadCount()` - Okunmamış bildirim sayısını yönetir

**Kullanım**:
```javascript
import { useNotifications, useUnreadCount } from '../hooks/useNotifications';

function NotificationsScreen() {
  const { notifications, isLoading, markAsRead, markAllAsRead } = useNotifications(20);
  const { count } = useUnreadCount();
  
  return (
    <View>
      <Header>
        <Text>Bildirimler ({count})</Text>
        <Button onPress={markAllAsRead} title="Tümünü Okundu İşaretle" />
      </Header>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem 
            notification={item}
            onPress={() => markAsRead(item.id)}
          />
        )}
      />
    </View>
  );
}
```

---

### 5. useStatistics.js

**Hook'lar**:
- `useProgressStats(period)` - İlerleme istatistikleri
- `useHealthStats()` - Sağlık istatistikleri
- `useSavingsStats()` - Tasarruf istatistikleri
- `useCravingPatterns(period)` - İstek pattern'leri
- `useMoodTrends(period)` - Ruh hali trendleri

**Kullanım**:
```javascript
import { useProgressStats, useSavingsStats } from '../hooks/useStatistics';

function StatisticsScreen() {
  const { stats, isLoading } = useProgressStats('month');
  const { savings } = useSavingsStats();
  
  if (isLoading) return <Loading />;
  
  return (
    <View>
      <StatCard title="Günler" value={stats.daysQuit} />
      <StatCard title="Önlenen Sigara" value={stats.totalAvoided} />
      <StatCard title="Tasarruf" value={`₺${savings.totalSavings}`} />
    </View>
  );
}
```

---

## 📦 Constants ve Utilities

### Constants

#### Collections.js
Firestore collection isimlerini merkezi olarak yönetir:
```javascript
import { COLLECTIONS } from '../constants/Collections';

// Kullanım
const usersRef = collection(db, COLLECTIONS.USERS);
```

#### ErrorMessages.js
Tüm hata mesajları TR/EN olarak tanımlı:
```javascript
import { getErrorMessage } from '../constants/ErrorMessages';

const errorMsg = getErrorMessage('INVALID_EMAIL', 'tr');
```

#### AchievementTypes.js
Tüm achievement tanımları ve kriterleri:
```javascript
import { ACHIEVEMENT_TYPES, getAchievementDefinition } from '../constants/AchievementTypes';

const definition = getAchievementDefinition(ACHIEVEMENT_TYPES.FIRST_DAY);
```

---

### Utilities

#### dateHelpers.js
Tarih işlemleri için yardımcı fonksiyonlar:
```javascript
import { getToday, getWeekRange, formatTimestamp } from '../utils/dateHelpers';

const today = getToday(); // "2024-01-15"
const week = getWeekRange(); // { start: "2024-01-08", end: "2024-01-14" }
const formatted = formatTimestamp(timestamp, 'short', 'tr');
```

#### errorHandler.js
Standart hata yönetimi:
```javascript
import { handleFirestoreError, logError } from '../utils/errorHandler';

try {
  // Firestore işlemi
} catch (error) {
  logError(error, 'context_name');
  return handleFirestoreError(error, 'tr');
}
```

#### validators.js
Input validasyonu:
```javascript
import { isValidEmail, validatePassword, isValidMoodType } from '../utils/validators';

if (isValidEmail(email)) {
  // Email geçerli
}
```

#### calculations.js
Hesaplama fonksiyonları:
```javascript
import { calculateSavings, calculateStreak } from '../utils/calculations';

const savings = calculateSavings(cigarettesAvoided); // TL cinsinden
const streak = calculateStreak(checkInDates, today); // Gün sayısı
```

---

## 💾 Firestore Database Schema

### Collections Yapısı

#### users/{userId}
```javascript
{
  uid: string,
  email: string,
  displayName: string,
  photoURL: string,
  quitMethod: 'coldturkey' | 'gradual',
  onboardingData: {
    reminders: string[],
    quitReasonType: string,
    quitDate: timestamp,
    dailyCigarettes: number,
    targetReduction: number,
    personalQuitReason: string
  },
  settings: {
    language: 'tr' | 'en',
    notifications: boolean
  },
  stats: {
    totalDaysQuit: number,
    totalCigarettesAvoided: number,
    totalMoneySaved: number,
    currentStreak: number,
    longestStreak: number
  },
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### moods/{moodId}
```javascript
{
  userId: string,
  moodType: 'very_sad' | 'sad' | 'neutral' | 'happy' | 'very_happy',
  date: string, // YYYY-MM-DD
  timestamp: timestamp,
  notes?: string
}
```

#### cravings/{cravingId}
```javascript
{
  userId: string,
  intensity: number, // 0-10
  tags: string[], // ['afterMeal', 'stress', 'coffee', 'social']
  date: string,
  timestamp: timestamp,
  resolved: boolean,
  resolutionTime?: number // minutes
}
```

#### smokingRecords/{recordId}
```javascript
{
  userId: string,
  didSmoke: boolean,
  cigarettesCount?: number, // if didSmoke = true
  cigarettesAvoided?: number, // if didSmoke = false
  cravingId?: string,
  date: string,
  timestamp: timestamp,
  notes?: string
}
```

#### checkIns/{checkInId}
```javascript
{
  userId: string,
  date: string, // YYYY-MM-DD (unique per user)
  moodId?: string,
  cravingId?: string,
  smokingRecordId?: string,
  completed: boolean,
  completedAt?: timestamp,
  rewardShown: boolean
}
```

#### posts/{postId}
```javascript
{
  userId: string,
  authorName: string,
  authorAvatar?: string,
  content: string,
  type: 'milestone' | 'story' | 'question' | 'support',
  images?: string[],
  likesCount: number,
  commentsCount: number,
  createdAt: timestamp,
  updatedAt: timestamp,
  isEdited: boolean,
  isReported: boolean,
  visibility: 'public' | 'private'
}
```

#### comments/{commentId}
```javascript
{
  postId: string,
  userId: string,
  authorName: string,
  authorAvatar?: string,
  content: string,
  likesCount: number,
  createdAt: timestamp,
  updatedAt: timestamp,
  isEdited: boolean,
  isReported: boolean
}
```

#### likes/{likeId}
```javascript
{
  userId: string,
  targetType: 'post' | 'comment',
  targetId: string,
  createdAt: timestamp
}
```

#### achievements/{achievementId}
```javascript
{
  userId: string,
  type: string, // Achievement type
  unlockedAt: timestamp,
  seen: boolean
}
```

#### notifications/{notificationId}
```javascript
{
  userId: string,
  type: 'reminder' | 'achievement' | 'community' | 'milestone',
  subtype?: string,
  title: string,
  body: string,
  data?: object,
  read: boolean,
  createdAt: timestamp,
  expiresAt?: timestamp
}
```

---

## 📝 Kullanım Örnekleri

### Check-In Flow Örneği

```javascript
import { useTodayCheckIn } from '../hooks/useCheckIn';

function CompleteCheckInFlow() {
  const { saveMood, saveCraving, saveSmokingRecord, finishCheckIn } = useTodayCheckIn();
  
  const handleCompleteCheckIn = async () => {
    // 1. Mood kaydet
    const moodResult = await saveMood({ 
      moodType: 'happy' 
    });
    
    // 2. Craving kaydet
    const cravingResult = await saveCraving({
      intensity: 5,
      tags: ['coffee', 'social'],
      resolved: false
    });
    
    // 3. Smoking record kaydet (eğer sigara içilmediyse)
    const smokingResult = await saveSmokingRecord({
      didSmoke: false,
      cigarettesAvoided: 10,
      cravingId: cravingResult.cravingId
    });
    
    // 4. Check-in'i tamamla
    const checkInResult = await finishCheckIn({
      moodId: moodResult.moodId,
      cravingId: cravingResult.cravingId,
      smokingRecordId: smokingResult.recordId
    });
    
    if (checkInResult.success) {
      // Check-in tamamlandı!
      navigation.navigate('ProgressReward');
    }
  };
}
```

---

### Community Feed Örneği

```javascript
import { usePosts } from '../hooks/useCommunity';

function CommunityFeed() {
  const { 
    posts, 
    isLoading, 
    createPost, 
    refresh, 
    loadMore 
  } = usePosts({ visibility: 'public' }, 20);
  
  const handleCreatePost = async () => {
    const result = await createPost({
      content: 'Bugün harika bir gün!',
      type: 'story',
      visibility: 'public'
    });
    
    if (result.success) {
      // Post oluşturuldu, feed'i yenile
      refresh();
    }
  };
  
  return (
    <FlatList
      data={posts}
      refreshing={isLoading}
      onRefresh={refresh}
      onEndReached={loadMore}
      renderItem={({ item }) => <PostCard post={item} />}
    />
  );
}
```

---

### Achievement Kontrolü Örneği

```javascript
import { useUserAchievements } from '../hooks/useAchievements';

function AchievementManager() {
  const { checkAchievements, achievements } = useUserAchievements();
  
  // Check-in tamamlandıktan sonra achievement kontrolü yap
  useEffect(() => {
    const checkAchievementsAfterCheckIn = async () => {
      const result = await checkAchievements();
      
      if (result.success && result.unlockedAchievements.length > 0) {
        // Yeni achievement'lar unlock edildi
        result.unlockedAchievements.forEach(achievement => {
          // Bildirim göster veya modal aç
          showAchievementModal(achievement);
        });
      }
    };
    
    checkAchievementsAfterCheckIn();
  }, [checkInCompleted]);
}
```

---

## ✅ Best Practices

### 1. Error Handling
Her zaman servis fonksiyonlarının `success` değerini kontrol edin:
```javascript
const result = await createMoodEntry(userId, moodData);

if (result.success) {
  // Başarılı işlem
} else {
  // Hata yönetimi
  Alert.alert('Hata', result.message || result.error?.message);
}
```

### 2. Loading States
Hook'lardan gelen `isLoading` state'ini kullanın:
```javascript
const { isLoading, posts } = usePosts();

if (isLoading) {
  return <Loading />;
}
```

### 3. Validation
Veri göndermeden önce mutlaka validate edin:
```javascript
import { validateAndSanitizePostData } from '../services/validationService';

const validation = validateAndSanitizePostData(postData);
if (!validation.valid) {
  Alert.alert('Hata', validation.errors.join(', '));
  return;
}
```

### 4. Date Handling
Tarih işlemleri için her zaman `dateHelpers` kullanın:
```javascript
import { getToday, formatDateToYYYYMMDD } from '../utils/dateHelpers';

const today = getToday(); // Doğru format: "YYYY-MM-DD"
```

### 5. Constants Kullanımı
Collection isimleri için constants kullanın:
```javascript
import { COLLECTIONS } from '../constants/Collections';

// ✅ Doğru
const usersRef = collection(db, COLLECTIONS.USERS);

// ❌ Yanlış
const usersRef = collection(db, 'users');
```

### 6. Pagination
Büyük listeler için mutlaka pagination kullanın:
```javascript
const { posts, loadMore, hasMore } = usePosts({}, 20);

<FlatList
  onEndReached={() => {
    if (hasMore) loadMore();
  }}
  ListFooterComponent={() => hasMore && <Loading />}
/>
```

---

## 🔒 Security Rules

Firestore Security Rules örneği (Firebase Console'dan ayarlanmalı):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }
    
    // Users collection
    match /users/{userId} {
      allow read: if isAuthenticated();
      allow write: if isOwner(userId);
    }
    
    // Moods collection
    match /moods/{moodId} {
      allow read: if isOwner(resource.data.userId);
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isOwner(resource.data.userId);
    }
    
    // Posts collection (public)
    match /posts/{postId} {
      allow read: if isAuthenticated() && resource.data.visibility == 'public';
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isOwner(resource.data.userId);
    }
    
    // ... Diğer collection'lar için benzer kurallar
  }
}
```

---

## 🚀 Önemli Notlar

1. **Authentication**: Tüm servisler `auth.currentUser` üzerinden çalışır. Kullanıcı giriş yapmamışsa işlemler başarısız olur.

2. **Timestamps**: Firestore'da `serverTimestamp()` kullanılır, client-side timestamp yerine.

3. **Validation**: Her veri girişinde validation yapılır, sanitization uygulanır.

4. **Error Messages**: Tüm hata mesajları `ErrorMessages.js` içinde merkezi olarak yönetilir ve TR/EN desteği vardır.

5. **Real-time Updates**: Şu an için real-time listener'lar eklenmemiştir, ama hook'lara eklenebilir (Firestore `onSnapshot` kullanarak).

6. **Offline Support**: Firestore offline desteği otomatik çalışır, ancak eksplisit offline stratejiler eklenebilir.

---

## 📚 İleri Seviye Kullanım

### Custom Query'ler
```javascript
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { COLLECTIONS } from '../constants/Collections';

// Özel sorgu örneği
const customQuery = query(
  collection(db, COLLECTIONS.MOODS),
  where('userId', '==', userId),
  where('moodType', '==', 'happy'),
  orderBy('date', 'desc'),
  limit(10)
);

const snapshot = await getDocs(customQuery);
```

### Batch Operations
```javascript
import { writeBatch } from 'firebase/firestore';

const batch = writeBatch(db);

// Birden fazla işlemi batch olarak yap
batch.set(doc1, data1);
batch.update(doc2, data2);
batch.delete(doc3);

await batch.commit();
```

### Transaction Kullanımı
```javascript
import { runTransaction } from 'firebase/firestore';

await runTransaction(db, async (transaction) => {
  const docRef = doc(db, COLLECTIONS.POSTS, postId);
  const postDoc = await transaction.get(docRef);
  
  if (postDoc.exists()) {
    transaction.update(docRef, {
      likesCount: postDoc.data().likesCount + 1
    });
  }
});
```

---

## 🎓 Öğrenme Kaynakları

- Firebase Firestore Dokümantasyonu: https://firebase.google.com/docs/firestore
- React Hooks: https://react.dev/reference/react
- Clean Code Principles: https://github.com/ryanmcdermott/clean-code-javascript

---

## 📞 Destek

Sorularınız veya sorunlarınız için:
1. Kod içindeki JSDoc yorumlarını okuyun
2. Servis dosyalarındaki örnekleri inceleyin
3. Hook implementasyonlarını referans alın

---

**Son Güncelleme**: 2024
**Versiyon**: 1.0
**Yazar**: Backend Architecture Implementation

