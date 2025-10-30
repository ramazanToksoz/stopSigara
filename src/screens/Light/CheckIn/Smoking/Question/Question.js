import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./Question.styles";
import { StatusBar } from "expo-status-bar";
import { Colors } from "../../../../../constants/Colors";
import TopNavigation from "../../../../../components/TopNavigation";
import Button from "../../../../../components/Button";
import { useTranslation } from "../../../../../hooks/useTranslation";

const Question = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 'yes' or 'no'
  
  // Get IDs from previous screens
  const { moodId, cravingId } = route.params || {};

  const handleAnswerPress = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleContinue = () => {
    if (!selectedAnswer) {
      return;
    }

    // Navigate based on answer, passing along all IDs
    if (selectedAnswer === 'yes') {
      navigation.navigate('SmokingYes', {
        moodId,
        cravingId,
        answer: selectedAnswer,
      });
    } else {
      navigation.navigate('SmokingNo', {
        moodId,
        cravingId,
        answer: selectedAnswer,
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.backgroundColor}
      />

      <TopNavigation
        showLeadingItem={true}
        leadingType="icon"
        leadingIcon="arrow-circle-left"
        onLeadingPress={() => navigation.goBack()}
        showCenterItem={true}
        centerType="title"
        title={t("smokingQuestion.title") || "Check-In"}
        showTrailingItem={false}
        backgroundColor="transparent"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Question */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            {t("smokingQuestion.question") ||
              "Did you end up smoking after this craving?"}
          </Text>
        </View>

        {/* Answer Buttons */}
        <View style={styles.answerContainer}>
          <View style={styles.answerButtonWrapper}>
            <Button
              text={t("smokingQuestion.yes") || "YES"}
              type="neutral"
              buttonStyle={selectedAnswer === "yes" ? "default" : "soft"}
              size="sm"
              mode="light"
              onPress={() => handleAnswerPress("yes")}
              hideArrow={true}
            />
          </View>
          <View style={styles.answerButtonWrapper}>
            <Button
              text={t("smokingQuestion.no") || "NO"}
              type="neutral"
              buttonStyle={selectedAnswer === "no" ? "default" : "soft"}
              size="sm"
              mode="light"
              onPress={() => handleAnswerPress("no")}
              hideArrow={true}
            />
          </View>
        </View>

        {/* Continue Button */}
        <View style={styles.actionContainer}>
          <Button
            text={t("smokingQuestion.continue") || "Continue"}
            type="primary"
            buttonStyle="default"
            size="default"
            mode="light"
            onPress={handleContinue}
            disabled={!selectedAnswer}
            hideArrow={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Question;
