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

const GradualHome = ({ navigation }) => {
  const { userData } = useUser()

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
              avatarSource={require('../../../../assets/images/icons/Avatar.png')}
              greetingText="Good morning,"
              userName="Brian"
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
              <Text style={styles.mainTitle}>3/Gün</Text>
              <Text style={styles.weekSubtitle}>
              Eskiden: 20/Gün
              </Text>
            </View>
            
            {/* Metrics */}
            <View style={styles.metricsContainer}>
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>40%</Text>
                <Text style={styles.metricLabel}>Azalma</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>14</Text>
                <Text style={styles.metricLabel}>Önlendi</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>$32</Text>
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

