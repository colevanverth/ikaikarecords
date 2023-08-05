require('dotenv').config()
const express = require('express');
const body_parser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

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

app.post('/mailchimp', (req, res) => { 
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
    console.log(`Example app listening at http://localhost:${port}`);
});

