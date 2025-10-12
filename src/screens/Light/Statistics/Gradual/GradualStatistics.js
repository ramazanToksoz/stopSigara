import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from './GradualStatistics.styles';
import TopNavigation from '../../../../components/TopNavigation';
import { StatusBar } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const GradualStatistics = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('This Week');

  const tabOptions = ['This Week', 'This Month', 'All Time'];

  const improvementsData = {
    days: 15,
    icon: require('../../../../assets/images/icons/kas2.png'),
    title: "15 Gün",
    description: "Kademeli azaltma yöntemiyle sigara tüketiminiz %60 oranında azaldı."
  };

  const metricsData = {
    smokeFreeDays: 15,
    cigarettesAvoided: 320,
    moneySaved: 210.75,
    cigarettesPerDay: 8, // Mevcut günlük sigara sayısı
    targetCigarettes: 5, // Hedef günlük sigara sayısı
    reductionRate: 60 // Azalma oranı
  };

  const chartData = {
    title: "Günlük Sigara Tüketimi",
    trend: {
      direction: 'down',
      percentage: -42,
      description: 'Hedeflenen azalma oranına göre %42 düşüş'
    }
  };

  // Gerçek tüketim verileri
  const actualData = [
    { value: 12, label: 'P', dataPointText: '12' },
    { value: 11, label: 'S', dataPointText: '11' },
    { value: 10, label: 'Ç', dataPointText: '10' },
    { value: 9, label: 'P', dataPointText: '9' },
    { value: 8, label: 'C', dataPointText: '8' },
    { value: 8, label: 'C', dataPointText: '8' },
    { value: 7, label: 'P', dataPointText: '7' }
  ];

  // Hedef tüketim verileri
  const targetData = [
    { value: 15, label: 'P', dataPointText: '15' },
    { value: 14, label: 'S', dataPointText: '14' },
    { value: 13, label: 'Ç', dataPointText: '13' },
    { value: 12, label: 'P', dataPointText: '12' },
    { value: 11, label: 'C', dataPointText: '11' },
    { value: 10, label: 'C', dataPointText: '10' },
    { value: 9, label: 'P', dataPointText: '9' }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      <TopNavigation
        leadingType="none"
        showCenterItem={true}
        centerType="title"
        title="İstatistik (Kademeli)"
        showTrailingItem={false}
        backgroundColor="transparent"
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Improvements Section */}
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
          
          <TouchableOpacity style={styles.viewAllButton}>
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

        {/* Tab Group Pills */}
        <View style={styles.tabGroupContainer}>
          {tabOptions.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabPill,
                activeTab === tab && styles.tabPillActive
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabPillText,
                activeTab === tab && styles.tabPillTextActive
              ]}>
                {tab === 'This Week' ? 'Bu Hafta' : 
                 tab === 'This Month' ? 'Bu Ay' : 'Tüm Zamanlar'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Chart Section */}
        <View style={styles.chartSection}>
          <View style={styles.chartHeader}>
            <View style={styles.chartTitleContainer}>
              <Text style={styles.chartTitle}>
                {chartData.title}
              </Text>
              <View style={styles.trendContainer}>
                <Text style={[
                  styles.trendText,
                  chartData.trend.direction === 'down' ? styles.trendDown : styles.trendUp
                ]}>
                  {chartData.trend.description}
                </Text>
              </View>
            </View>
          </View>
          
          <View style={styles.chartContainer}>
            <LineChart
              data={actualData}
              data2={targetData}
              height={verticalScale(327)}
              width={scale(361)}
              color1="#58B658"
              color2="#7B68EE"
              thickness1={3}
              thickness2={3}
              dataPointsColor1="#58B658"
              dataPointsColor2="#7B68EE"
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
                color: '#6C707A',
                fontSize: 12,
                fontFamily: 'DMSans-Medium'
              }}
              yAxisTextStyle={{
                color: '#6C707A',
                fontSize: 12,
                fontFamily: 'DMSans-SemiBold'
              }}
              maxValue={20}
              mostNegativeValue={0}
              stepValue={4}
              stepHeight={verticalScale(65)}
              spacing={scale(45)}
              initialSpacing={scale(20)}
              endSpacing={scale(20)}
              curved={false}
              animateOnDataChange={true}
              animationDuration={1000}
            />
          </View>
          
          {/* Chart Legend */}
          <View style={styles.chartLegend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#58B658' }]} />
              <Text style={styles.legendText}>Gerçek Tüketim</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#7B68EE' }]} />
              <Text style={styles.legendText}>Hedef Tüketim</Text>
            </View>
          </View>
        </View>

        {/* Metrics Section */}
        <View style={styles.metricsSection}>
          {/* Main Card */}
          <View style={styles.mainMetricCard}>
            <View style={styles.mainMetricTop}>
              <Text style={styles.mainMetricValue}>
                {metricsData.smokeFreeDays} Gün
              </Text>
              <Text style={styles.mainMetricLabel}>
                Kademeli Azaltma
              </Text>
            </View>
            <Text style={styles.mainMetricDescription}>
              Günlük tüketim {metricsData.cigarettesPerDay} sigaraya düştü. Hedef: {metricsData.targetCigarettes} sigara.
            </Text>
          </View>
          
          {/* Secondary Cards */}
          <View style={styles.secondaryCardsContainer}>
            <View style={styles.secondaryCard}>
              <View style={styles.secondaryCardIcon}>
                <Image 
                  source={require('../../../../assets/images/icons/money-recive.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.secondaryCardText}>
                <Text style={styles.secondaryCardValue}>
                  ₺{metricsData.moneySaved}
                </Text>
                <Text style={styles.secondaryCardLabel}>
                  Biriken Para
                </Text>
              </View>
            </View>
            
            <View style={styles.secondaryCard}>
              <View style={styles.secondaryCardIcon}>
                <Image 
                  source={require('../../../../assets/images/icons/close-circle.png')}
                  style={styles.cardIcon}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.secondaryCardText}>
                <Text style={styles.secondaryCardValue}>
                  %{metricsData.reductionRate}
                </Text>
                <Text style={styles.secondaryCardLabel}>
                  Azalma Oranı
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
