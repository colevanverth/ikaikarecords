const sgMail = require('@sendgrid/mail')
require('dotenv').config()
const fetch = require('node-fetch');      // Needed as add on for Railway compatability. 
const express = require('express');
const body_parser = require('body-parser');     // For parsing JSON.
const app = express();
const port = process.env.PORT || 3001;

// Set API key for SendGrid.
sgMail.setApiKey(process.env.SENDGRIDKEY);

// Body Parser configuration. 
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

// CORS fix to be able to test locally with NextJS from Stack Overflow. 
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

/*
* Integration with SendGrid that alerts CJ when someone fills out the contact form. 
*/
app.post('/email', (req, res) => {
   // Set up payload. 
   const contactInfo = req.body
   console.log(contactInfo)
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

   // SendGrid API call (EcmaScript8 compatible).
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

/*
* Integration with Mailchimp that signs the user up. 
*/
app.post('/mailchimp', (req, res) => { 
   // Set up payload. 
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

   // Fetch call to Mailchimp.
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

// Start Express app. 
app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Server listening at http://localhost:${port}`);
});

