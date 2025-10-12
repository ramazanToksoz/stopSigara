import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './Home.styles';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../../../../constants/Colors';
import { Svg, Circle } from 'react-native-svg';
import CardPost from '../../../../components/CardPost';
import ListItem from '../../../../components/ListItem';
import TopNavigation from '../../../../components/TopNavigation';

const ColdTurkeyHome = ({ navigation }) => {
  console.log('ColdTurkeyHome');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.brand[60]} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.topNavWrapper}>
            <TopNavigation
              leadingType="avatar"
              avatarSource={require('../../../../assets/images/icons/Avatar.png')}
              greetingText="Good morning,"
              userName="Brian"
              trailingType="notification"
              notificationIcon={require('../../../../assets/images/icons/TrailingItem.png')}
              hasNotificationIndicator={true}
              onTrailingPress={() => navigation.navigate('Notifications')}
              backgroundColor="transparent"
              darkMode={true}
            />
          </View>
          
          <View style={styles.mainContent}>
            <View style={styles.topContent}>
              <Text style={styles.mainTitle}>3 Days</Text>
              <Text style={styles.subtitle}>
                Just 4 days away from better energy and deeper sleep.
              </Text>
            </View>
            
            <View style={styles.metricsContainer}>
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>45</Text>
                <Text style={styles.metricLabel}>Avoided</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>$75</Text>
                <Text style={styles.metricLabel}>Saved</Text>
              </View>
              
              <View style={styles.metricCard}>
                <Text style={styles.metricValue}>8.3</Text>
                <Text style={styles.metricLabel}>Craving</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.content}>
            <View style={styles.cardMission}>
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Daily Check-In</Text>
                <Text style={styles.cardSubtitle}>Tell us how you’re feeling today</Text>
              </View>
              <TouchableOpacity style={styles.checkInButton}>
                <Text style={styles.buttonText}>Check-in</Text>
                <Image 
                  source={require('../../../../assets/images/icons/arrow-right1.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.cravingSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>Craving Assistance</Text>
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
                  <Text style={styles.assistanceLabel}>AI Chat</Text>
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
                  <Text style={styles.assistanceLabel}>Mini Game</Text>
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
                  <Text style={styles.assistanceLabel}>Breathing</Text>
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
                  <Text style={styles.assistanceLabel}>Other</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.milestoneSection}>
              <View style={styles.sectionHeading}>
                <View style={styles.sectionMain}>
                  <Text style={styles.sectionTitle}>Next Milestone</Text>
                </View>
              </View>
              
              <ListItem
                type="default"
                hasLeadingItem={true}
                leadingType="improvement"
                leadingIcon={require('../../../../assets/images/icons/kas.png')}
                leadingSize={60}
                leadingPercent="10%"
                leadingTime="7 Days"
                leadingCompleted={false}
                titleText="7 Days"
                hasSupportingText={true}
                supportingText="Eeenergy levels rise, your sense of taste improves, and sleep becomes more restful."
                hasTrailingItem={true}
                trailingType="more"
                onPress={() => console.log('Milestone pressed')}
              />
            </View>

                <View style={styles.communitySection}>
                  <View style={styles.sectionHeading}>
                    <View style={styles.sectionMain}>
                      <Text style={styles.sectionTitle}>Community Feed</Text>
                    </View>
                    <TouchableOpacity style={styles.viewAllButton}>
                      <Text style={styles.viewAllText}>View all</Text>
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
                    text="One week done 🎉! Food already tastes better and I'm breathing easier. Still tough after meals, but I'm proud."
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
                    text="Day 3 and feeling stronger! The cravings are real but I'm pushing through. Thanks for all the support! 💪"
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
                    text="Found this amazing article about the benefits of quitting smoking. Really motivating!"
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

export default ColdTurkeyHome;