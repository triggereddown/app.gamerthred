import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const categories = ["All Categories", "FF", "BGMI", "Valorant"];
const emojis = ["🎮", "🎮", "🎮"];

// Example games data
const games = [
  { id: 1, title: "Free Fire", description: "Battle Royale", pts: 50 },
  { id: 2, title: "BGMI", description: "Classic Match", pts: 70 },
  { id: 3, title: "Valorant", description: "Competitive FPS", pts: 100 },
  { id: 4, title: "COD Mobile", description: "Multiplayer FPS", pts: 80 },
];

// Featured missions data
const featuredMissions = [
  {
    id: 1,
    title: "JioGames",
    subtitle: "GTC 3000",
    color: "#00D4AA",
    bgColor: "#E8F5F3",
  },
  {
    id: 2,
    title: "Zelt",
    subtitle: "GTC 5000",
    color: "#7B68EE",
    bgColor: "#F0EFFF",
  },
];

// Game categories data
const gameCategories = [
  { id: 1, title: "Free Fire MAX", icon: "🎮", color: "#4A90E2" },
  { id: 2, title: "BGMI", icon: "🔫", color: "#FF6B35" },
];

// All missions data
const allMissions = [
  {
    id: 1,
    title: "BGMI",
    subtitle: "Get 5 Knockouts",
    points: "GTC 3500",
    status: "Start now",
    bgColor: "#FF4500",
    image: "🔫",
  },
  {
    id: 2,
    title: "Free Fire MAX",
    subtitle: "Play 3 Games",
    points: "GTC 7500",
    status: "Start now",
    bgColor: "#4169E1",
    image: "🎮",
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcomeText}>Chla ja bsdk</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.coinContainer}>
            <Text style={styles.coinIcon}>💎</Text>
            <Text style={styles.coinText}>GTC Balance</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Text style={styles.notificationIcon}>🔔</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Missions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured missions</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredScroll}
          >
            {featuredMissions.map((mission) => (
              <TouchableOpacity
                key={mission.id}
                style={[
                  styles.featuredCard,
                  { backgroundColor: mission.bgColor },
                ]}
              >
                <View style={styles.featuredContent}>
                  <View
                    style={[
                      styles.featuredIcon,
                      { backgroundColor: mission.color },
                    ]}
                  >
                    <Text style={styles.featuredIconText}>◯◯</Text>
                  </View>
                  <Text
                    style={[styles.featuredTitle, { color: mission.color }]}
                  >
                    {mission.title}
                  </Text>
                  <View style={styles.featuredBottom}>
                    <Text style={styles.featuredSubtitle}>
                      {mission.subtitle}
                    </Text>
                    <TouchableOpacity
                      style={[
                        styles.featuredBtn,
                        { backgroundColor: mission.color },
                      ]}
                    >
                      <Text style={styles.featuredBtnText}>Start now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Game Category */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Game Category</Text>
          <View style={styles.categoryGrid}>
            {gameCategories.map((category) => (
              <TouchableOpacity key={category.id} style={styles.categoryCard}>
                <View
                  style={[
                    styles.categoryIcon,
                    { backgroundColor: category.color },
                  ]}
                >
                  <Text style={styles.categoryIconText}>{category.icon}</Text>
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* All Missions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All missions</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all ›</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.missionsGrid}>
            {allMissions.map((mission) => (
              <TouchableOpacity
                key={mission.id}
                style={[
                  styles.missionCard,
                  { backgroundColor: mission.bgColor },
                ]}
                onPress={() =>
                  router.push({
                    pathname: "/missionDetails",
                    params: {
                      id: mission.id,
                      title: mission.title,
                      description: mission.subtitle,
                      pts: mission.points,
                    },
                  })
                }
              >
                <View style={styles.missionContent}>
                  <Text style={styles.missionImage}>{mission.image}</Text>
                  <Text style={styles.missionTitle}>{mission.title}</Text>
                  <Text style={styles.missionSubtitle}>{mission.subtitle}</Text>
                  <View style={styles.missionBottom}>
                    <Text style={styles.missionPoints}>{mission.points}</Text>
                    <TouchableOpacity style={styles.missionBtn}>
                      <Text style={styles.missionBtnText}>
                        {mission.status}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Original Games Section (keeping your existing logic) */}
        <View style={styles.section}>
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

          {/* Original Games Grid */}
          <Text style={styles.sectionTitle}>Games</Text>
          <View style={styles.grid}>
            {games.map((game) => (
              <TouchableOpacity
                key={game.id}
                style={styles.gameCard}
                onPress={() =>
                  router.push({
                    pathname: "/missionDetails",
                    params: {
                      id: game.id,
                      title: game.title,
                      description: game.description,
                      pts: game.pts,
                    },
                  })
                }
              >
                <Text style={styles.cardText}>{game.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🎯</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🎁</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0E1D",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  welcomeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinContainer: {
    backgroundColor: "#1E2642",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  coinIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  coinText: {
    color: "#FFFFFF",
    fontSize: 12,
  },
  notificationBtn: {
    backgroundColor: "#1E2642",
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationIcon: {
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  seeAllText: {
    color: "#8B5CF6",
    fontSize: 14,
  },
  featuredScroll: {
    marginBottom: 8,
  },
  featuredCard: {
    width: width * 0.7,
    borderRadius: 16,
    marginRight: 12,
    overflow: "hidden",
  },
  featuredContent: {
    padding: 20,
  },
  featuredIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  featuredIconText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  featuredBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  featuredSubtitle: {
    color: "#666",
    fontSize: 14,
  },
  featuredBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  featuredBtnText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  categoryGrid: {
    flexDirection: "row",
    gap: 12,
  },
  categoryCard: {
    alignItems: "center",
    flex: 1,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  categoryIconText: {
    fontSize: 24,
  },
  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
  },
  missionsGrid: {
    flexDirection: "row",
    gap: 12,
  },
  missionCard: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  missionContent: {
    padding: 16,
    alignItems: "center",
  },
  missionImage: {
    fontSize: 32,
    marginBottom: 8,
  },
  missionTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  missionSubtitle: {
    color: "#CCCCCC",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 12,
  },
  missionBottom: {
    alignItems: "center",
    gap: 8,
  },
  missionPoints: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  missionBtn: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  missionBtnText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
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
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    backgroundColor: "#1E2642",
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#2A3A5C",
  },
  navItem: {
    padding: 8,
  },
  navIcon: {
    fontSize: 20,
  },
});
