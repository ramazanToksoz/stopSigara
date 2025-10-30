/**
 * Achievement Types and Definitions
 * All available achievements with their unlock criteria
 */

export const ACHIEVEMENT_TYPES = {
  // Time-based achievements
  FIRST_DAY: 'first_day',
  ONE_WEEK: 'one_week',
  TWO_WEEKS: 'two_weeks',
  ONE_MONTH: 'one_month',
  THREE_MONTHS: 'three_months',
  SIX_MONTHS: 'six_months',
  ONE_YEAR: 'one_year',
  
  // Cigarette avoidance achievements
  TEN_AVOIDED: 'ten_avoided',
  FIFTY_AVOIDED: 'fifty_avoided',
  ONE_HUNDRED_AVOIDED: 'one_hundred_avoided',
  FIVE_HUNDRED_AVOIDED: 'five_hundred_avoided',
  ONE_THOUSAND_AVOIDED: 'one_thousand_avoided',
  
  // Craving resistance achievements
  TEN_CRAVINGS_RESISTED: 'ten_cravings_resisted',
  FIFTY_CRAVINGS_RESISTED: 'fifty_cravings_resisted',
  ONE_HUNDRED_CRAVINGS_RESISTED: 'one_hundred_cravings_resisted',
  
  // Community achievements
  FIRST_POST: 'first_post',
  TEN_INTERACTIONS: 'ten_interactions',
  HELPER: 'helper',
  
  // Consistency achievements
  SEVEN_DAY_STREAK: 'seven_day_streak',
  THIRTY_DAY_STREAK: 'thirty_day_streak',
};

/**
 * Achievement definitions with criteria and metadata
 */
