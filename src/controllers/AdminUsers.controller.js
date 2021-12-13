import models from "../../models";
import api from "../tools/common";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config/settings";

async function signin(req, res) {
  const reqData = req.body;
  models.AdminUser.findAll({
    where: {
      email: reqData.email
    },
  })
    .then(async users => {
      if (users.length === 0) {
        api.error(res, "User not found", 404);
      } else {
        const user = users[0];

        const passwordValid = await bcrypt.compare(
          reqData.password,
          user.password
        );

        if (!passwordValid) {
          api.error(res, "Password does not match", 401);
        } else {
          var token = jwt.sign(
            { user: user.id, email: user.email },
            config.security.salt,
            { expiresIn: 24 * 60 * 60 }
          );
          let resUser = JSON.parse(JSON.stringify(user));
          resUser.token = token;
          resUser.password = '';
          api.ok(res, resUser);
        }
      }
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

function verify_token(req,res) {
  api.ok(res, 'valid token');
}

module.exports = {
  signin,
  verify_token,
};
