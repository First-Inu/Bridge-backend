import models from "../../models";
import api from "../tools/common";
import nodeHtmlToImage from 'node-html-to-image';
import RecordService from "../services/Record";
import fs from "fs";
import EmedicalCardTemplate from '../assets/emails/emedical_card/templates/card.template'

async function add_records(req, res) {
  const records = req.body;
  for (let i = 0; i < records.length; i++) {
    try {
      const record = records[i];
      let user, membership, card_image_name = ('' + new Date().valueOf() + Math.random().toString(36).substring(7) + '.png');
      const extUser = await models.User.findOne({
        where: { email: record.email.toLowerCase() }
      });
      if (!extUser) {
        user = await models.User.build({
          first_name: record.first_name,
          last_name: record.last_name,
          email: record.email.toLowerCase(),
          yob: record.yob * 1,
          gender: record.gender
        })
          .save()
          .catch(e => {
            api.error(res, e.message, 500);
          });
      } else user = extUser;
      membership = await models.Membership.findOne({
        where: { name: record.plan }
      })

      const extEmedicalCard = await models.EmedicalCard.findOne({
        where: {
          user_id: user.id,
          membership_id: membership.id,
          start_date: new Date(record.start_date),
          end_date: new Date(record.end_date),
        }
      })
      if (extEmedicalCard) continue;

      const emedicalCardBackImageContents = fs.readFileSync('./src/assets/emails/emedical_card/card_back_images/' + membership.card_back_image, { encoding: 'base64' });

      nodeHtmlToImage({
        output: './public/assets/images/emedical_card/' + card_image_name,
        html: EmedicalCardTemplate.template(record.plan, record.last_name + ' ' + record.first_name, record.policy_number, record.end_date, emedicalCardBackImageContents),
        type: "png",
        transparent: true,
      })
      await models.EmedicalCard.build({
        user_id: user.id,
        membership_id: membership.id,
        policy_number: record.policy_number,
        start_date: record.start_date,
        end_date: record.end_date,
        card_image_name, card_image_name,
        email_sent: false,
      })
        .save()
    } catch (error) {
      continue;
    }
  }
  list(req, res);
}

function list(req, res) {
  models.EmedicalCard.findAll({
    include: [
      models.User,
      models.Membership,
    ]
  }).then(data => {
    api.ok(res, data);
  })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

async function sendConfirmationEmail(req, res) {
  const records = req.body;
  for (let i = 0; i < records.length; i++) {
    try {
      const record = records[i];
      const extEmedicalCard = await models.EmedicalCard.findOne({
        where: {
          user_id: record.user_id,
          membership_id: record.membership_id,
          start_date: new Date(record.start_date),
          end_date: new Date(record.end_date),
        }
      })

      if (!extEmedicalCard) continue;

      const res = await RecordService.emedicalCardConfirmation(record);
      if ('messageId' in res) {
        await models.EmedicalCard.update(
          { email_sent: true },
          {
            where: {
              user_id: record.user_id,
              membership_id: record.membership_id,
              start_date: new Date(record.start_date),
              end_date: new Date(record.end_date),
            }
          }
        )
      }
    } catch (error) {
      continue;
    }
  }
  list(req, res);
}

async function delete_records(req, res) {
  const records = req.body;
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    try {
      fs.unlink('./public/assets/images/emedical_card/' + record.card_image_name, (err) => {
        console.log(err);
      });
      await models.EmedicalCard.destroy({
        where: {
          user_id: record.user_id,
          membership_id: record.membership_id,
          start_date: new Date(record.start_date),
          end_date: new Date(record.end_date),
        }
      })
    } catch (error) {
      console.log(error);
      continue;
    }
  }
  list(req, res);
}

module.exports = {
  add_records,
  list,
  sendConfirmationEmail,
  delete_records,
};
