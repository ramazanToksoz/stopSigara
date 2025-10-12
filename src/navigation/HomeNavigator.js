import React from 'react';
import { useUser } from '../context/UserContext';
import ColdTurkeyHome from '../screens/Light/Home/ColdTurkey';
import GradualHome from '../screens/Light/Home/Gradual';

const HomeNavigator = ({ navigation }) => {
  const { quitMethod } = useUser();
  
  // quitMethod'a göre doğru home ekranını göster
  if (quitMethod === 'gradual') {
    return <GradualHome navigation={navigation} />;
  } else if (quitMethod === 'coldturkey') {
    return <ColdTurkeyHome navigation={navigation} />;
  }
  
  // Varsayılan olarak ColdTurkey göster
  return <ColdTurkeyHome navigation={navigation} />;
};

export default HomeNavigator;

