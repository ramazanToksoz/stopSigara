# 🔒 Güvenlik Rehberi

## GitHub'a Yüklemeden Önce Yapılması Gerekenler

### ⚠️ ÖNEMLİ: Hassas Dosyalar

Bu dosyalar `.gitignore`'a eklenmiştir ve **ASLA GitHub'a yüklenmemelidir**:

1. **`firebaseConfig.js`** - Firebase API key'leri içerir
2. **`android/app/google-services.json`** - Google Sign-In kimlik bilgileri içerir
3. **`.env*` dosyaları** - Environment değişkenleri

### ✅ Yapılacaklar Listesi

#### 1. firebaseConfig.js Kontrolü
```bash
# Dosyanın git'te olup olmadığını kontrol edin
git ls-files | grep firebaseConfig.js

# Eğer listede çıkıyorsa:
git rm --cached firebaseConfig.js
```

#### 2. google-services.json Kontrolü
```bash
# Dosyanın git'te olup olmadığını kontrol edin
git ls-files | grep google-services.json

# Eğer listede çıkıyorsa:
git rm --cached android/app/google-services.json
```

#### 3. .gitignore Kontrolü
`.gitignore` dosyasında şunlar olmalı:
```
firebaseConfig.js
google-services.json
/android/app/google-services.json
```

#### 4. Hassas Bilgiler Kontrolü

App.js ve diğer dosyalarda şunlar kontrol edilmeli:

**App.js'de:**
```javascript
webClientId: 'YOUR_CLIENT_ID_HERE' // ❌ Gerçek ID yazılmamalı
```

**Çözüm:**
```javascript
// app.config.js veya .env kullanın
webClientId: process.env.GOOGLE_WEB_CLIENT_ID
```

### 🛠️ Önerilen Çözümler

#### 1. Environment Variables Kullanın
`.env` dosyası oluşturun:
```env
GOOGLE_WEB_CLIENT_ID=your_client_id_here
FIREBASE_API_KEY=your_api_key_here
```

Ve `.gitignore`'a ekleyin:
```
.env
.env.local
.env.*.local
```

#### 2. Config Example Dosyaları Oluşturun
```bash
# firebaseConfig.example.js
cp firebaseConfig.js firebaseConfig.example.js
# Sonra içindeki gerçek keyleri kaldırın

# google-services.example.json
cp android/app/google-services.json android/app/google-services.example.json
# Sonra içindeki gerçek bilgileri kaldırın
```

### 📝 Commit ve Push Checklist

GitHub'a yüklemeden önce şunları kontrol edin:

- [ ] `git status` komutuyla değişiklikleri kontrol edin
- [ ] `firebaseConfig.js` listede YOK mu?
- [ ] `google-services.json` listede YOK mu?
- [ ] `.gitignore` dosyasında gerekli dosyalar var mı?
- [ ] README.md dosyası hazır mı?
- [ ] Commit message açıklayıcı mı?

### 🚀 Commit ve Push

```bash
# Değişiklikleri ekleyin
git add .

# Önemli: firebaseConfig.js'yi unutmayın!
git status  # firebaseConfig.js'in listede OLMADIGINI kontrol edin

# Commit yapın
git commit -m "feat: Add tracking system and performance improvements"

# Push yapın
git push origin master
```

### 🔍 Eğer Hassas Dosyalar Güncel Değilse

Eğer zaten GitHub'a yüklenmiş hassas dosyalar varsa:

1. Dosyaları değiştirin
2. `.gitignore`'a ekleyin
3. Commit edin
4. GitHub'da dosyaları manuel olarak silin veya:
   ```bash
   git rm --cached firebaseConfig.js
   git commit -m "remove sensitive files"
   git push
   ```

### 📞 Yardım Gerekiyorsa

- Firebase Console'da API key'lerinizi sıfırlayın
- Google Cloud Console'da Client ID'lerinizi yenileyin
- Etkilenen kullanıcıları bilgilendirin

