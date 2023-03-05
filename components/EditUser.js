import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Edit = ({ route }) => {
  const [user, setUser] = useState({});
  // const { user } = route.params;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [Age, setAge] = useState("");
  // const [date, setDate] = useState(new Date());
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(currentDate);
  };
  // console.log(route.params);

  const onPressSave = async () => {
    try {
      if (user) {
        const UpdatedUser = {
          name,
          email,
          phoneNo,
          Age,
          password,
          date,
        };
        axios
          .patch(
            `http://localhost:8000/api/user/register/${user._id}`,
            UpdatedUser
          )
          .then((Response) => {
            console.log("User Updated Successfully");
          })
          .catch((err) => {
            console.log("Error Updating User", err);
          });
      } else {
        const response = await axios.post(
          "http://localhost:8000/api/user/register",
          {
            name,
            email,
            phoneNo,
            Age,
            password,
            date,
          }
        );
        console.log(response.data); // success message from the server
        alert("Data Saved");
      }
    } catch (error) {
      console.log(error); // error message from the server
      alert("Error saving data");
    }
  };

  useEffect(() => {
    if (route.params && route.params.user) {
      let user1 = JSON.parse(route.params.user);
      setUser(user1);
      // setId(route.params.id);
      setName(user1.name);
      setEmail(user1.email);
      // setPassword(password);
      setPhone(user1.phoneNo);
      setDate(new Date(user1.date));
      setAge(user1.Age);
      // console.log(password);
    }
  }, [route]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registeration Form</Text>

      <View style={styles.innerContainer}>
        <Text style={{ fontSize: "17px", fontWeight: "500" }}>
          Enter Your Name
        </Text>
        <TextInput
          keyboardType="default"
          placeholder="---Name---"
          style={styles.innertext}
          onChangeText={(text) => setName(text)}
          value={name}
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
          defaultValue={user.email}
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
          defaultValue={user.phoneNo}
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
          defaultValue={user.Age}
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
          autoComplete="off"
          placeholder="---password---"
          defaultValue={user.password}
          style={styles.innertext}
          secureTextEntry="true"
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
          onPress={() => onPressSave()}
        >
          Save
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

export default Edit;
