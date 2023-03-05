//start date start time rahega

const sleepdate = require("../models/sleepingHours-model");

const user = require("../models/User-models");

class SleepingHoursService {
  create(request, response) {
    // const {} = request.body

    const createDate = sleepdate(request.body);
    user
      .findById(request.body.user)
      .then((res) => {
        let myHealthStatus = "none";
        if (res.Age >= 1 && res.Age <= 2) {
          if (
            request.body.sleepingHours >= 11 &&
            request.body.sleepingHours <= 14
          ) {
            myHealthStatus = "green";
          } else if (request.body.sleepingHours >= 15) {
            myHealthStatus = "yellow";
          } else {
            myHealthStatus = "red";
          }
        } else if (res.Age >= 3 && res.Age <= 5) {
          if (
            request.body.sleepingHours >= 10 &&
            request.body.sleepingHours <= 13
          ) {
            myHealthStatus = "green";
          } else if (request.body.sleepingHours >= 14) {
            myHealthStatus = "yellow";
          } else {
            myHealthStatus = "red";
          }
        } else if (res.Age >= 6 && res.Age <= 12) {
          if (
            request.body.sleepingHours >= 9 &&
            request.body.sleepingHours <= 11
          ) {
            myHealthStatus = "green";
          } else if (request.body.sleepingHours >= 12) {
            myHealthStatus = "yellow";
          } else {
            myHealthStatus = "red";
          }
        } else if (res.Age >= 13 && res.Age <= 18) {
          if (
            request.body.sleepingHours >= 8 &&
            request.body.sleepingHours <= 10
          ) {
            myHealthStatus = "green";
          } else if (request.body.sleepingHours >= 11) {
            myHealthStatus = "yellow";
          } else {
            myHealthStatus = "red";
          }
        } else if (res.Age >= 18 && res.Age <= 25) {
          if (
            request.body.sleepingHours >= 7 &&
            request.body.sleepingHours <= 9
          ) {
            myHealthStatus = "green";
          } else if (request.body.sleepingHours >= 10) {
            myHealthStatus = "yellow";
          } else {
            myHealthStatus = "red";
          }
        } else if (res.Age >= 26 && res.Age <= 64) {
          if (
            request.body.sleepingHours >= 7 &&
            request.body.sleepingHours <= 9
          ) {
            myHealthStatus = "green";
          } else if (request.body.sleepingHours >= 10) {
            myHealthStatus = "yellow";
          } else {
            myHealthStatus = "red";
          }
        } else if (res.Age >= 65) {
          if (
            request.body.sleepingHours >= 7 &&
            request.body.sleepingHours <= 8
          ) {
            myHealthStatus = "green";
          } else if (request.body.sleepingHours >= 9) {
            myHealthStatus = "yellow";
          } else {
            myHealthStatus = "red";
          }
        }

        user
          .findByIdAndUpdate(
            request.body.user,
            {
              healthStatus: myHealthStatus,
            },
            { new: true }
          )
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    createDate
      .save()
      .then((createdDate) => {
        response.json(createdDate);
      })
      .catch((err) => {
        response.send(err);
      });
  }
  fetch(request, response) {
    sleepdate
      .find()
      .then((req) => {
        response.send(req);
      })
      .catch((err) => {
        response.send(err);
      });
  }
}

module.exports = SleepingHoursService;
