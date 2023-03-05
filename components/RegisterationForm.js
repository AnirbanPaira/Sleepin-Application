import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { TouchableOpacity } from "react-native";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const RegisterationForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [Age, setAge] = useState("");
  // const [phone, setphone] = useState("");
  const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  const Register = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/user/register",
        {
          name,
          email,
          Age,
          password,
          phoneNo,
          date,
        }
      );

      console.log(data);
      navigation.navigate("Dashbord", { data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registeration Form</Text>

      <View style={styles.innerContainer}>
        <Text style={{ fontSize: "17px", fontWeight: "500" }}>
          Enter Your Name
        </Text>
        <TextInput
          keyboardType="default"
          placeholder="---name---"
          style={styles.innertext}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: "17px", fontWeight: "500" }}>
          Enter Your Email Address
        </Text>
        <TextInput
          autoComplete="off"
          keyboardType="email-address"
          placeholder="---Email Address---"
          style={styles.innertext}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: "17px", fontWeight: "500" }}>
          Enter Your Phone Number
        </Text>
        <TextInput
          keyboardType="numeric"
          placeholder="---Phone Number---"
          style={styles.innertext}
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: "17px", fontWeight: "500" }}>
          Enter Your Age{" "}
        </Text>
        <TextInput
          keyboardType="number-pad"
          autoComplete="off"
          placeholder="---Age---"
          style={styles.innertext}
          onChangeText={(text) => setAge(text)}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: "17px", fontWeight: "500" }}>
          Enter Your password
        </Text>
        <TextInput
          keyboardType="visible-password"
          secureTextEntry={true}
          autoComplete="off"
          placeholder="---password---"
          style={styles.innertext}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text style={{ fontSize: "17px", fontWeight: "500" }}>
          Enter Your Date Of Birth
        </Text>
        <DatePicker
          selected={date}
          onChangeText={(text) => setDate(text)}
          onChange={(date) => onChange(null, date)}
          dateFormat="dd/MM/yyyy "
        />
        {/* 
        <TextInput
          keyboardType="numeric"
          autoComplete="off"
          placeholder="------"
          style={styles.innertext}
          onChangeText={(text) => setPhone(text)}
        /> */}
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: "#246EE9",
        }}
      >
        <Text
          style={{ color: "#fff", fontWeight: "bold" }}
          onPress={() => Register()}
        >
          REGISTER
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#1a1b1c",
  },
  container: {
    // flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexGrow: 1,
    alignSelf: "center",
  },
  innerContainer: {
    backgroundColor: "#246EE9",
    padding: 10,
    borderRadius: 10,
    width: 260,
    textAlign: "center",
  },
  innertext: {
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
  },
});

export default RegisterationForm;
