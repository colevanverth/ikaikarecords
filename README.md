<img src="https://res.cloudinary.com/daazndobg/image/upload/v1691292031/Ikaika-Horizontal-Logo-RGB-Inverse-Medium_z7k0om.png" alt="MarineGEO circle logo" style=" width:200px;"/>
This is an isolated monorepository containing the Ikaika Records logo, website front-end, and content managment system.

## File Structure

The file structure is as follows:

- `./ikaikacms` - Strapi CMS.
- `./ikaikawebsite` - NextJS app utilizing React comprising the front-end of the website and an API that interfaces with two integrations (see below).
- `./ikaikalogo` - Contains all the logo variations of the Ikaika Records LLC logo, including Illustrator files and font.

## Hosting

- The front-end, content-managment system, and database are hosted through [Railway](https://railway.app/). Any push to `master` triggers a redeploy for all components of the app.

## Integrations

There are two integretations facilitated through the NextJS API:

- [SendGrid](https://sendgrid.com/)
  - **Purpose**: Sends an email to CJ when a contact form for a "service" on the front-end has been filled out.
  - **Notes**: Utilizes free SendGrid account which provides 100 free emails per day.
- [MailChimp](https://mailchimp.com/):
  - **Purpose:** MailChimp is utilized for its email newsletter feature. When a user signs up to the Ikaika Records Newsletter on the front-end, MailChimp stores this email.

_Copyright © Ikaika Records 2023. All Rights Reserved._
