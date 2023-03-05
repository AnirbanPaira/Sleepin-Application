import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";

const placeholdeImage = require("../assets/images/sleep.jpg");

const Display = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={placeholdeImage} style={styles.image}></Image>
      </View>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 18,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    // paddingTop: 12,
    height: "100%",
    // backgroundColor: "red",
    position: "relative",
    width: "100%",
    objectFit: "cover",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: 18,
    objectFit: "cover",
    // resizeMode: "cover",
  },
});

export default Display;
