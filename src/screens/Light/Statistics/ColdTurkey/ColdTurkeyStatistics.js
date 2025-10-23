import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { styles } from "./ColdTurkeyStatistics.styles";
import TopNavigation from "../../../../components/TopNavigation";
import { StatusBar } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const ColdTurkeyStatistics = ({ navigation }) => {
  console.log("=== COLD TURKEY STATISTICS COMPONENT LOADED ===");
  const [activeTab, setActiveTab] = useState("This Week");
  const [selectedValue, setSelectedValue] = useState(null);

  const tabOptions = ["This Week", "This Month", "All Time"];

  const improvementsData = {
    days: 7,
    icon: require("../../../../assets/images/icons/kas2.png"),
    title: "7 Gün",
    description:
      "Enerji seviyeleriniz artar, tat alma duyunuz gelişir ve uyku kaliteniz iyileşir.",
  };

  const metricsData = {
    smokeFreeDays: 7,
    cigarettesAvoided: 350, // Figma'da 350
    moneySaved: 96.45,
  };

  const chartData = {
    title: "İstek Yoğunluğu",
    trend: {
      direction: "down",
      percentage: -67,
      description: "Geçen haftaya göre %67 azalma",
    },
  };

  // İstek yoğunluğu verileri (Figma tasarımına göre)
  const cravingData = [
    { value: 8, label: "M", date: "02" },
    { value: 7, label: "T", date: "03" },
    { value: 5.2, label: "W", date: "04" },
    { value: 7, label: "T", date: "05" },
    { value: 4.5, label: "F", date: "06" },
    { value: 5.5, label: "S", date: "07" },
    { value: 4, label: "S", date: "08" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />

     

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Improvements Section */}
        <TopNavigation
        showLeadingItem={false}
        showTrailingItem={false}
        showCenterItem={true}
        centerType="title"
        title="İstatistikler"
      />
        <View style={styles.improvementsSection}>
          <View style={styles.improvementsMain}>
            <View style={styles.improvementsTop}>
              <View style={styles.improvementIcon}>
                <Image
                  source={improvementsData.icon}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.improvementTitle}>
                {improvementsData.title}
              </Text>
            </View>
            <Text style={styles.improvementDescription}>
              {improvementsData.description}
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.viewAllButton}
            onPress={() => navigation.navigate('Improvements')}
          >
            <Text style={styles.viewAllButtonText}>
              Sağlık faydalarını görüntüle
            </Text>
            <Image
              source={require("../../../../assets/images/icons/arrow-right.png")}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

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
                  ? "Bu Hafta"
                  : tab === "This Month"
                  ? "Bu Ay"
                  : "Tüm Zamanlar"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Simple Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.chartShadowWrapper}>
            <LineChart
              data={[
                {
                  value: 8,
                  label: "M",
                  onPress: () => setSelectedValue("Pazartesi: 8"),
                },
                {
                  value: 7,
                  label: "T",
                  onPress: () => setSelectedValue("Salı: 7"),
                },
                {
                  value: 5.2,
                  label: "W",
                  onPress: () => setSelectedValue("Çarşamba: 5.2"),
                },
                {
                  value: 7,
                  label: "T",
                  onPress: () => setSelectedValue("Perşembe: 7"),
                },
                {
                  value: 4.5,
                  label: "F",
                  onPress: () => setSelectedValue("Cuma: 4.5"),
                },
                {
                  value: 5.5,
                  label: "S",
                  onPress: () => setSelectedValue("Cumartesi: 5.5"),
                },
                {
                  value: 4,
                  label: "S",
                  onPress: () => setSelectedValue("Pazar: 4"),
                },
              ]}
              height={250}
              width={350}
              color="#58B658"
              thickness={3}
              dataPointsColor="#58B658"
              dataPointsRadius={5}
              curved={true}
              curvature={0.4}
              isAnimated={true}
              animationDuration={1200}
              showDataPointText={false}
              hideDataPoints={false}
              maxValue={10}
              stepValue={2}
              spacing={50}
              initialSpacing={20}
              endSpacing={20}
              showHorizontalLines={true}
              rulesColor="#E9EAEC"
              yAxisColor="#E9EAEC"
              xAxisColor="#E9EAEC"
              hideYAxisText={false}
              hideXAxisText={false}
              areaChart={true}
              startFillColor="rgba(88, 182, 88, 0.4)"
              endFillColor="rgba(255, 255, 255, 0)"
              startOpacity={0.4}
              endOpacity={0}
              gradient={true}
              focusEnabled={true}
              showDataPointOnFocus={true}
              showStripOnFocus={true}
              stripColor="#58B658"
              stripWidth={2}
              stripOpacity={0.6}
              focusedDataPointRadius={7}
              focusedDataPointColor="#FFFFFF"
              focusedDataPointShape="circular"
              onFocus={(item, index) => {
                const dayNames = [
                  "Pazartesi",
                  "Salı",
                  "Çarşamba",
                  "Perşembe",
                  "Cuma",
                  "Cumartesi",
                  "Pazar",
                ];
                setSelectedValue(`${dayNames[index]}: ${item.value}`);
              }}
              pointerConfig={{
                pointer1Color: "#58B658",
                pointerRadius: 6,
                pointerWidth: 3,
                pointerHeight: 3,
                showPointerStrip: true,
                pointerStripColor: "#58B658",
                pointerStripWidth: 2,
                pointerStripOpacity: 0.8,
                activatePointersDelay: 100,
                pointerVanishDelay: 200,
              }}
              yAxisTextStyle={{
                color: "#6C707A",
                fontSize: 12,
                fontFamily: "DMSans-Medium",
              }}
              xAxisLabelTextStyle={{
                color: "#6C707A",
                fontSize: 12,
                fontFamily: "DMSans-Medium",
              }}
            />
          </View>

          {/* Selected Value Display */}
          {selectedValue && (
            <View style={styles.selectedValueContainer}>
              <Text style={styles.selectedValueText}>
                Seçilen: {selectedValue}
              </Text>
            </View>
          )}
        </View>

        {/* Metrics Section */}
        <View style={styles.metricsSection}>
          {/* Main Card */}
          <View style={styles.mainMetricCard}>
            <View style={styles.mainMetricTop}>
              <Text style={styles.mainMetricValue}>
                {metricsData.smokeFreeDays} Days
              </Text>
              <Text style={styles.mainMetricLabel}>Smoke-Free</Text>
            </View>
            <Text style={styles.mainMetricDescription}>
              That's {metricsData.cigarettesAvoided} cigarettes avoided so far.
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

export default ColdTurkeyStatistics;
