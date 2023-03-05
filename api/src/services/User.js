const { response, request } = require("express");
const user = require("../models/User-models");
class UserService {
  create(request, response) {
    const createuser = user(request.body);

    createuser.save((err, res) => {
      if (err) {
        response.send(err);
        console.log(err);
      }
      if (res) {
        console.log(res);
        response.json(res);
      }
    });
  }

  fetch(request, response) {
    user
      .find()
      .then((resp) => {
        response.send(resp);
      })
      .catch((err) => {
        response.send(err);
      });
  }

  update(request, response) {
    user
      .findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then((resp) => response.send(resp))
      .catch((err) => response.send(err));
  }

  delete(request, response) {
    user
      .findByIdAndDelete(request.params.id)
      .then((resp) => response.send(resp))
      .catch((error) => response.send(error));
  }
}
module.exports = UserService;
