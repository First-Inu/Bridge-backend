module.exports = {
  server: {
    "development": {
      port: 8001
    },
    "test": {
      port: 8001
    },
    "production": {
      port: 8001
    }
  },
  security: {
    salt: "blue2020"
  },
  aws: {
    bucket: '',
    accessKeyId: '',
    secretAccessKey: '',
    region: ''
  },
  uploadFileMaxSize: 20000000,
  email: {
    // from: 'hiroshi.okano@mixreward.com',
    // server: 'smtp.gmail.com',
    // port: 587,
    // secure: false,
    // user: 'qubuapp@gmail.com',
    // pass: 'pyum exxf ejkx xqlp',
    from: 'hiroshi.okano@mixreward.com',
    server: 'smtp.mail.us-east-1.awsapps.com',
    port: 465,
    secure: true,
    user: 'Hiroshi.okano',
    pass: 'mYdDg!6.9vmxLTT',
    accessKeyId: "AKIAI4E6ESUTH625G42A",
    secretAccessKey: "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",
    region: "us-east-1"
  },
  googleMap: '',
  plaid: {
    clientId: '',
    secret: '',
    publicKey: '',
    product: ['auth'],
    countryCodes: 'US,CA,GB,FR,ES,IE',
    env: 'sandbox'
  },
  stripe: {
    publishableKey: '',
    secretKey: ''
  },
  google: {
    client_id: '970912783203-nsf0vr35f4qnh95gkcb5p0d35s6g9e2e.apps.googleusercontent.com',
  }
};
