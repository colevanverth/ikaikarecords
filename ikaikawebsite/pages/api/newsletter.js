export default function handler(req, res) {
  const email = req.body.email;
  console.log(email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
      },
    ],
  };

  const postData = JSON.stringify(data);

  (async() => {
    try {
      const callee = await fetch("https://us14.api.mailchimp.com/3.0/lists/26861e53a9", {
      method: "POST",
      headers: {
        Authorization: "auth " + process.env.MAILCHIMPKEY,
      },
      body: postData,
    })
      if (!callee.ok) { 
        console.log(callee.status);
        res.status(500).end(); // End is neccesary to resolve - otherwise it does nothing.
      }
      else { 
        res.status(200).json(response.status);
      }} catch (error) {
      console.log('error thrown')
       console.error(error);
        res.status(500).end();
        if (error.response) { 
          console.error(error.response.body);
        }
    }
  })();



  //  }).then((response) => {
  //   res.status(200).json(response.status);
  // });


  //   (async () => {
  //   try {
  //     await sgMail.send(msg);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500)
  //     if (error.response) {
  //       console.error(error.response.body);
  //     }
  //   }
  // })();
}
