const sgMail = require('@sendgrid/mail')
require('dotenv').config()
const fetch = require('node-fetch');
const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

sgMail.setApiKey(process.env.SENDGRIDKEY);

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
   );
   if (req.method == "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
}
   next();
});

app.post('/email', (req, res) => {
   const contactInfo = req.body
   console.log(contactInfo)

   text = `
          Name: ${contactInfo.name}
          Email: ${contactInfo.email}
          Phone: ${contactInfo.phone ? contactInfo.phone : "None Provided"}
          Message: ${contactInfo.message}
   `
   const msg = {
  to: 'colevanverth@gmail.com',
  from: 'ikaikarecordstemp@gmail.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'text',
  html: `
      <b>Name:</b> ${contactInfo.name}
      <b>Email:</b> ${contactInfo.email}
      <b>Phone:</b> ${contactInfo.phone ? contactInfo.phone : "None Provided"}
      <b>Message:</b> ${contactInfo.message}
  `,
};
//ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();

});

// Mailchimp route.
app.post('/mailchimp', (req, res) => { 
   
   // Setting up payload. 
   const email = req.body.email; 
   console.log(email)
   const data = {
       members: [
           {
               email_address: email,
               status: 'subscribed',
           }
       ]
   };
   const postData = JSON.stringify(data);

   // Fetch call to Mailchimp API.
   fetch('https://us14.api.mailchimp.com/3.0/lists/26861e53a9', {
      method: 'POST',
      headers: {
      Authorization: 'auth ' + process.env.MAILCHIMPKEY
   },
      body: postData
   })
   .then(response => { 
      res.status(200).send('Successfully sent email.')
   }) 
});

app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Server listening at http://localhost:${port}`);
});

