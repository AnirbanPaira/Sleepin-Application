const date = require("../models/Date-model");
class DateService {
  create(request, response) {
    const createDate = date(request.body);
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
    date
      .find()
      .then((req) => {
        response.send(req);
      })
      .catch((err) => {
        response.send(err);
      });
  }
}

module.exports = DateService;
