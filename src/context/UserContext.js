import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [quitMethod, setQuitMethod] = useState(null); // 'coldturkey' or 'gradual'
  const [userData, setUserData] = useState({
    // Onboarding1 - Reminder preferences
    reminders: [],
    
    // Onboarding2 - Quit reason (radio selection)
    quitReasonType: null, // 'health', 'family', 'money', 'social', 'other'
    
    // Onboarding3 - Quit method and related data
    quitDate: null, // For cold turkey
    dailyCigarettes: null, // For gradual
    targetReduction: null, // For gradual
    
    // Onboarding4 - Personal quit reason (text)
    personalQuitReason: '',
  });
  
  // Profile cache - Firestore'dan gelen kullanıcı profil bilgileri
  const [profileData, setProfileData] = useState(null);
  const [isProfileLoading, setIsProfileLoading] = useState(false);

  const updateQuitMethod = (method) => {
    console.log("UserContext - updateQuitMethod called with:", method);
    setQuitMethod(method);
  };

  const updateUserData = (data) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const resetUserData = () => {
    setQuitMethod(null);
    setUserData({
      reminders: [],
      quitReasonType: null,
      quitDate: null,
      dailyCigarettes: null,
      targetReduction: null,
      personalQuitReason: '',
    });
  };

  const updateProfileData = (data) => {
    setProfileData(data);
  };

  const clearProfileData = () => {
    setProfileData(null);
  };

  return (
    <UserContext.Provider 
      value={{ 
        quitMethod, 
        userData, 
        updateQuitMethod, 
        updateUserData,
        resetUserData,
        // Profile cache
        profileData,
        isProfileLoading,
        setIsProfileLoading,
        updateProfileData,
        clearProfileData
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};

export default UserContext;

