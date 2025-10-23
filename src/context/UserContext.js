import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [quitMethod, setQuitMethod] = useState(null); // 'coldturkey' or 'gradual'
  const [userData, setUserData] = useState({
    dailyCigarettes: null,
    targetReduction: null,
    quitReason: '',
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
      dailyCigarettes: null,
      targetReduction: null,
      quitReason: '',
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

