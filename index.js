const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
sendgrid.send(
  {
    from: 'vuthilyna304@mail.com',
    to: 'vuthilyna21@gmail.com',
    attachments: [],
    subject: 'testing sendgrid',
    html: '<html><head></head><body><p>Afternoon</p></body></html > ',
  },
  function(error) {
    if (error) {
      console.error("ERROR "+error.message);
    }
  }
);
