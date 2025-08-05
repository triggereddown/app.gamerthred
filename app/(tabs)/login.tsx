import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
// import Icon from "react-native-vector-icons/Feather"; // for Mail, Lock, LogIn
// import { Icon } from "@expo/vector-icons/build/createIconSet";

type LoginProps = {
  setShowLogin?: (show: boolean) => void;
};

const Login = ({ setShowLogin }: LoginProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name: "email" | "password", value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          <Text style={styles.highlight}>Welcome Back</Text> to GamerThred
        </Text>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {/* <Icon name="mail" size={14} color="#aaa" /> Email */}
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
            {/* <Icon name="lock" size={14} color="#aaa" /> Password */}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#888"
            value={formData.password}
            onChangeText={(text) => handleChange("password", text)}
            secureTextEntry
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          {/* <Icon name="log-in" size={18} color="#fff" /> */}
          <Text style={styles.loginButtonText}> Log In</Text>
        </TouchableOpacity>

        {/* Signup */}
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>

        {/* Close Login */}
        {setShowLogin && (
          <TouchableOpacity onPress={() => setShowLogin(false)}>
            <Text style={styles.closeLogin}>Close Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Login;

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
  forgotPassword: {
    color: "#a855f7",
    textAlign: "right",
    fontSize: 12,
    marginBottom: 15,
  },
  loginButton: {
    flexDirection: "row",
    backgroundColor: "#9333ea",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
  },
  signupText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 12,
  },
  signupLink: {
    color: "#a855f7",
    textDecorationLine: "underline",
  },
  closeLogin: {
    textAlign: "center",
    fontSize: 12,
    color: "#888",
    marginTop: 10,
  },
});
