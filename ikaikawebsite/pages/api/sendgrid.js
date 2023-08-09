const sgMail = require('@sendgrid/mail')

export default function handler(req, res) {
   sgMail.setApiKey(process.env.SENDGRIDKEY);
   // Set up payload. 
   const contactInfo = req.body
   console.log(contactInfo)
   const msg = {
      to: process.env.CJ_EMAIL,
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
      <p style="font-size: 13.5px; color: #595E68; margin: 0; padding: 120px 0 0 0; box-sizing: border-box;">${contactInfo.service.toUpperCase()} /</p>
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
     
     
      `
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
};

