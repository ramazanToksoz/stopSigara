import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "./GradualStatistics.styles";
import TopNavigation from "../../../../components/TopNavigation";
import { StatusBar } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const GradualStatistics = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("This Week");

  const tabOptions = ["This Week", "This Month", "All Time"];

  const metricsData = {
    smokedVsAllowed: "28/35",
    cigarettesAvoided: 7,
    moneySaved: 96.45,
    reductionRate: 20, // Azalma oranı
  };

  const chartData = {
    title: "Reduction Trend",
    subtitle: "Planned vs. Actual",
    trend: {
      direction: "down",
      percentage: -20,
      description: "Congrats, you cut down 20% this week.",
    },
  };

  // Actual consumption data (Figma design values)
  const actualData = [
    { value: 8, label: "M", dataPointText: "8" },
    { value: 6, label: "T", dataPointText: "6" },
    { value: 4, label: "W", dataPointText: "4" },
    { value: 5, label: "T", dataPointText: "5" },
    { value: 3, label: "F", dataPointText: "3" },
    { value: 4, label: "S", dataPointText: "4" },
    { value: 2, label: "S", dataPointText: "2" },
  ];

  // Planned consumption data (Figma design values)
  const plannedData = [
    { value: 10, label: "M", dataPointText: "10" },
    { value: 8, label: "T", dataPointText: "8" },
    { value: 6, label: "W", dataPointText: "6" },
    { value: 7, label: "T", dataPointText: "7" },
    { value: 5, label: "F", dataPointText: "5" },
    { value: 6, label: "S", dataPointText: "6" },
    { value: 4, label: "S", dataPointText: "4" },
  ];

  console.log("=== GRADUAL STATISTICS COMPONENT LOADED ===");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      <View style={{ marginTop: verticalScale(35) }}>
        <TopNavigation
          leadingType="none"
          showCenterItem={true}
          centerType="title"
          title="Statistic"
          showTrailingItem={false}
          backgroundColor="transparent"
        />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Tab Group Pills */}
        <View style={styles.tabGroupContainer}>
          {tabOptions.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabPill,
                activeTab === tab && styles.tabPillActive,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabPillText,
                  activeTab === tab && styles.tabPillTextActive,
                ]}
              >
                {tab === "This Week"
                  ? "This Week"
                  : tab === "This Month"
                  ? "This Month"
                  : "All Time"}
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
                15 Gün
              </Text>
            </View>
            <Text style={styles.improvementDescription}>
              Kademeli azaltma yöntemiyle sigara tüketiminiz %60 oranında azaldı.
            </Text>
          </View>
          
          <TouchableOpacity 
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('HealthImprovements')}
          >
            <Text style={styles.viewAllButtonText}>
              Detaylı raporu görüntüle
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
              <Text style={styles.chartTitle}>{chartData.title}</Text>
              <Text style={styles.chartSubtitle}>{chartData.subtitle}</Text>
            </View>
          </View>

          <View style={styles.chartContainer}>
            <LineChart
              data={actualData}
              data2={plannedData}
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
              maxValue={10}
              mostNegativeValue={0}
              stepValue={2}
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
          </View>

          {/* Chart Legend */}
          <View style={styles.chartLegend}>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: "#8E949F" }]}
              />
              <Text style={styles.legendText}>Planned</Text>
            </View>
            <View style={styles.legendItem}>
              <View
                style={[styles.legendDot, { backgroundColor: "#58B658" }]}
              />
              <Text style={styles.legendText}>Actual</Text>
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
              <Text style={styles.mainMetricLabel}>Smoked vs. Allowed</Text>
            </View>
            <Text style={styles.mainMetricDescription}>
              {chartData.trend.description}
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
                  ${metricsData.moneySaved}
                </Text>
                <Text style={styles.secondaryCardLabel}>Money Saved</Text>
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
                  Cigarettes Avoided
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
