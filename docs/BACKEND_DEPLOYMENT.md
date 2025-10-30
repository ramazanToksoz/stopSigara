# 🚀 Backend Deployment Rehberi

Bu dokümantasyon, Firebase backend yapılandırmasının nasıl deploy edileceğini açıklar.

## 📋 Ön Gereksinimler

1. Firebase CLI kurulu olmalı: `npm install -g firebase-tools`
2. Firebase projesine giriş yapılmış olmalı: `firebase login`
3. Proje dizininde Firebase başlatılmış olmalı: `firebase init`

## 1️⃣ Firestore Security Rules Deployment

### Adımlar:

1. Firebase Console'a git: https://console.firebase.google.com/
2. Projeni seç: `stopsigara-dbb7a`
3. Sol menüden **Firestore Database** seç
4. **Rules** sekmesine git
5. `firestore.rules` dosyasının içeriğini kopyala ve yapıştır
6. **Publish** butonuna bas

### Alternatif: CLI ile Deploy

```bash
firebase deploy --only firestore:rules
```

## 2️⃣ Firestore Indexes Deployment

### Composite Index Oluşturma:

Firebase Console'dan otomatik link'ler gelecektir. Eğer bir query çalıştırdığında "index required" hatası alırsanız:

1. Firebase Console > Firestore Database > Indexes
2. **Create Index** butonuna bas
3. `firestore.indexes.json` dosyasındaki her bir index için manuel oluştur

### Alternatif: CLI ile Deploy

```bash
firebase deploy --only firestore:indexes
```

**Not:** Indexler oluşturulurken birkaç dakika sürebilir. Console'da durumu kontrol edebilirsin.

## 3️⃣ Storage Security Rules Deployment

### Adımlar:

1. Firebase Console > **Storage**
2. **Rules** sekmesine git
3. `firebase-storage-rules.txt` dosyasının içeriğini kopyala ve yapıştır
4. **Publish** butonuna bas

### Alternatif: CLI ile Deploy

```bash
firebase deploy --only storage
```

## 4️⃣ Cloud Functions (Opsiyonel)

Cloud Functions kullanmak istersen:

1. `functions` klasörü oluştur: `firebase init functions`
2. `functions/index.js` dosyasında fonksiyonları yaz
3. Deploy: `firebase deploy --only functions`

**Örnek Cloud Functions dosyası** için `docs/cloud-functions-example.js` dosyasına bak.

## 5️⃣ Ortam Değişkenleri Yönetimi

### Önemli Dosyalar (.gitignore'da olmalı):

- `firebaseConfig.js` - Firebase API key'leri
- `android/app/google-services.json` - Android Google Sign-In credentials
- `.env` - Environment variables

### .gitignore Kontrolü

```bash
# Dosyaların git'te olmadığını kontrol et
git ls-files | grep -E "(firebaseConfig|google-services|\.env)"
```

Eğer listede çıkıyorsa:
```bash
git rm --cached firebaseConfig.js
git rm --cached android/app/google-services.json
```

## 6️⃣ Test

### Rules Test

Deploy sonrası test etmek için:

1. Firebase Console > Firestore > Rules sekmesinde **Simulator** kullan
2. Farklı senaryoları test et:
   - Authenticated kullanıcı post oluşturma
   - Başkasının postunu silme denemesi (reddedilmeli)
   - Profil güncelleme

### Production Kontrolü

Production'da ilk kez kullanıldığında:

1. Firestore Rules Console'da son güncellenme zamanını kontrol et
2. Indexlerin oluşturulduğunu doğrula
3. Storage Rules'ın aktif olduğunu kontrol et

## 📝 Deployment Checklist

- [ ] Firestore Rules deploy edildi
- [ ] Firestore Indexes oluşturuldu
- [ ] Storage Rules deploy edildi
- [ ] Cloud Functions deploy edildi (opsiyonel)
- [ ] Hassas dosyalar `.gitignore`'da
- [ ] Rules test edildi (Simulator ile)
- [ ] Production'da test yapıldı

## 🔍 Sorun Giderme

### "Permission denied" Hatası

- Rules'ın doğru deploy edildiğini kontrol et
- `auth.currentUser` null mu kontrol et
- Rules'daki helper fonksiyonları kontrol et

### "Index required" Hatası

- Firestore Console'da index oluşturma linkine tıkla
- Veya `firestore.indexes.json` deploy et
- Index oluşturuluncaya kadar bekle (birkaç dakika)

### Analytics Uyarıları

- React Native'de Analytics desteklenmiyor, bu normal
- `firebaseConfig.js` içinde `isSupported()` guard'ı eklendi

## 🔗 Yararlı Linkler

- [Firebase Console](https://console.firebase.google.com/)
- [Firestore Rules Dokümantasyonu](https://firebase.google.com/docs/firestore/security/get-started)
- [Storage Rules Dokümantasyonu](https://firebase.google.com/docs/storage/security)
- [Firestore Indexes](https://firebase.google.com/docs/firestore/query-data/indexes)

