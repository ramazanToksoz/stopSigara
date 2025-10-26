# Unsmoke - Quit Smoking App

A React Native mobile application designed to help users quit smoking through gradual reduction or cold turkey methods.

## 🚀 Features

- **Authentication**: Email/password and Google Sign-In
- **Quit Methods**: 
  - Cold Turkey: Immediate cessation
  - Gradual: Progressive reduction
- **Progress Tracking**: Daily check-ins and progress monitoring
- **Community**: Social feed with posts and support
- **Statistics**: Health improvements and savings tracking
- **Settings**: Personalization and account management

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v16 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/stopSigara.git
cd stopSigara
```

2. Install dependencies:
```bash
npm install
```

3. Firebase Setup:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Download `google-services.json` and place it in `android/app/`
   - Create `firebaseConfig.js` in the root directory (see below)
   - Enable Authentication (Email/Password and Google)
   - Enable Firestore Database

4. Create `firebaseConfig.js`:
```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
```

5. Google Sign-In Setup:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create OAuth 2.0 Client IDs
   - Get Web Application Client ID
   - Update `webClientId` in `App.js`

## 🏃 Running the App

```bash
# Start the development server
npx expo start

# For Android
npx expo run:android

# For iOS (macOS only)
npx expo run:ios
```

## 📱 App Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── navigation/         # Navigation structure
├── screens/            # App screens
├── services/           # API and business logic
├── constants/          # Constants (colors, etc.)
└── assets/             # Images, fonts, etc.
```

## 🔒 Security

⚠️ **Important**: Never commit sensitive files to version control:
- `firebaseConfig.js` - Contains Firebase keys
- `google-services.json` - Contains app credentials
- `.env` files - Contains environment variables

These files are already in `.gitignore`.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, please open an issue in the repository.
