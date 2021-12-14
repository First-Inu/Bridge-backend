import models from "../../models";
import api from "../tools/common";

async function list(req, res) {
  models.User.findAll({
    attributes: {
      exclude: ["password"]
    }
  }).then(data => {
    api.ok(res, data);
  });
}

module.exports = {
  list,
};
