import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './Home.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../constants/Colors';
import { useUser } from '../../../../context/UserContext';
import { Svg, Circle } from 'react-native-svg';
import CardPost from '../../../../components/CardPost';
import ListItem from '../../../../components/ListItem';
import TopNavigation from '../../../../components/TopNavigation';
import { useProfileData } from '../../../../hooks/useProfileData';

const GradualHome = ({ navigation }) => {
  const { userData } = useUser();
  const { profileData, isProfileLoading: loading } = useProfileData();
  
  // Profil verilerine göre dinamik sayıları hesapla
  const dailyCigarettes = profileData?.onboardingData?.dailyCigarettes || 20;
  const targetReduction = profileData?.onboardingData?.targetReduction || 40;
  const quitDate = profileData?.onboardingData?.quitDate ? new Date(profileData.onboardingData.quitDate) : new Date();
  
  // Gerçek quit date'den bugüne kadar olan günleri hesapla
  const today = new Date();
  const daysQuit = Math.floor((today - quitDate) / (1000 * 60 * 60 * 24));
  
  // Hedef azalma oranına göre güncel sigara sayısını hesapla
  // Örnek: Başlangıçta 20 sigara, %40 azalma = 12 sigara
  const currentCigarettes = Math.max(1, Math.floor(dailyCigarettes * (1 - targetReduction / 100)));
  
  // Günlük azalma miktarı (örn: 7 günde 20'den 12'ye = günde ~1 azalma)
  const dailyReduction = (dailyCigarettes - currentCigarettes) / 7;
  const preventedCigarettes = Math.floor(daysQuit * dailyReduction);
  
  // Tasarruf hesapla (sigara başına 5 TL)
  const savings = preventedCigarettes * 5;
  
  // Azalma yüzdesi hesapla
  const actualReduction = Math.floor(((dailyCigarettes - currentCigarettes) / dailyCigarettes) * 100);
  
  console.log("GradualHome", { profileData });
  
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Yükleniyor...</Text>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.brand[60]} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Section - Green Background */}
        <View style={styles.topSection}>
          {/* Top Navigation */}
          <View style={styles.topNavWrapper}>
            <TopNavigation
              leadingType="avatar"
              avatarSource={profileData?.photoURL || require('../../../../assets/images/icons/Avatar.png')}
              greetingText="Good morning,"
              userName={profileData?.displayName || profileData?.emailPrefix || "User"}
              onLeadingPress={() => navigation.navigate('Profile')}
              trailingType="notification"
              notificationIcon={require('../../../../assets/images/icons/notification.png')}
              hasNotificationIndicator={true}
              onTrailingPress={() => navigation.navigate('Notifications')}
              backgroundColor="transparent"
              darkMode={true}
            />
          </View>
          
          {/* Main Content */}
          <View style={styles.mainContent}>
            <View style={styles.topContent}>
              <Text style={styles.weekTitle}>Bu Hafta</Text>
              <Text style={styles.mainTitle}>{currentCigarettes}/Gün</Text>
              <Text style={styles.weekSubtitle}>
              Eskiden: {dailyCigarettes}/Gün
              </Text>
            </View>
            
            {/* Metrics */}
            <View style={styles.metricsContainer}>
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>{actualReduction}%</Text>
                <Text style={styles.metricLabel}>Azalma</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>{preventedCigarettes}</Text>
                <Text style={styles.metricLabel}>Önlendi</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>₺{savings}</Text>
                <Text style={styles.metricLabel}>Tasarruf</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
            <View style={styles.cardMission}>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Günlük Kontrol</Text>
                <Text style={styles.cardSubtitle}>Bugün nasıl hissettiğini bize söyle</Text>
              </View>
              <TouchableOpacity style={styles.checkInButton}>
                <Text style={styles.buttonText}>Kontrol Et</Text>
                <Image 
                  source={require('../../../../assets/images/icons/arrow-right1.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.cravingSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>İstek Anında Yardım</Text>
                </View>
              </View>
              
              <View style={styles.assistanceList}>
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/message.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>AI Sohbet</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/game.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>Mini Oyun</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/emoji-normal.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>Nefes Alma</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.assistanceItem}
                  onPress={() => navigation.navigate('CravingAssistance')}
                  activeOpacity={0.8}
                >
                  <View style={styles.assistanceIcon}>
                    <Image 
                      source={require('../../../../assets/images/icons/category-2.png')} 
                      style={styles.iconImage}
                    />
                  </View>
                  <Text style={styles.assistanceLabel}>Diğer</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.milestoneSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>Sonraki Kilometre Taşı</Text>
                </View>
              </View>
              
              <ListItem
                type="default"
                hasLeadingItem={true}
                leadingType="improvement"
                leadingIcon={require('../../../../assets/images/icons/kas.png')}
                leadingSize={60}
                leadingPercent="10%"
                leadingTime="7 Gün"
                leadingCompleted={false}
                titleText="7 Gün"
                hasSupportingText={true}
                supportingText="Enerji seviyeleriniz yükselir, tat alma duyunuz gelişir ve uyku daha dinlendirici olur."
                hasTrailingItem={true}
                trailingType="more"
                onPress={() => console.log('Milestone pressed')}
              />
            </View>

                <View style={styles.communitySection}>
                  <View style={styles.sectionHeading}>
                    <View style={styles.sectionMain}>
                      <Text style={styles.sectionTitle}>Topluluk Paylaşımları</Text>
                    </View>
                    <TouchableOpacity style={styles.viewAllButton}>
                      <Text style={styles.viewAllText}>Tümünü Gör</Text>
                      <Image 
                        source={require('../../../../assets/images/icons/arrow-right.png')} 
                        style={[styles.arrowIcon, { tintColor: Colors.brand[60]}]}
                      />
                    </TouchableOpacity>
                  </View>
                  
                  <CardPost
                    type="Image"
                    name="Sarah"
                    time="14m ago"
                    text="Bir hafta tamamlandı 🎉! Yemekler artık daha lezzetli ve nefes almak daha kolay. Yemeklerden sonra hala zor, ama gururluyum."
                    likes="1.4K"
                    comments="128"
                    onLike={() => console.log('Post liked')}
                    onComment={() => console.log('Post commented')}
                    onSave={() => console.log('Post saved')}
                    onMore={() => console.log('More options')}
                  />
                  
                  <CardPost
                    type="Text"
                    name="Mike"
                    time="1h ago"
                    text="3. gün ve daha güçlü hissediyorum! İstekler gerçek ama mücadele ediyorum. Tüm destek için teşekkürler! 💪"
                    likes="892"
                    comments="45"
                    onLike={() => console.log('Post liked')}
                    onComment={() => console.log('Post commented')}
                    onSave={() => console.log('Post saved')}
                    onMore={() => console.log('More options')}
                  />
                  
                  <CardPost
                    type="Link"
                    name="Emma"
                    time="2h ago"
                    text="Sigara bırakmanın faydaları hakkında bu harika makaleyi buldum. Gerçekten motive edici!"
                    likes="2.1K"
                    comments="156"
                    onLike={() => console.log('Post liked')}
                    onComment={() => console.log('Post commented')}
                    onSave={() => console.log('Post saved')}
                    onMore={() => console.log('More options')}
                  />
                </View>
           </View>
      </ScrollView>
    </View>
  )
}

export default GradualHome

