import React from 'react';
import { useUser } from '../context/UserContext';
import ColdTurkeyHome from '../screens/Light/Home/ColdTurkey';
import GradualHome from '../screens/Light/Home/Gradual';

const HomeNavigator = () => {
  const { quitMethod } = useUser();
  
  // quitMethod'a göre doğru home ekranını göster
  if (quitMethod === 'coldturkey') {
    return <ColdTurkeyHome />;
  } else if (quitMethod === 'gradual') {
    return <GradualHome />;
  }
  
  // Varsayılan olarak ColdTurkey göster
  return <ColdTurkeyHome />;
};

export default HomeNavigator;

