'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('memberships', [
      {
        id: 1,
        name: 'WeMedi M1',
        card_back_image: 'WeMedi M1.png',
        email_subject: 'Blue WeMedi門診保之醫療卡 | Blue WeMedi Outpatient Protector Medical Card',
        attachments: '[{"url":"https://s3.amazonaws.com/www.mixreward.com/email_attachments/Medical+Doctor+List+2020_12.pdf","name":"Medical Doctor List 2020_12.pdf"}]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'WeMedi Lite',
        card_back_image: 'WeMedi Lite.png',
        email_subject: '成功啟用Blue WeMedi Lite 門診服務',
        attachments: '[{"url":"https://s3.amazonaws.com/www.mixreward.com/email_attachments/WeMedi+Lite+DR+List-GP-112020.pdf","name":"WeMedi Lite DR List-GP-112020.pdf"},{"url":"https://s3.amazonaws.com/www.mixreward.com/email_attachments/WeMedi+Lite_Terms+and+Conditions_TC+Final.pdf","name":"WeMedi Lite_Terms and Conditions_TC Final.pdf"}]',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('memberships', null, {});
  }
};
