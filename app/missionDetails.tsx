import * as ImagePicker from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MissionDetails({ route }: { route: any }) {
  const mission = route?.params?.mission || {
    title: "No Mission",
    description: "No description available",
    pts: 0,
  };

  const [taskImages, setTaskImages] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);

  // 🔑 Ask for media library permission on mount
  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permission required",
          "Please allow access to your photos to upload screenshots."
        );
      }
    })();
  }, []);

  const pickImage = async (task: number) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = [...taskImages];
      newImages[task] = result.assets[0].uri;
      setTaskImages(newImages);
    }
  };

  const handleSubmit = (task: number) => {
    if (!taskImages[task]) {
      Alert.alert("Error", `Please upload an image for Task ${task + 1}.`);
      return;
    }
    Alert.alert(
      "Mission Submitted",
      `Task ${task + 1} submitted successfully! 🎯 +10 GTC`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🧩 Mission Details</Text>

      <View style={styles.card}>
        <Text style={styles.title}>{mission.title}</Text>
        <Text style={styles.description}>{mission.description}</Text>
        <Text style={styles.pts}>Total Reward: 🎯 {mission.pts} GTC</Text>

        {/* Render 3 Tasks */}
        {[0, 1, 2].map((task) => (
          <View key={task} style={styles.taskContainer}>
            <Text style={styles.taskHeading}>Task {task + 1} (10 GTC)</Text>

            {taskImages[task] && (
              <Image
                source={{ uri: taskImages[task] }}
                style={styles.previewImage}
              />
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() => pickImage(task)}
            >
              <Text style={styles.buttonText}>Upload Image</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit(task)}
            >
              <Text style={styles.buttonText}>Submit Task {task + 1}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050D2B",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1c1e2f",
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#a164ff",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 15,
  },
  pts: {
    fontSize: 14,
    color: "#FFD700",
    fontWeight: "bold",
    marginBottom: 20,
  },
  taskContainer: {
    marginBottom: 25,
  },
  taskHeading: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 12,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#000",
  },
  previewImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});
