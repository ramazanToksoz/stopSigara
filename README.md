# StopSigara - Quit Smoking App

A React Native Expo application to help users quit smoking with personalized tracking and support.

## Features

- Welcome screens with app introduction
- Onboarding flow to collect user preferences
- Firebase Authentication (Email/Password)
- Form validation with Formik + Yup
- Settings pages with comprehensive options
- Data collection and management

## Firebase Setup

1. Copy `firebaseConfig.example.js` to `firebaseConfig.js`
2. Replace placeholder values with your actual Firebase configuration:
   - Go to Firebase Console → Project Settings → General
   - Copy your config values and replace the placeholders
3. Make sure `firebaseConfig.js` is in `.gitignore` (already added)

## Installation

```bash
# Install dependencies
npm install

# Install Firebase
npm install firebase

# Install Formik and Yup for form validation
npm install formik yup

# Start the development server
npx expo start
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── screens/            # App screens
│   ├── Light/          # Light theme screens
│   │   ├── Auth/       # Authentication screens
│   │   ├── Welcome/    # Welcome flow
│   │   ├── Onboarding/ # User onboarding
│   │   └── Settings/   # Settings pages
├── navigation/         # Navigation configuration
├── context/           # React Context providers
├── constants/         # App constants (colors, etc.)
└── assets/           # Images, fonts, icons
```

## Technologies Used

- React Native (Expo)
- Firebase Authentication
- React Navigation
- Formik + Yup (Form validation)
- React Context (State management)

## Security Note

⚠️ **IMPORTANT**: Never commit `firebaseConfig.js` to version control. It contains sensitive API keys. Use `firebaseConfig.example.js` as a template.
