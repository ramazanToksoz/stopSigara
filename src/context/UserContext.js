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

  return (
    <UserContext.Provider 
      value={{ 
        quitMethod, 
        userData, 
        updateQuitMethod, 
        updateUserData,
        resetUserData 
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

