import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
} from "react-native";
// import DateTimePicker from "@react-native-community/datetimepicker";
import DatePicker from "./datepicker";
import axios from "axios";
const moment = require("moment");
// const date = new Date(selectedDate.date);
// const dateString = date.toLocaleDateString();
// console.log(dateString);

const saveTimeButtonPress = async (selectedDate) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/api/user/register/sleepingHours",
      selectedDate
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  // console.log(time);
  // alert("time saved");
};
const SleepingHours = ({ route }) => {
  const { _id } = route.params;
  console.log(_id);

  const [date, setDate] = useState(new Date());

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  // const [time, setTime] = useState(date.getTime());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [selectedDate, setSelectedDate] = useState(date);

  // console.log(dateString);
  // const timeString = date.toLocaleTimeString(selectedDate);
  // console.log(timeString);

  const handleStartChange = (date) => {
    setStartDate(date);
    setShowStartPicker(false);
  };

  const handleEndChange = (date) => {
    setEndDate(date);
    setShowEndPicker(false);
  };

  const time = startDate;
  const time2 = endDate;
  console.log(time2);
  // console.log(time);
  const startdateString = time.toLocaleTimeString();
  console.log(startdateString);
  const enddateString = time2.toLocaleTimeString();
  console.log(enddateString);

  const hours1 = startdateString.split(":");
  // const min = hours1[1];
  // const meridian = startdateString.split(" ");
  // console.log(hours);
  // console.log(meridian);
  // let totalMinutes1 = (parseInt(hours1) % 12) * 60;
  // totalMinutes1 += parseInt(min);
  // if (meridian === "pm") {
  //   totalMinutes1 += 12 * 60;
  // }
  // console.log(totalMinutes1);

  const hours2 = enddateString.split(":");
  const min2 = hours1[1];
  const meridian2 = enddateString.split(" ");
  // console.log(hours);
  // console.log(meridian);
  let totalMinutes2 = (parseInt(hours2) % 12) * 60;
  totalMinutes2 += parseInt(min2);
  if (meridian2 === "pm") {
    totalMinutes2 += 12 * 60;
  }
  console.log(totalMinutes2);

  let start_time_str = startdateString;
  let end_time_str = enddateString;

  // Convert the start time and end time strings into Date objects
  // let start_time = new Date("2000-01-01 " + startdateString);
  // let end_time = new Date("2000-01-01 " + enddateString);

  let start_time = moment(start_time_str, "h:mm a");
  let end_time = moment(end_time_str, "h:mm a");

  if (end_time.isBefore(start_time)) {
    end_time.add(1, "day");
  }
  let time_diff_minutes = end_time.diff(start_time, "minutes");
  let time_diff_hours = Math.floor(time_diff_minutes / 60);
  let remaining_minutes = time_diff_minutes % 60;
  // Print the time difference in hours and minutes
  console.log(
    "The time difference between " +
      start_time_str +
      " and " +
      end_time_str +
      " is " +
      time_diff_hours +
      " hours and " +
      remaining_minutes +
      " minutes."
  );

  // if else

  const onChange = (event, selectedDate) => {
    console.log(selectedDate);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios" ? true : false);
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours:" + tempDate.getHours() + "| Minutes:" + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);

    // console.log(fDate + "(" + fTime + ")");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sleeping Hours</Text>

      <View style={styles.container}>
        {/* <TouchableOpacity style={styles.button} onPress={showDatepicker}>
          <Text style={styles.buttonText}>
            Select Date
            <DatePicker
              selected={date}
              onChange={(date) => onChange(null, date)}
              dateFormat="dd/MM/yyyy "
            />
          </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <Text onPress={() => saveTimeButtonPress(date)}>Save Date</Text>
        </TouchableOpacity> */}
        <View style={{ backgroundColor: "green" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowStartPicker(true)}
          >
            <Text style={styles.buttonText}>Select Start Time</Text>
          </TouchableOpacity>
          {showStartPicker && (
            <DatePicker
              selected={startDate}
              onChange={(date) => handleStartChange(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          )}
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => saveTimeButtonPress(date)}
          >
            <Text>save Time</Text>
          </TouchableOpacity> */}
          <Text>TO</Text>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowEndPicker(true)}
            >
              <Text style={styles.buttonText}>Select End Time</Text>
            </TouchableOpacity>
            {showStartPicker && (
              <DatePicker
                selected={endDate}
                onChange={(date) => handleEndChange(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              saveTimeButtonPress({
                startTime: startDate,
                endTime: endDate,
                user: _id,
                sleepingHours: time_diff_hours,
              })
            }
          >
            <Text
              style={styles.buttonText}
              // onPress={() => navigation.navigate("Users")}
            >
              Save Times
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SleepingHours;

// {
//   /* <DatePicker
// testID="dateTimePicker"
// value={date}
// mode={mode}
// is24Hour={true}
// display="default"
// onChange={onChange}
// /> */
// }
