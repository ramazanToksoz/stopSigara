import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './CravingAssistance.styles';
import TopNavigation from '../../../components/TopNavigation';
import CravingCard from '../../../components/CravingCard';
import { StatusBar } from 'react-native';
import { Colors } from '../../../constants/Colors';

const CravingAssistance = ({ navigation }) => {
  // Sigara isteği yardım kategorileri
  const cravingCategories = [
    {
      id: 1,
      title: "Farkındalık",
      cards: [
        {
          id: 1,
          title: "AI Koç Sohbeti",
          description: "Kişiselleştirilmiş AI koçunuz.",
          icon: require('../../../assets/images/icons/message.png'),
          buttonText: "Sohbet Başlat",
          category: "awareness",
          badge: "Yeni",
          showTime: true,
          lastUsed: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 dakika önce
          onPress: () => console.log('AI Coach Chat pressed')
        },
        {
          id: 2,
          title: "İstek Kaydet",
          description: "Sigara isteğinizin şiddetini kaydedin.",
          icon: require('../../../assets/images/icons/flash.png'),
          buttonText: "Şimdi Kaydet",
          category: "awareness",
          progress: 75,
          onPress: () => console.log('Log Craving pressed')
        }
      ]
    },
    {
      id: 2,
      title: "Sakinleşme ve Düzenleme",
      cards: [
        {
          id: 3,
          title: "Nefes Egzersizi",
          description: "2 dakika nefes egzersizi yapın.",
          icon: require('../../../assets/images/icons/emoji-normal.png'),
          buttonText: "Başla",
          category: "calm",
          showTime: true,
          lastUsed: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 saat önce
          onPress: () => console.log('Breathing Exercise pressed')
        },
        {
          id: 4,
          title: "Rehberli Meditasyon",
          description: "3 dakika rehberli meditasyon yapın.",
          icon: require('../../../assets/images/icons/reserve.png'),
          buttonText: "Başla",
          category: "calm",
          progress: 60,
          onPress: () => console.log('Guided Meditation pressed')
        }
      ]
    },
    {
      id: 3,
      title: "Dikkat Dağıtma ve Katılım",
      cards: [
        {
          id: 5,
          title: "Quiz",
          description: "Hızlı bilgi yarışmasıyla zihninizi zorlayın.",
          icon: require('../../../assets/images/icons/task-square.png'),
          buttonText: "Oyun Oyna",
          onPress: () => console.log('Quiz pressed')
        },
        {
          id: 6,
          title: "Mini Oyun",
          description: "İsteğiniz geçene kadar dokunun, oynayın ve odaklanın.",
          icon: require('../../../assets/images/icons/game.png'),
          buttonText: "Oyun Oyna",
          onPress: () => console.log('Mini Game pressed')
        }
      ]
    },
    {
      id: 4,
      title: "Motivasyon ve Yansıtma",
      cards: [
        {
          id: 7,
          title: "Topluluk",
          description: "Şu anda nasıl hissettiğinizi paylaşın.",
          icon: require('../../../assets/images/icons/people.png'),
          buttonText: "Paylaş",
          onPress: () => console.log('Community pressed')
        },
        {
          id: 8,
          title: "Biriken Para",
          description: "Bu bir haftalık alışveriş demek.",
          amount: "₺1350",
          icon: require('../../../assets/images/icons/money-recive.png'),
          buttonText: "İstatistik Gör",
          category: "motivation",
          badge: "Günlük",
          onPress: () => console.log('Money Saved pressed')
        }
      ]
    }
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FCFCFD" />
      
      <TopNavigation
        leadingType="icon"
        leadingIcon={require('../../../assets/images/icons/arrow-left.png')}
        onLeadingPress={() => navigation.goBack()}
        showCenterItem={true}
        centerType="title"
        title="İstek Anında Yardım"
        showTrailingItem={false}
        backgroundColor="transparent"
      />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {cravingCategories.map((category) => (
          <View key={category.id} style={styles.categorySection}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{category.title}</Text>
            </View>
            
            <View style={styles.cardsContainer}>
              {category.cards.map((card) => (
                <CravingCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  icon={card.icon}
                  buttonText={card.buttonText}
                  amount={card.amount}
                  category={card.category}
                  badge={card.badge}
                  progress={card.progress}
                  lastUsed={card.lastUsed}
                  showTime={card.showTime}
                  onPress={card.onPress}
                />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CravingAssistance;
