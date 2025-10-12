import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Home.styles'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../../../../constants/Colors'
import { useUser } from '../../../../context/UserContext'

const GradualHome = ({ navigation }) => {
  const { userData } = useUser()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.brand[60]} />
      
      {/* Top Section - Green Background */}
      <View style={styles.topSection}>
        {/* Top Navigation */}
        <View style={styles.topNav}>
          <View style={styles.leading}>
            <View style={styles.avatarContainer}>
              <Image 
                source={require('../../../../assets/images/icons/logo.png')} 
                style={styles.avatar}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.greetingText}>Good morning,</Text>
              <Text style={styles.userName}>Brian</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.notificationButton}>
            <View style={styles.notificationIcon}>
              <Image 
                source={require('../../../../assets/images/icons/OUTLINE.png')} 
                style={styles.iconImage}
              />
              <View style={styles.indicator} />
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Main Content */}
        <View style={styles.mainContent}>
          <View style={styles.topContent}>
            <Text style={styles.mainTitle}>3 Days</Text>
            <Text style={styles.subtitle}>
              Günlük hedefinizi takip edin ve sigarayı azaltın.
            </Text>
          </View>
          
          {/* Metrics */}
          <View style={styles.metricsContainer}>
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>{userData.dailyCigarettes || 20}</Text>
              <Text style={styles.metricLabel}>Today</Text>
            </View>
            
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>$75</Text>
              <Text style={styles.metricLabel}>Saved</Text>
            </View>
            
            <View style={styles.metricCard}>
              <Text style={styles.metricValue}>45%</Text>
              <Text style={styles.metricLabel}>Progress</Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* Bottom Content - White Background */}
      <ScrollView style={styles.bottomContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {/* Daily Check-In Card */}
          <View style={styles.cardMission}>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Daily Check-In</Text>
              <Text style={styles.cardSubtitle}>Tell us how you're feeling today</Text>
            </View>
            <TouchableOpacity style={styles.checkInButton}>
              <Text style={styles.buttonText}>Check-in</Text>
              <Image 
                source={require('../../../../assets/images/icons/arrow-right.png')} 
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Craving Assistance Section */}
          <View style={styles.cravingSection}>
            <View style={styles.sectionHeading}>
              <View style={styles.sectionMain}>
                <Text style={styles.sectionTitle}>Craving Assistance</Text>
              </View>
            </View>
            
            <View style={styles.assistanceList}>
              <View style={styles.assistanceItem}>
                <View style={styles.assistanceIcon}>
                  <Image 
                    source={require('../../../../assets/images/icons/sms.png')} 
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.assistanceLabel}>AI Chat</Text>
              </View>
              
              <View style={styles.assistanceItem}>
                <View style={styles.assistanceIcon}>
                  <Image 
                    source={require('../../../../assets/images/icons/Group 728.png')} 
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.assistanceLabel}>Mini Game</Text>
              </View>
              
              <View style={styles.assistanceItem}>
                <View style={styles.assistanceIcon}>
                  <Image 
                    source={require('../../../../assets/images/icons/tick-circle.png')} 
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.assistanceLabel}>Breathing</Text>
              </View>
              
              <View style={styles.assistanceItem}>
                <View style={styles.assistanceIcon}>
                  <Image 
                    source={require('../../../../assets/images/icons/freeplan.png')} 
                    style={styles.iconImage}
                  />
                </View>
                <Text style={styles.assistanceLabel}>Other</Text>
              </View>
            </View>
          </View>

          {/* Next Milestone Section */}
          <View style={styles.milestoneSection}>
            <View style={styles.sectionHeading}>
              <View style={styles.sectionMain}>
                <Text style={styles.sectionTitle}>Next Milestone</Text>
              </View>
            </View>
            
            <View style={styles.milestoneCard}>
              <View style={styles.milestoneMain}>
                <View style={styles.milestoneLeading}>
                  <View style={styles.improvement}>
                    <View style={styles.milestoneIcon}>
                      <View style={styles.progressCircle}>
                        <Image 
                          source={require('../../../../assets/images/icons/tick-circle.png')} 
                          style={styles.milestoneIconImage}
                        />
                      </View>
                    </View>
                    <Text style={styles.progressText}>45%</Text>
                  </View>
                </View>
                
                <View style={styles.milestoneText}>
                  <Text style={styles.milestoneTitle}>Week 1</Text>
                  <Text style={styles.milestoneSubtitle}>
                    Günlük hedefinize ulaştınız. Bir sonraki hafta için hazırlanın.
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Community Feed Section */}
          <View style={styles.communitySection}>
            <View style={styles.sectionHeading}>
              <View style={styles.sectionMain}>
                <Text style={styles.sectionTitle}>Community Feed</Text>
              </View>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View all</Text>
                <Image 
                  source={require('../../../../assets/images/icons/arrow-right.png')} 
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
            
            <View style={styles.postCard}>
              <View style={styles.postTop}>
                <View style={styles.postLeft}>
                  <Image 
                    source={require('../../../../assets/images/icons/Avatar.png')} 
                    style={styles.postAvatar}
                  />
                  <View style={styles.postUserInfo}>
                    <Text style={styles.postUserName}>Sarah</Text>
                    <Text style={styles.postTime}>14m ago</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.postOptions}>
                  <Image 
                    source={require('../../../../assets/images/icons/OUTLINE.png')} 
                    style={styles.optionsIcon}
                  />
                </TouchableOpacity>
              </View>
              
              <View style={styles.postBody}>
                <Text style={styles.postContent}>
                  One week done 🎉! Food already tastes better and I'm breathing easier. Still tough after meals, but I'm proud.
                </Text>
                <View style={styles.postImage} />
              </View>
              
              <View style={styles.postBottom}>
                <View style={styles.postLeftActions}>
                  <View style={styles.likes}>
                    <Image 
                      source={require('../../../../assets/images/icons/tick-circle.png')} 
                      style={styles.actionIcon}
                    />
                    <Text style={styles.actionText}>1.4K</Text>
                  </View>
                  <View style={styles.comments}>
                    <Image 
                      source={require('../../../../assets/images/icons/sms.png')} 
                      style={styles.actionIcon}
                    />
                    <Text style={styles.actionText}>128</Text>
                  </View>
                </View>
                <View style={styles.postRightActions}>
                  <Image 
                    source={require('../../../../assets/images/icons/Archive.png')} 
                    style={styles.actionIcon}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default GradualHome

