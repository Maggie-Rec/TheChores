import { TextInput, View, TouchableOpacity, Text, Alert } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../App";
import { postChore } from "./APIService";

export default function NewTaskScreen() {

  const [choreName, setChoreName] = useState("");
  const [choreDescription, setChoreDescription] = useState("");
  const [choreValue, setChoreValue] = useState("");
  const token = useSelector((state) => state.token);

  async function handlePress() {

    const chore = {
      name: choreName,
      description: choreDescription,
      value: choreValue,
    };

    // Add new task to MongoDB
    try {
      const data = await postChore(chore, token);

      if (data.message === "Chore already exists!")
        Alert.alert("Chore already exists!");
      if (data.message.includes("Chore succesfully created"))
        Alert.alert(`${taskName} task succesfully created!`);

    } catch (err) {
      Alert.alert("Error", err.message);
    }

    // try {
    //   const resp = await fetch("http://192.168.0.25:3001/chore", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(task),
    //   });

    //   const data = await resp.json();
    //   if (data.message === "Chore already exists!")
    //     Alert.alert("Chore already exists!");
    //   if (data.message.includes("Chore succesfully created"))
    //     Alert.alert(`${taskName} task succesfully created!`);
    // } catch (err) {
    //   Alert.alert("Error", err.message);
    // }
  }

  return (
    <View style={styles.login.container}>
      <TextInput
        placeholder="Task Name"
        value={taskName}
        onChangeText={(text) => setChoreName(text)}
        style={styles.login.input}
      />
      <TextInput
        placeholder="Description"
        value={taskDescription}
        onChangeText={(text) => setChoreDescription(text)}
        style={styles.login.input}
      />
      <TextInput
        placeholder="Value points of this task"
        value={taskValue}
        onChangeText={(text) => setChoreValue(text)}
        style={styles.login.input}
      />
      <TouchableOpacity style={styles.login.button} onPress={handlePress}>
        <Text style={styles.login.buttonText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
}
