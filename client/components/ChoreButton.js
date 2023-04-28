import { useSelector } from "react-redux";
import { Alert } from "react-native";
import { postAction } from "./APIService";

export default function ChoreButton({ title, value = 0 }) {

  const token = useSelector((state) => state.token);
  const group = useSelector((state) => state.group);

  async function handlePress() {

    const action = {
      time: new Date().toString(),
      user: token,
      group: group._id,
      chore: title,
      value: value,
    };

    try {
      const data = await postAction(action, token);
      if (data.message.includes("Action succesfully saved"))
        Alert.alert("Chore succesfully added!");

    } catch (err) {
      Alert.alert("Error", err.message);
    }

    // Add new action to MongoDB
    // try {
    //   const resp = await fetch("http://192.168.0.25:3001/action", {
    //     method: "POST",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(action),
    //   });

    //   const data = await resp.json();
    //   if (data.message.includes("Action succesfully saved"))
    //     Alert.alert("Chore succesfully added!");
    // } catch (err) {
    //   Alert.alert("Error", err.message);
    // }
  }

  return (
    <TouchableOpacity style={styles.choreButton2} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      <Image
        source={{
          uri: "https://images.assetsdelivery.com/compings_v2/bldekok/bldekok2108/bldekok210800013.jpg",
        }}
        style={{ width: 20, height: 20, marginLeft: 10 }}
      />
      <Text style={{ fontFamily: "PressStart2P_400Regular" }}>{value}</Text>
    </TouchableOpacity>
  );
}