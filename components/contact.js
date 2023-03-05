import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

import { TouchableOpacity } from "react-native";
const Contacts = ({ navigation, route }) => {
  // const registerData = route.params;
  // console.log(registerData);
  return (
    <View style={style.container}>
      <Text>HEllO,</Text>
      <View>
        <Text
          style={{
            backgroundColor: "grey",
          }}
        >
          Sleeping is essential for maintaining good physical and mental health.
          It provides numerous benefits, including helping the body repair and
          regenerate, improving memory consolidation, reducing stress and
          inflammation, boosting the immune system, and promoting emotional
          stability. During sleep, the body produces growth hormones that repair
          damaged tissues and stimulate growth. It also consolidates memories
          and strengthens neural connections in the brain, which enhances
          learning and cognitive function. Adequate sleep also reduces stress
          hormones, such as cortisol, which can contribute to inflammation and
          chronic diseases. It also strengthens the immune system, helping the
          body fight off infections and illnesses.
        </Text>
        <View>
          <View>
            <Image
              source={require("../assets/images/sleeping.jpg")}
              style={{
                backgroundColor: "red",
                height: "120px",
                width: "120px",
              }}
              //image nhi aa raha hai lana hai
            />
          </View>
        </View>
      </View>
      <Button title="USERS" onPress={() => navigation.navigate("Users")} />
      {/* use go back */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "coloumn",
  },
});
export default Contacts;
