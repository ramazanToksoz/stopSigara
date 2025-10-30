/**
 * Calculation Utilities
 * Helper functions for various calculations (savings, health improvements, streaks, etc.)
 */

/**
 * Default cigarette price per pack (can be customized per user)
 */
const DEFAULT_PRICE_PER_PACK = 5; // TL
const DEFAULT_CIGARETTES_PER_PACK = 20;

/**
 * Calculate price per cigarette
 * @param {number} pricePerPack - Price per pack
 * @param {number} cigarettesPerPack - Cigarettes per pack
 * @returns {number} Price per cigarette
 */
const getPricePerCigarette = (pricePerPack = DEFAULT_PRICE_PER_PACK, cigarettesPerPack = DEFAULT_CIGARETTES_PER_PACK) => {
  return pricePerPack / cigarettesPerPack;
};

/**
 * Calculate total savings from avoided cigarettes
 * @param {number} cigarettesAvoided - Number of cigarettes avoided
 * @param {number} pricePerPack - Price per pack (default: 5 TL)
 * @param {number} cigarettesPerPack - Cigarettes per pack (default: 20)
 * @returns {number} Total savings in currency
 */
export const calculateSavings = (
  cigarettesAvoided,
  pricePerPack = DEFAULT_PRICE_PER_PACK,
  cigarettesPerPack = DEFAULT_CIGARETTES_PER_PACK
) => {
  if (!cigarettesAvoided || cigarettesAvoided <= 0) {
    return 0;
  }
  
  const pricePerCigarette = getPricePerCigarette(pricePerPack, cigarettesPerPack);
  return Math.round(cigarettesAvoided * pricePerCigarette * 100) / 100;
};

/**
 * Health improvement milestones based on days smoke-free
 * @param {number} daysSinceQuit - Days since quit
 * @returns {object} Health improvements object
 */
export const calculateHealthImprovements = (daysSinceQuit) => {
  const improvements = {
    heartRate: daysSinceQuit >= 1 ? 'Normal seviyeye döndü' : null,
    bloodOxygen: daysSinceQuit >= 1 ? 'İyileşti' : null,
    circulation: daysSinceQuit >= 3 ? 'İyileşti' : null,
    carbonMonoxide: daysSinceQuit >= 1 ? 'Vücuttan temizlendi' : null,
    smell: daysSinceQuit >= 2 ? 'Gerçekleri algılamaya başladı' : null,
    taste: daysSinceQuit >= 2 ? 'İyileşmeye başladı' : null,
    lungFunction: daysSinceQuit >= 2 ? 'İyileşmeye başladı' : null,
    breathing: daysSinceQuit >= 3 ? 'Daha kolay nefes alma' : null,
    energy: daysSinceQuit >= 3 ? 'Enerji seviyesi arttı' : null,
    heartAttack: daysSinceQuit >= 7 ? 'Risk azaldı' : null,
    stroke: daysSinceQuit >= 7 ? 'Risk azaldı' : null,
    lungCancer: daysSinceQuit >= 30 ? 'Risk azalmaya başladı' : null,
    heartDisease: daysSinceQuit >= 30 ? 'Risk azaldı' : null,
    oralCancer: daysSinceQuit >= 90 ? 'Risk azaldı' : null,
    chronicLung: daysSinceQuit >= 90 ? 'İyileşme belirtileri' : null,
  };
  
  return improvements;
};

/**
 * Calculate current streak from check-in history
 * @param {Array} checkInHistory - Array of check-in dates (YYYY-MM-DD strings)
 * @param {string} today - Today's date (YYYY-MM-DD)
 * @returns {number} Current streak in days
 */
export const calculateStreak = (checkInHistory, today) => {
  if (!checkInHistory || checkInHistory.length === 0) {
    return 0;
  }
  
  // Sort dates descending
  const sortedDates = [...checkInHistory]
    .map((date) => (typeof date === 'string' ? date : date.date || date))
    .filter((date) => date)
    .sort((a, b) => new Date(b) - new Date(a));
  
  if (sortedDates.length === 0) {
    return 0;
  }
  
  // Convert dates for comparison
  const todayDate = new Date(today);
  todayDate.setHours(0, 0, 0, 0);
  
  let streak = 0;
  let currentDate = new Date(todayDate);
  
  for (const dateStr of sortedDates) {
    const checkInDate = new Date(dateStr);
    checkInDate.setHours(0, 0, 0, 0);
    
    const diffTime = currentDate - checkInDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // If difference is 0 or 1 day, continue the streak
    if (diffDays === 0 || (diffDays === 1 && streak === 0)) {
      streak++;
      currentDate = checkInDate;
    } else if (diffDays === 1) {
      // Consecutive day
      streak++;
      currentDate = checkInDate;
    } else {
      // Streak broken
      break;
    }
  }
  
  return streak;
};

