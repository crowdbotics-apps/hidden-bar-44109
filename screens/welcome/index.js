import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.text}>
            Welcome to the Youth Lead Georgia App
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FC"
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    borderRadius: 30,
    marginBottom: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "700"
  }
});
export default WelcomeScreen;