export const ACHIEVEMENT_DEFINITIONS = {
  [ACHIEVEMENT_TYPES.FIRST_DAY]: {
    id: ACHIEVEMENT_TYPES.FIRST_DAY,
    name: { tr: 'İlk Gün', en: 'First Day' },
    description: { tr: 'İlk 24 saat sigarasız geçti!', en: 'First 24 hours smoke-free!' },
    icon: 'star',
    criteria: (stats) => stats.daysQuit >= 1,
    priority: 1,
  },
  
  [ACHIEVEMENT_TYPES.ONE_WEEK]: {
    id: ACHIEVEMENT_TYPES.ONE_WEEK,
    name: { tr: 'Bir Hafta', en: 'One Week' },
    description: { tr: '7 gün sigarasız!', en: '7 days smoke-free!' },
    icon: 'trophy',
    criteria: (stats) => stats.daysQuit >= 7,
    priority: 2,
  },
  
  [ACHIEVEMENT_TYPES.TWO_WEEKS]: {
    id: ACHIEVEMENT_TYPES.TWO_WEEKS,
    name: { tr: 'İki Hafta', en: 'Two Weeks' },
    description: { tr: '14 gün sigarasız!', en: '14 days smoke-free!' },
    icon: 'trophy',
    criteria: (stats) => stats.daysQuit >= 14,
    priority: 3,
  },
  
  [ACHIEVEMENT_TYPES.ONE_MONTH]: {
    id: ACHIEVEMENT_TYPES.ONE_MONTH,
    name: { tr: 'Bir Ay', en: 'One Month' },
    description: { tr: '30 gün sigarasız!', en: '30 days smoke-free!' },
    icon: 'medal',
    criteria: (stats) => stats.daysQuit >= 30,
    priority: 4,
  },
  
  [ACHIEVEMENT_TYPES.THREE_MONTHS]: {
    id: ACHIEVEMENT_TYPES.THREE_MONTHS,
    name: { tr: 'Üç Ay', en: 'Three Months' },
    description: { tr: '90 gün sigarasız!', en: '90 days smoke-free!' },
    icon: 'medal',
    criteria: (stats) => stats.daysQuit >= 90,
    priority: 5,
  },
  
  [ACHIEVEMENT_TYPES.SIX_MONTHS]: {
    id: ACHIEVEMENT_TYPES.SIX_MONTHS,
    name: { tr: 'Altı Ay', en: 'Six Months' },
    description: { tr: '180 gün sigarasız!', en: '180 days smoke-free!' },
    icon: 'crown',
    criteria: (stats) => stats.daysQuit >= 180,
    priority: 6,
  },
  
  [ACHIEVEMENT_TYPES.ONE_YEAR]: {
    id: ACHIEVEMENT_TYPES.ONE_YEAR,
    name: { tr: 'Bir Yıl', en: 'One Year' },
    description: { tr: '365 gün sigarasız!', en: '365 days smoke-free!' },
    icon: 'crown',
    criteria: (stats) => stats.daysQuit >= 365,
    priority: 7,
  },
  
  [ACHIEVEMENT_TYPES.TEN_AVOIDED]: {
    id: ACHIEVEMENT_TYPES.TEN_AVOIDED,
    name: { tr: '10 Sigara Önlendi', en: '10 Cigarettes Avoided' },
    description: { tr: '10 sigarayı önledin!', en: 'You avoided 10 cigarettes!' },
    icon: 'star',
    criteria: (stats) => stats.totalAvoided >= 10,
    priority: 8,
  },
  
  [ACHIEVEMENT_TYPES.FIFTY_AVOIDED]: {
    id: ACHIEVEMENT_TYPES.FIFTY_AVOIDED,
    name: { tr: '50 Sigara Önlendi', en: '50 Cigarettes Avoided' },
    description: { tr: '50 sigarayı önledin!', en: 'You avoided 50 cigarettes!' },
    icon: 'star',
    criteria: (stats) => stats.totalAvoided >= 50,
    priority: 9,
  },
  
  [ACHIEVEMENT_TYPES.ONE_HUNDRED_AVOIDED]: {
    id: ACHIEVEMENT_TYPES.ONE_HUNDRED_AVOIDED,
    name: { tr: '100 Sigara Önlendi', en: '100 Cigarettes Avoided' },
    description: { tr: '100 sigarayı önledin!', en: 'You avoided 100 cigarettes!' },
    icon: 'trophy',
    criteria: (stats) => stats.totalAvoided >= 100,
    priority: 10,
  },
  
  [ACHIEVEMENT_TYPES.FIVE_HUNDRED_AVOIDED]: {
    id: ACHIEVEMENT_TYPES.FIVE_HUNDRED_AVOIDED,
    name: { tr: '500 Sigara Önlendi', en: '500 Cigarettes Avoided' },
    description: { tr: '500 sigarayı önledin!', en: 'You avoided 500 cigarettes!' },
    icon: 'medal',
    criteria: (stats) => stats.totalAvoided >= 500,
    priority: 11,
  },
  
  [ACHIEVEMENT_TYPES.ONE_THOUSAND_AVOIDED]: {
    id: ACHIEVEMENT_TYPES.ONE_THOUSAND_AVOIDED,
    name: { tr: '1000 Sigara Önlendi', en: '1000 Cigarettes Avoided' },
    description: { tr: '1000 sigarayı önledin!', en: 'You avoided 1000 cigarettes!' },
    icon: 'crown',
    criteria: (stats) => stats.totalAvoided >= 1000,
    priority: 12,
  },
  
  [ACHIEVEMENT_TYPES.TEN_CRAVINGS_RESISTED]: {
    id: ACHIEVEMENT_TYPES.TEN_CRAVINGS_RESISTED,
    name: { tr: '10 İstek Direnildi', en: '10 Cravings Resisted' },
    description: { tr: '10 isteğe direndin!', en: 'You resisted 10 cravings!' },
    icon: 'star',
    criteria: (stats) => (stats.cravingsResisted || 0) >= 10,
    priority: 13,
  },
  
  [ACHIEVEMENT_TYPES.FIFTY_CRAVINGS_RESISTED]: {
    id: ACHIEVEMENT_TYPES.FIFTY_CRAVINGS_RESISTED,
    name: { tr: '50 İstek Direnildi', en: '50 Cravings Resisted' },
    description: { tr: '50 isteğe direndin!', en: 'You resisted 50 cravings!' },
    icon: 'trophy',
    criteria: (stats) => (stats.cravingsResisted || 0) >= 50,
    priority: 14,
  },
  
  [ACHIEVEMENT_TYPES.ONE_HUNDRED_CRAVINGS_RESISTED]: {
    id: ACHIEVEMENT_TYPES.ONE_HUNDRED_CRAVINGS_RESISTED,
    name: { tr: '100 İstek Direnildi', en: '100 Cravings Resisted' },
    description: { tr: '100 isteğe direndin!', en: 'You resisted 100 cravings!' },
    icon: 'medal',
    criteria: (stats) => (stats.cravingsResisted || 0) >= 100,
    priority: 15,
  },
  
  [ACHIEVEMENT_TYPES.FIRST_POST]: {
    id: ACHIEVEMENT_TYPES.FIRST_POST,
    name: { tr: 'İlk Gönderi', en: 'First Post' },
    description: { tr: 'Topluluğa ilk gönderini yaptın!', en: 'You made your first community post!' },
    icon: 'star',
    criteria: (stats) => (stats.communityPosts || 0) >= 1,
    priority: 16,
  },
  
  [ACHIEVEMENT_TYPES.TEN_INTERACTIONS]: {
    id: ACHIEVEMENT_TYPES.TEN_INTERACTIONS,
    name: { tr: '10 Etkileşim', en: '10 Interactions' },
    description: { tr: 'Toplulukta 10 etkileşim yaptın!', en: 'You made 10 community interactions!' },
    icon: 'star',
    criteria: (stats) => (stats.communityInteractions || 0) >= 10,
    priority: 17,
  },
  
  [ACHIEVEMENT_TYPES.SEVEN_DAY_STREAK]: {
    id: ACHIEVEMENT_TYPES.SEVEN_DAY_STREAK,
    name: { tr: '7 Gün Seri', en: '7 Day Streak' },
    description: { tr: '7 gün üst üste kontrol yaptın!', en: '7 days check-in streak!' },
    icon: 'trophy',
    criteria: (stats) => (stats.currentStreak || 0) >= 7,
    priority: 18,
  },
  
  [ACHIEVEMENT_TYPES.THIRTY_DAY_STREAK]: {
    id: ACHIEVEMENT_TYPES.THIRTY_DAY_STREAK,
    name: { tr: '30 Gün Seri', en: '30 Day Streak' },
    description: { tr: '30 gün üst üste kontrol yaptın!', en: '30 days check-in streak!' },
    icon: 'medal',
    criteria: (stats) => (stats.currentStreak || 0) >= 30,
    priority: 19,
  },
};

/**
 * Get achievement definition by type
 * @param {string} achievementType - Achievement type constant
 * @returns {object|null} Achievement definition
 */
export const getAchievementDefinition = (achievementType) => {
  return ACHIEVEMENT_DEFINITIONS[achievementType] || null;
};

/**
 * Get all achievement definitions
 * @returns {object} All achievement definitions
 */
export const getAllAchievementDefinitions = () => {
  return ACHIEVEMENT_DEFINITIONS;
};

