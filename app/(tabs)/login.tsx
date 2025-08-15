import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const menuData = [
  { name: "Streaks", value: "5/7" },
  { name: "Badges earned", value: "29" },
  { name: "Redeem history" },
  { name: "Settings and Logout" },
  { name: "Invite friends" },
];

const login = () => {
  return (
    <View style={styles.outerContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Section with Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profilePic} /> {/* placeholder for image */}
          <View style={styles.userInfo}>
            <Text style={styles.username}>Username : Max4jin</Text>
            <Text style={styles.gtc}>GTC - 2,230</Text>
          </View>
        </View>

        {/* Progress Bar */}
        <Text style={styles.progressLabel}>Progress Bar</Text>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressFill} />
        </View>
        <Text style={styles.levelText}>Level 5 100/300</Text>

        {/* Yellow Settings Card */}
        <View style={styles.settingsCard}>
          <Text style={styles.gtcEarned}>GTC Earned</Text>
          <Text style={styles.gtcValue}>2,230</Text>

          {menuData.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item.name}</Text>
              {item.value && <Text style={styles.menuValue}>{item.value}</Text>}
            </TouchableOpacity>
          ))}

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#050D2B",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  profileCard: {
    backgroundColor: "#6B0FBE",
    borderRadius: 15,
    padding: 15,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "red",
    marginBottom: 10,
  },
  userInfo: {
    alignItems: "center",
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  gtc: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
  progressLabel: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  progressBarContainer: {
    width: "100%",
    height: 10,
    backgroundColor: "#300850",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 5,
  },
  progressFill: {
    width: "35%",
    height: "100%",
    backgroundColor: "red",
  },
  levelText: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 20,
  },
  settingsCard: {
    backgroundColor: "#FFE865",
    borderRadius: 10,
    padding: 15,
    width: "100%",
  },
  gtcEarned: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  gtcValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 14,
    color: "#000",
  },
  menuValue: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    marginTop: 15,
    alignItems: "center",
  },
  logoutText: {
    color: "#000",
    fontWeight: "bold",
  },
});
