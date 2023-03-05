import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import UsersData from "../api/user-api";
import { Button } from "react-native";
import { FlatList } from "react-native";
import Icons from "react-native-vector-icons/Entypo";
import MIcons from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

const UsersCard = ({ item, navigation }) => {
  const onPressDelete = async () => {
    try {
      if (item._id) {
        await axios.delete(
          `http://localhost:8000/api/user/register/${item._id}`
        );
        console.log("User Deleted Successfully");
        alert("Data Deleted");
      } else {
        console.log("Error: Item ID not found");
      }
    } catch (error) {
      console.log("Error deleting data", error);
      alert("Error deleting data");
    }
  };
  // console.log(item);
  return (
    <View style={{ flexDirection: "row", marginVertical: "5px" }}>
      <Text style={{ width: "52%", fontSize: "20px", marginLeft: "5px" }}>
        {item.name}
      </Text>
      <TouchableOpacity
        style={style.IconStyle}
        onPress={() =>
          navigation.navigate("EditUser", { user: JSON.stringify(item) })
        }
      >
        <Icons name="edit" color="white" size="18px" />
      </TouchableOpacity>
      <TouchableOpacity style={style.IconStyle} onPress={() => onPressDelete()}>
        <MIcons name="delete" color="white" size="18px" />
      </TouchableOpacity>
      <TouchableOpacity style={style.IconStyle}>
        <Icons
          name="heart"
          color={item.healthStatus == "none" ? "white" : item.healthStatus}
          size="18px"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={style.IconStyle}
        onPress={() => navigation.navigate("Sleeping Hours", { _id: item._id })}
      >
        <MIcons name="sleep" color="white" size="18px" />
      </TouchableOpacity>
    </View>
  );
};

const Users = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const userData = await axios.get(
          "http://localhost:8000/api/user/register"
        );
        setData(userData.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <View>
      {/* <Text>Users Page</Text> */}
      <FlatList
        keyExtractor={(item) => item._id}
        data={data}
        renderItem={({ item }) => (
          <UsersCard navigation={navigation} item={item} />
        )}
      />
      <View style={{ marginTop: "5px" }}>
        <Button title="back to dashbord" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default Users;

const style = StyleSheet.create({
  IconStyle: {
    width: "12%",
    backgroundColor: "#246EE9",
    marginHorizontal: "7px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
  },
});
