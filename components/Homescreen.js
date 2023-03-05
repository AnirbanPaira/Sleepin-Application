import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import Display from "./Display";
import { TextInput } from "react-native";
import Checkbox from "expo-checkbox";

const Application = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const Submit = () => {
    if (userName === "Anirban" && Password === "Anirban") {
      alert(`Hello ${userName}`);
      navigation.navigate("Dashbord");
    } else {
      alert("Username or password not matched");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Form</Text>
      <View style={styles.form}>
        <Display />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Your Name</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            value={userName}
            onChangeText={(actualData) => setUserName(actualData)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Your Password</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={Password}
            onChangeText={(actualPassword) => setPassword(actualPassword)}
          />
        </View>
        <View style={styles.textBeforeCheck}>
          <Text>
            Sleeping is essential for maintaining good physical and mental
            health. It provides numerous benefits, including helping the body
            repair and regenerate, improving memory consolidation, reducing
            stress and inflammation, boosting the immune system, and promoting
            emotional stability. During sleep, the body produces growth hormones
            that repair damaged tissues and stimulate growth. It also
            consolidates memories and strengthens neural connections in the
            brain, which enhances learning and cognitive function. Adequate
            sleep also reduces stress hormones, such as cortisol, which can
            contribute to inflammation and chronic diseases. It also strengthens
            the immune system, helping the body fight off infections and
            illnesses.
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color="#FF5A5F"
          />
          <Text style={styles.checkboxLabel}>
            I agree to the terms & conditions
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: agree ? "#FF5A5F" : "#D8D8D8" },
            ]}
            disabled={!agree}
            onPress={() => Submit()}
          >
            <Text style={styles.buttonLabel}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#D8D8D8" }]}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.buttonLabel}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4A4A4A",
    textTransform: "uppercase",
    marginBottom: 40,
  },
  form: {
    backgroundColor: "#d3dded",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    width: "50%",
  },
  inputContainer: {
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4A4A4A",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#f04f77",
    borderColor: "black",
    fontWeight: "bold",
    width: 200,
    height: 40,
    color: "white",
    padding: 12,
    borderRadius: 10,
  },
  button: {
    fontStyle: "normal",
    fontWeight: "600",
    backgroundColor: "red",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: 200,
    backgroundColor: "red",
  },
  textBeforeCheck: {
    backgroundColor: "#fff",
    width: "40%",
    height: 120,
    margin: 4,
    padding: 4,
    overflow: "scroll",
    textAlign: "justify",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 0.5,
    color: "#6d56ba",
  },
});

export default Application;
