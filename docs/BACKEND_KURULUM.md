# 🔧 Backend Kurulum Rehberi

Bu rehber, Firebase backend'inin ilk kurulumu için gerekli adımları açıklar.

## 📦 Gereksinimler

1. **Firebase Projesi**
   - [Firebase Console](https://console.firebase.google.com/) üzerinden proje oluştur
   - Proje ID: `stopsigara-dbb7a` (veya kendi projen)

2. **Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **Giriş**
   ```bash
   firebase login
   ```

## 🗄️ 1. Firestore Database Kurulumu

### Adımlar:

1. Firebase Console > **Firestore Database**
2. **Create database** butonuna bas
3. **Start in production mode** seç (Rules'ı sonra ayarlayacağız)
4. Location seç (örn: `europe-west1`)
5. **Enable**

### İlk Kurulum Sonrası:

1. **Rules** sekmesine git
2. `firestore.rules` dosyasının içeriğini yapıştır ve **Publish**
3. **Indexes** sekmesine git
4. `firestore.indexes.json` dosyasını yükle veya CLI ile deploy et:
   ```bash
   firebase deploy --only firestore:indexes
   ```

## 📦 2. Storage Kurulumu

### Adımlar:

1. Firebase Console > **Storage**
2. **Get started** butonuna bas
3. **Start in production mode** seç
4. **Next** ve **Done**

### Rules Ayarlama:

1. Storage > **Rules** sekmesine git
2. `firebase-storage-rules.txt` dosyasının içeriğini yapıştır
3. **Publish** butonuna bas

## 🔐 3. Authentication Kurulumu

### Email/Password:

1. Firebase Console > **Authentication**
2. **Get started** > **Sign-in method** sekmesi
3. **Email/Password**'ı enable et

### Google Sign-In:

1. **Google** provider'ı enable et
2. **Support email** seç
3. **Save**

## ☁️ 4. Cloud Functions (Opsiyonel)

Cloud Functions kullanmak istersen:

```bash
firebase init functions
```

Seçenekler:
- Language: JavaScript
- ESLint: Yes (önerilir)
- Install dependencies: Yes

Sonra `functions/index.js` dosyasına `docs/cloud-functions-example.js` içindeki kodları ekle.

Deploy:
```bash
firebase deploy --only functions
```

## 📱 5. Android Yapılandırması

### google-services.json:

1. Firebase Console > Project Settings
2. **Your apps** > Android app
3. `google-services.json` dosyasını indir
4. `android/app/google-services.json` konumuna kopyala

### Package Name:

`app.json` içinde package name doğru mu kontrol et:
```json
"android": {
  "package": "com.rnramo.stopSigara"
}
```

## 🍎 6. iOS Yapılandırması (Opsiyonel)

iOS için `GoogleService-Info.plist` dosyasını indir ve `ios/` klasörüne ekle.

## 🔑 7. Environment Variables

### firebaseConfig.js:

Root dizinde `firebaseConfig.js` dosyası oluştur:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

**ÖNEMLİ:** Bu dosya `.gitignore`'da olmalı!

### App.js - Google Sign-In:

`App.js` içinde `webClientId` için:

1. Firebase Console > Authentication > Sign-in method > Google
2. **Web SDK configuration** altındaki **Web client ID**'yi kopyala
3. `App.js` içinde kullan

## ✅ Kurulum Sonrası Kontroller

- [ ] Firestore Database oluşturuldu
- [ ] Firestore Rules deploy edildi
- [ ] Firestore Indexes oluşturuldu
- [ ] Storage oluşturuldu ve Rules deploy edildi
- [ ] Authentication enable edildi (Email/Password ve Google)
- [ ] `google-services.json` Android'e eklendi
- [ ] `firebaseConfig.js` oluşturuldu ve doğru yapılandırıldı
- [ ] `App.js` içinde Google Sign-In webClientId ayarlandı
- [ ] Hassas dosyalar `.gitignore`'da

## 🧪 Test

### Authentication Test:

```javascript
import { auth } from './firebaseConfig';
import { signInWithEmail } from './src/services/authService';

// Test
const result = await signInWithEmail('test@example.com', 'password123');
console.log('Auth test:', result);
```

### Firestore Test:

```javascript
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

// Test (Rules'ın çalıştığını doğrula)
const testDoc = await addDoc(collection(db, 'users'), {
  test: 'data'
});
```

## 📚 Sonraki Adımlar

1. **Deployment Rehberi:** `docs/BACKEND_DEPLOYMENT.md` dosyasına bak
2. **Cloud Functions:** `docs/cloud-functions-example.js` dosyasına bak
3. **Security Guide:** `docs/SECURITY-GUIDE.md` dosyasına bak

## 🆘 Sorun Giderme

### "Permission denied" Hatası

- Rules'ın publish edildiğini kontrol et
- Firebase Console'da Rules'ı tekrar kontrol et
- `auth.currentUser` null mu kontrol et

### Index Hatası

- Firebase Console'da Index oluşturma linkine tıkla
- Index oluşuncaya kadar bekle (birkaç dakika)

### Google Sign-In Çalışmıyor

- `google-services.json` dosyasının doğru yerde olduğunu kontrol et
- `webClientId`'nin doğru olduğunu kontrol et
- Android Studio'da rebuild yap

