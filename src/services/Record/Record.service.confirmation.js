import fetch from 'node-fetch'
import fs from 'fs'
import EmedicalCardConfirmationTemplate from '../../assets/emails/emedical_card/templates/confirmation.template'

async function emedicalCardConfirmation(record) {

  try {
    const emedicalCardImageContents = fs.readFileSync('./public/assets/images/emedical_card/' + record.card_image_name, { encoding: 'base64' });

    return await fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'post',
      headers: {
        'api-key': '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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "sender": {
          "name": "Blue",
          "email": "no-reply-wemedi@blue.com.hk"
        },
        "to": [
          {
            "email": record.User.email,
            "name": record.User.last_name + " " + record.User.first_name,
          }
        ],
        "bcc": [
          {
            "email": "kelvin.chu@mixreward.com",
            "name": "Kelvin Chu",
          },
          {
            "email": "enquiry@blue.com.hk",
            "name": "Blue Enquiry",
          },
        ],
        "subject": record.Membership.email_subject,
        "htmlContent": EmedicalCardConfirmationTemplate.template(record.User.last_name + " " + record.User.first_name, record.policy_number, record.Membership.name),
        "attachment": [
          {
            "content": emedicalCardImageContents,
            "name": "E-MedicalCard.png"
          },
        ].concat(JSON.parse(record.Membership.attachments))
      }),
    })
      .then(res => res.json())
  } catch (error) {
    return error;
  }
}

module.exports = {
  emedicalCardConfirmation,
};
