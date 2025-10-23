import React from 'react';
import { useUser } from '../../../context/UserContext';
import ColdTurkeyStatistics from './ColdTurkey';
import GradualStatistics from './Gradual';

const Statistics = ({ navigation }) => {
  const { quitMethod } = useUser();
  
  console.log("Statistics - quitMethod:", quitMethod);
  
  // quitMethod'a göre doğru statistics ekranını göster
  if (quitMethod === 'gradual') {
    console.log("Statistics - Going to GradualStatistics");
    return <GradualStatistics navigation={navigation} />;
  } else if (quitMethod === 'coldturkey') {
    console.log("Statistics - Going to ColdTurkeyStatistics");
    return <ColdTurkeyStatistics navigation={navigation} />;
  }
  
  // Varsayılan olarak ColdTurkey göster
  console.log("Statistics - Default to ColdTurkeyStatistics");
  return <ColdTurkeyStatistics navigation={navigation} />;
};

export default Statistics;
