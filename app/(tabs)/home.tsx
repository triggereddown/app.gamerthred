import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const categories = ["Daily", "Weekly", "Monthly", "Brand"];
const emojis = ["🎮", "🎮", "🎮"];

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Top Emoji Row */}
      <View style={styles.emojiRow}>
        {emojis.map((emoji, index) => (
          <Text key={index} style={styles.emoji}>
            {emoji}
          </Text>
        ))}
      </View>

      {/* Featured Game Card */}
      <View style={styles.featuredGameCard}>
        <View style={styles.gameThumbnail} />
        <Text style={styles.featuredTag}>Featured</Text>
        <Text style={styles.gameTitle}>Valorant</Text>
        <Text style={styles.gameDetails}>⏱ 30 minutes 👨‍👩‍👧‍👦 4 📍 Online</Text>
      </View>

      {/* Category Scroll */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              index === 0 && styles.activeCategory,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                index === 0 && styles.activeCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Game Section */}
      <Text style={styles.sectionTitle}>Games</Text>
      <View style={styles.grid}>
        {[1, 2, 3, 4].map((item) => (
          <View key={item} style={styles.gameCard} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#0a0f2c", // dark background
    flex: 1,
  },
  emojiRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  emoji: {
    fontSize: 30,
  },
  featuredGameCard: {
    backgroundColor: "#1c1e2f", // card background
    borderRadius: 16,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  gameThumbnail: {
    backgroundColor: "#3a3f5c",
    height: 140,
    borderRadius: 12,
    marginBottom: 10,
  },
  featuredTag: {
    color: "#a164ff", // purple tag
    fontWeight: "bold",
    marginBottom: 5,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  gameDetails: {
    color: "#bbbbbb",
    marginTop: 5,
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: "#1c1e2f",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    borderColor: "#3e3e3e",
    borderWidth: 1,
  },
  categoryText: {
    color: "#bbbbbb",
    fontWeight: "500",
  },
  activeCategory: {
    backgroundColor: "#a164ff",
  },
  activeCategoryText: {
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gameCard: {
    backgroundColor: "#3a3f5c",
    width: (width - 60) / 2,
    height: 120,
    borderRadius: 10,
    marginBottom: 16,
  },
});
