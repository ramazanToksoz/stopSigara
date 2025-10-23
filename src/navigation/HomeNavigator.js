import React from 'react';
import { useUser } from '../context/UserContext';
import ColdTurkeyHome from '../screens/Light/Home/ColdTurkey';
import GradualHome from '../screens/Light/Home/Gradual';

const HomeNavigator = ({ navigation }) => {
  const { quitMethod } = useUser();
  
  console.log("HomeNavigator - quitMethod:", quitMethod);
  
  // quitMethod'a göre doğru home ekranını göster
  if (quitMethod === 'gradual') {
    console.log("HomeNavigator - Going to GradualHome");
    return <GradualHome navigation={navigation} />;
  } else if (quitMethod === 'coldturkey') {
    console.log("HomeNavigator - Going to ColdTurkeyHome");
    return <ColdTurkeyHome navigation={navigation} />;
  }
  
  // Varsayılan olarak ColdTurkey göster
  console.log("HomeNavigator - Default to GradualHome");
  return <GradualHome navigation={navigation} />;
};

export default HomeNavigator;

