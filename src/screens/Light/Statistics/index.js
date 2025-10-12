import React from 'react';
import { useUser } from '../../../context/UserContext';
import ColdTurkeyStatistics from './ColdTurkey';
import GradualStatistics from './Gradual';

const Statistics = ({ navigation }) => {
  const { quitMethod } = useUser();
  
  // quitMethod'a göre doğru statistics ekranını göster
  if (quitMethod === 'gradual') {
    return <GradualStatistics navigation={navigation} />;
  } else if (quitMethod === 'coldturkey') {
    return <ColdTurkeyStatistics navigation={navigation} />;
  }
  
  // Varsayılan olarak ColdTurkey göster
  return <ColdTurkeyStatistics navigation={navigation} />;
};

export default Statistics;
