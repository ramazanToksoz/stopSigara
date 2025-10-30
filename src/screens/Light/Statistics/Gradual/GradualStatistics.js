import React, { useState, useEffect, useMemo } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import { styles } from "./GradualStatistics.styles";
import TopNavigation from "../../../../components/TopNavigation";
import { StatusBar } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { useTranslation } from "../../../../hooks/useTranslation";
import { useTrackingData } from "../../../../hooks/useTrackingData";
import { useProfileData } from "../../../../hooks/useProfileData";
import { getTrackingDataInRange } from "../../../../services/trackingService";
import { auth } from "../../../../../firebaseConfig";
import { formatDateToYYYYMMDD } from "../../../../utils/dateHelpers";
import Loading from "../../../../components/Loading";

const GradualStatistics = ({ navigation }) => {
  const { t } = useTranslation();
  const { profileData, isProfileLoading: isProfileLoading } = useProfileData();
  const [activeTab, setActiveTab] = useState("week");
  const [chartData, setChartData] = useState({ actualData: [], plannedData: [] });
  const [isChartLoading, setIsChartLoading] = useState(false);
  
  const tabOptions = [
    { key: "week", label: t("gradual.range.week") },
    { key: "month", label: t("gradual.range.month") },
    { key: "all", label: t("gradual.range.all") },
  ];

  const rangeMap = {
    week: "week",
    month: "month",
    all: "all",
  };

  const { rangeStats, isLoading: isStatsLoading, refetch } = useTrackingData(rangeMap[activeTab] || "week");

  const baselineDailyCigarettes = profileData?.onboardingData?.dailyCigarettes || 20;
  const targetReduction = profileData?.onboardingData?.targetReduction || 40;
  const targetDailyCigarettes = Math.max(1, Math.floor(baselineDailyCigarettes * (1 - targetReduction / 100)));

  // Metrics from rangeStats
  const metricsData = useMemo(() => {
    if (!rangeStats) {
      return {
        smokedVsAllowed: "0/0",
        cigarettesAvoided: 0,
        moneySaved: 0,
        reductionRate: 0,
      };
    }

    const currentCig = rangeStats.currentCigarettes || 0;
    const targetCig = targetDailyCigarettes || currentCig;
    // Smoked = baseline - prevented; Allowed = target for the period
    // Simple approach: show current vs target
    const smokedVsAllowed = `${Math.round(currentCig)}/${targetCig}`;

    return {
      smokedVsAllowed,
      cigarettesAvoided: rangeStats.preventedCigarettes || 0,
      moneySaved: rangeStats.savings || 0, // Already in TL (kuruş cinsinden değil)
      reductionRate: rangeStats.actualReduction || 0,
    };
  }, [rangeStats, baselineDailyCigarettes, targetDailyCigarettes]);

  // Fetch chart data when tab changes
  useEffect(() => {
    const fetchChartData = async () => {
      if (!auth.currentUser || !activeTab) return;

      setIsChartLoading(true);
      try {
        const today = new Date();
        const endDate = formatDateToYYYYMMDD(today);
        const start = new Date(today);

        if (activeTab === "week") {
          start.setDate(today.getDate() - 6);
        } else if (activeTab === "month") {
          start.setMonth(today.getMonth() - 1);
        } else {
          // all: show last 90 days for chart (to avoid too many points)
          start.setDate(today.getDate() - 90);
        }

        const startDate = formatDateToYYYYMMDD(start);
        const result = await getTrackingDataInRange(auth.currentUser.uid, startDate, endDate);
        
        if (result.success && result.data) {
          // Create a map of date -> entry for quick lookup
          const dataMap = {};
          result.data.forEach(entry => {
            if (entry.date) {
              dataMap[entry.date] = entry;
            }
          });

          // Generate daily array for the range
          const days = [];
          const current = new Date(start);
          while (current <= today) {
            days.push(formatDateToYYYYMMDD(new Date(current)));
            current.setDate(current.getDate() + 1);
          }

          // Calculate planned consumption (linear reduction from baseline to target)
          const totalDays = days.length;
          const actualData = [];
          const plannedData = [];
          // getDay() returns: 0=Sunday, 1=Monday, ..., 6=Saturday
          const dayLabels = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];

          days.forEach((date, index) => {
            const dateObj = new Date(date + "T00:00:00"); // Ensure correct timezone
            const dayLabel = dayLabels[dateObj.getDay()];
            
            // Planned: linear reduction from baseline to target
            const progress = totalDays > 1 ? index / (totalDays - 1) : 0;
            const planned = baselineDailyCigarettes - (baselineDailyCigarettes - targetDailyCigarettes) * progress;
            plannedData.push({
              value: Math.max(0, Math.round(planned)),
              label: dayLabel,
              dataPointText: String(Math.max(0, Math.round(planned))),
            });

            // Actual: from tracking data
            const entry = dataMap[date];
            const actual = entry?.currentDailyCigarettes ?? null;
            actualData.push({
              value: actual !== null ? Math.max(0, Math.round(actual)) : null,
              label: dayLabel,
              dataPointText: actual !== null ? String(Math.max(0, Math.round(actual))) : "",
            });
          });

          setChartData({ actualData, plannedData });
        } else {
          setChartData({ actualData: [], plannedData: [] });
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setChartData({ actualData: [], plannedData: [] });
      } finally {
        setIsChartLoading(false);
      }
    };

    fetchChartData();
  }, [activeTab, baselineDailyCigarettes, targetDailyCigarettes]);

  // Refetch when tab changes (already handled by useTrackingData with range parameter)

  // Calculate days quit for improvements section
  const daysQuit = useMemo(() => {
    if (!profileData?.onboardingData?.quitDate) return 0;
    const quitDate = new Date(profileData.onboardingData.quitDate);
    const today = new Date();
    return Math.max(0, Math.floor((today - quitDate) / (1000 * 60 * 60 * 24)));
  }, [profileData]);

  if (isProfileLoading) {
    return <Loading type="fullscreen" />;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      <View style={{ marginTop: verticalScale(35) }}>
        <TopNavigation
          leadingType="none"
          showCenterItem={true}
          centerType="title"
          title={t("gradual.statistics.title")}
          showTrailingItem={false}
          backgroundColor="transparent"
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tab Group Pills */}
        <View style={styles.tabGroupContainer}>
          {tabOptions.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tabPill,
                activeTab === tab.key && styles.tabPillActive,
              ]}
              onPress={() => setActiveTab(tab.key)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.tabPillText,
                  activeTab === tab.key && styles.tabPillTextActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Improvements Section */}
        <View style={styles.improvementsSection}>
          <View style={styles.improvementsMain}>
            <View style={styles.improvementsTop}>
              <View style={styles.improvementIcon}>
                <Image 
                  source={require('../../../../assets/images/icons/kas2.png')}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.improvementTitle}>
                {t("gradual.statistics.improvementDays", { days: daysQuit })}
              </Text>
            </View>
            <Text style={styles.improvementDescription}>
              {t("gradual.statistics.improvementDescription", { percent: metricsData.reductionRate })}
            </Text>
          </View>
          
          <TouchableOpacity 
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('HealthImprovements')}
          >
            <Text style={styles.viewAllButtonText}>
              {t("gradual.statistics.viewDetailedReport")}
            </Text>
            <Image 
              source={require('../../../../assets/images/icons/arrow-right.png')}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {/* Chart Section */}
        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <View style={styles.chartTitleContainer}>
              <Text style={styles.chartTitle}>{t("gradual.statistics.reductionTrend")}</Text>
              <Text style={styles.chartSubtitle}>{t("gradual.statistics.plannedVsActual")}</Text>
            </View>
          </View>

          <View style={styles.chartContainer}>
            {isChartLoading ? (
              <View style={{ height: verticalScale(327), justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#58B658" />
              </View>
            ) : chartData.actualData.length === 0 && chartData.plannedData.length === 0 ? (
              <View style={{ height: verticalScale(327), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#8E949F', fontSize: 14 }}>Veri bulunamadı</Text>
              </View>
            ) : (
              <LineChart
                data={chartData.actualData.filter(d => d.value !== null)}
                data2={chartData.plannedData}
              height={verticalScale(327)}
              width={scale(361)}
              color1="#58B658"
              color2="#8E949F"
              thickness1={3}
              thickness2={3}
              dataPointsColor1="#58B658"
              dataPointsColor2="#8E949F"
              dataPointsRadius1={4}
              dataPointsRadius2={4}
              hideDataPoints={false}
              showDataPointText={true}
              dataPointTextColor="#54565F"
              dataPointTextFontSize={10}
              textColor1="#54565F"
              textColor2="#54565F"
              hideYAxisText={false}
              yAxisColor="#E9EAEC"
              xAxisColor="#E9EAEC"
              rulesColor="#E9EAEC"
              rulesType="solid"
              hideAxesAndRules={false}
              hideRules={false}
              showVerticalLines={false}
              showHorizontalLines={true}
              yAxisThickness={1}
              xAxisThickness={1}
              xAxisLabelTextStyle={{
                color: "#6C707A",
                fontSize: 12,
                fontFamily: "DMSans-Medium",
              }}
              yAxisTextStyle={{
                color: "#6C707A",
                fontSize: 12,
                fontFamily: "DMSans-SemiBold",
              }}
              maxValue={Math.max(baselineDailyCigarettes, 10)}
              mostNegativeValue={0}
              stepValue={Math.max(2, Math.ceil(baselineDailyCigarettes / 5))}
              stepHeight={verticalScale(65)}
              spacing={scale(45)}
              initialSpacing={scale(20)}
              endSpacing={scale(20)}
              curved={true}
              animateOnDataChange={true}
              animationDuration={1000}
              // Cursor özellikleri
              showStrip={true}
              stripColor="#58B658"
              stripOpacity={0.1}
              stripWidth={1}
              showText1={false}
              showText2={false}
              />
            )}
          </View>

          {/* Chart Legend */}
          <View style={styles.chartLegend}>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: "#8E949F" }]}
              />
              <Text style={styles.legendText}>{t("gradual.statistics.planned")}</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: "#58B658" }]}
              />
              <Text style={styles.legendText}>{t("gradual.statistics.actual")}</Text>
            </View>
          </View>
        </View>

        {/* Metrics Section */}
        <View style={styles.metricsSection}>
          {/* Main Card */}
          <View style={styles.mainMetricCard}>
            <View style={styles.mainMetricTop}>
              <Text style={styles.mainMetricValue}>
                {metricsData.smokedVsAllowed}
              </Text>
              <Text style={styles.mainMetricLabel}>{t("gradual.statistics.smokedVsAllowed")}</Text>
            </View>
            <Text style={styles.mainMetricDescription}>
              {t("gradual.statistics.trendDescription", { 
                period: activeTab === "week" ? t("gradual.range.week").toLowerCase() : activeTab === "month" ? t("gradual.range.month").toLowerCase() : t("gradual.range.all").toLowerCase(),
                percent: metricsData.reductionRate 
              })}
            </Text>
          </View>

          {/* Secondary Cards */}
          <View style={styles.secondaryCardsContainer}>
            <View style={styles.secondaryCard}>
              <View style={styles.secondaryCardIcon}>
                <Image
                  source={require("../../../../assets/images/icons/money-recive.png")}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.secondaryCardText}>
                <Text style={styles.secondaryCardValue}>
                  ₺{Math.round(metricsData.moneySaved)}
                </Text>
                <Text style={styles.secondaryCardLabel}>{t("gradual.statistics.moneySaved")}</Text>
              </View>
            </View>

            <View style={styles.secondaryCard}>
              <View style={styles.secondaryCardIcon}>
                <Image
                  source={require("../../../../assets/images/icons/close-circle.png")}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.secondaryCardText}>
                <Text style={styles.secondaryCardValue}>
                  {metricsData.cigarettesAvoided}
                </Text>
                <Text style={styles.secondaryCardLabel}>
                  {t("gradual.statistics.cigarettesAvoided")}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GradualStatistics;
