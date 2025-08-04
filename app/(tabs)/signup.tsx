import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import CheckBox from "react-native-checkbox"; // ✅ Updated
import Icon from "@react-native-vector-icons/feather"; // ✅ Use new icon package

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [agreedTOS, setAgreedTOS] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          <Text style={styles.highlight}>Join</Text> GamerThred
        </Text>

        {/* Username */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <Icon name="user-plus" size={14} color="#aaa" /> Username
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your Gamer Tag"
            placeholderTextColor="#888"
            value={formData.username}
            onChangeText={(text) => handleChange("username", text)}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <Icon name="mail" size={14} color="#aaa" /> Email
          </Text>
          <TextInput
            style={styles.input}
            placeholder="you@example.com"
            placeholderTextColor="#888"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <Icon name="lock" size={14} color="#aaa" /> Password
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Create a strong password"
            placeholderTextColor="#888"
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry
          />
        </View>

        {/* Terms & Privacy */}
        <View style={styles.agreements}>
          <View style={styles.agreementRow}>
            <CheckBox
              label=""
              checked={agreedTOS}
              onChange={() => setAgreedTOS(!agreedTOS)}
            />
            <Text style={styles.agreementText}>
              I agree to the <Text style={styles.link}>Terms & Conditions</Text>
            </Text>
          </View>
          <View style={styles.agreementRow}>
            <CheckBox
              label=""
              checked={agreedPrivacy}
              onChange={() => setAgreedPrivacy(!agreedPrivacy)}
            />
            <Text style={styles.agreementText}>
              I agree to the <Text style={styles.link}>Privacy Policy</Text>
            </Text>
          </View>
        </View>

        {/* Signup Button */}
        <TouchableOpacity
          style={[
            styles.signupButton,
            !(agreedTOS && agreedPrivacy) && styles.disabledButton,
          ]}
          disabled={!agreedTOS || !agreedPrivacy}
        >
          <Text style={styles.signupButtonText}>⚡ Sign Up</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Login</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#050D2B",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(30, 30, 46, 0.95)",
    borderRadius: 15,
    padding: 20,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  highlight: {
    color: "#a855f7",
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: "#aaa",
    marginBottom: 5,
    fontSize: 12,
  },
  input: {
    backgroundColor: "#1e1e2e",
    color: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#444",
  },
  agreements: {
    marginVertical: 15,
  },
  agreementRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  agreementText: {
    color: "#a855f7",
    fontSize: 12,
    marginLeft: 8,
  },
  link: {
    color: "#a855f7",
    textDecorationLine: "underline",
  },
  signupButton: {
    backgroundColor: "#9333ea",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 20,
  },
  disabledButton: {
    backgroundColor: "#555",
  },
  signupButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 12,
  },
});
