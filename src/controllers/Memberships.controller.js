import models from "../../models";
import api from "../tools/common";

function list(req, res) {
  models.Membership.findAll({
  }).then(data => {
    api.ok(res, data);
  })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

module.exports = {
  list,
};