/**
 * Calculate longest streak from check-in history
 * @param {Array} checkInHistory - Array of check-in dates (YYYY-MM-DD strings)
 * @returns {number} Longest streak in days
 */
export const calculateLongestStreak = (checkInHistory) => {
  if (!checkInHistory || checkInHistory.length === 0) {
    return 0;
  }
  
  // Sort dates ascending
  const sortedDates = [...checkInHistory]
    .map((date) => (typeof date === 'string' ? date : date.date || date))
    .filter((date) => date)
    .sort((a, b) => new Date(a) - new Date(b));
  
  if (sortedDates.length === 0) {
    return 0;
  }
  
  let longestStreak = 1;
  let currentStreak = 1;
  
  for (let i = 1; i < sortedDates.length; i++) {
    const prevDate = new Date(sortedDates[i - 1]);
    const currDate = new Date(sortedDates[i]);
    
    prevDate.setHours(0, 0, 0, 0);
    currDate.setHours(0, 0, 0, 0);
    
    const diffTime = currDate - prevDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      // Consecutive day
      currentStreak++;
      longestStreak = Math.max(longestStreak, currentStreak);
    } else {
      // Streak broken
      currentStreak = 1;
    }
  }
  
  return longestStreak;
};

/**
 * Calculate reduction rate for gradual method
 * @param {number} initialCigarettes - Initial daily cigarettes
 * @param {number} currentCigarettes - Current daily cigarettes
 * @returns {number} Reduction percentage
 */
export const calculateReductionRate = (initialCigarettes, currentCigarettes) => {
  if (!initialCigarettes || initialCigarettes <= 0) {
    return 0;
  }
  
  const reduction = initialCigarettes - currentCigarettes;
  const reductionRate = (reduction / initialCigarettes) * 100;
  
  return Math.max(0, Math.min(100, Math.round(reductionRate * 100) / 100));
};

/**
 * Calculate total cigarettes avoided (for gradual method)
 * @param {number} initialCigarettes - Initial daily cigarettes
 * @param {number} currentCigarettes - Current daily cigarettes
 * @param {number} daysSinceStart - Days since starting gradual reduction
 * @returns {number} Total cigarettes avoided
 */
export const calculateGradualAvoided = (
  initialCigarettes,
  currentCigarettes,
  daysSinceStart
) => {
  if (!initialCigarettes || initialCigarettes <= 0 || daysSinceStart <= 0) {
    return 0;
  }
  
  // Linear reduction model
  const averageReduction = (initialCigarettes - currentCigarettes) / 2;
  return Math.round(averageReduction * daysSinceStart);
};

/**
 * Calculate completion percentage for gradual reduction goal
 * @param {number} initialCigarettes - Initial daily cigarettes
 * @param {number} currentCigarettes - Current daily cigarettes
 * @param {number} targetReduction - Target reduction percentage
 * @returns {number} Completion percentage (0-100)
 */
export const calculateGoalCompletion = (
  initialCigarettes,
  currentCigarettes,
  targetReduction
) => {
  if (!initialCigarettes || initialCigarettes <= 0 || !targetReduction || targetReduction <= 0) {
    return 0;
  }
  
  const targetCigarettes = initialCigarettes * (1 - targetReduction / 100);
  const currentReduction = initialCigarettes - currentCigarettes;
  const targetReductionAmount = initialCigarettes - targetCigarettes;
  
  if (targetReductionAmount <= 0) {
    return 100;
  }
  
  const completion = (currentReduction / targetReductionAmount) * 100;
  return Math.max(0, Math.min(100, Math.round(completion * 100) / 100));
};

/**
 * Calculate daily average from array of daily values
 * @param {Array} dailyValues - Array of daily values {date, value}
 * @param {number} period - Period in days (default: all data)
 * @returns {number} Average value
 */
export const calculateDailyAverage = (dailyValues, period = null) => {
  if (!dailyValues || dailyValues.length === 0) {
    return 0;
  }
  
  let values = dailyValues;
  
  // Filter by period if specified
  if (period) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - period);
    values = dailyValues.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= cutoffDate;
    });
  }
  
  if (values.length === 0) {
    return 0;
  }
  
  const sum = values.reduce((acc, item) => acc + (item.value || 0), 0);
  return Math.round((sum / values.length) * 100) / 100;
};

