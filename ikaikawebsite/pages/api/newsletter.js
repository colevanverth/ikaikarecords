export default function handler(req, res) {
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
      res.status(200).json(response.status)
   }) 
}
