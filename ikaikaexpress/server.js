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
      subject: `New service request (${contactInfo.service.toLowerCase()}).`,
      text: `
         Name: ${contactInfo.name}
         Email: ${contactInfo.email}
         Phone: ${contactInfo.phone ? contactInfo.phone : "None Provided"}
         Message: ${contactInfo.message}`,
      html: `
            
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet">
   </head>

  <body style="margin: 0; padding: 0; box-sizing: border-box; display: flex; align-items: center; justify-content: center; ">
   <div class="container" style="font-family: 'Space Grotesk', sans-serif; line-height: 1.5; width: 700px; height: 100%; padding: 36px;  margin: 0; padding: 0; box-sizing: border-box;">
      <img align="right" src="https://res.cloudinary.com/daazndobg/image/upload/v1691292031/Ikaika-Horizontal-Logo-RGB-Inverse-Medium_z7k0om.png" alt="Ikaika Records logo." width="175" style="margin-left: auto; margin-right: 0;">
      <p style="font-size: 13.5px; color: #595E68; margin: 0; padding: 60px 0 0 0; box-sizing: border-box;">SOUND MIXING AND MASTERING</p>
      <h1 style="font-weight: 600; font-size: 23.99px; color: #161A1E; margin: 0; padding: 0; box-sizing: border-box;">NEW MESSAGE</h1>
      <div class="blue_underline" style="width: 100%; height: 2px; background: #1C6590; margin-bottom: 18px;"></div>
      <div class="outer_container" style="background: #F9F9F9; padding: 18px; margin: 5px 0 18px 0; box-sizing: border-box;">
         <a style="font-weight: 600; font-size: 13.5px; color: #161A1E; margin: 0; padding: 0; box-sizing: border-box;">NAME</a>
         <div class="inner_container" style="background: white; padding: 9px; margin: 5px 0 18px 0; box-sizing: border-box;">
            <p style="font-size: 18px; color: #595E68; margin: 0; padding: 0; box-sizing: border-box;">${contactInfo.name}</p>
         </div>
         <a style="font-weight: 600; font-size: 13.5px; color: #161A1E; margin: 0; padding: 0; box-sizing: border-box;">EMAIL</a>
         <div class="inner_container" style="background: white; padding: 9px; margin: 5px 0 18px 0;  box-sizing: border-box;">
            <p style="font-size: 18px; color: #595E68; margin: 0; padding: 0; box-sizing: border-box;">${contactInfo.email}</p>
         </div>
         <a style="font-weight: 600; font-size: 13.5px; color: #161A1E; margin: 0; padding: 0; box-sizing: border-box;">PHONE NUMBER</a>
         <div class="inner_container" style="background: white; padding: 9px; margin: 5px 0 18px 0;  box-sizing: border-box;">
            <p style="font-size: 18px; color: #595E68; margin: 0; padding: 0; box-sizing: border-box;">${contactInfo.phone ? contactInfo.phone : "No phone number provided"}</p>
         </div>
         <a style="font-weight: 600; font-size: 13.5px; color: #161A1E; margin: 0; padding: 0; box-sizing: border-box;">MESSAGE</a>
         <div class="inner_container" style="background: white; padding: 9px; margin: 5px 0 18px 0;  box-sizing: border-box;">
            <p style="font-size: 18px; color: #595E68; margin: 0; padding: 0; box-sizing: border-box;">${contactInfo.message}</p>
         </div>
      </div>
   </div>
</body>
     
     
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

