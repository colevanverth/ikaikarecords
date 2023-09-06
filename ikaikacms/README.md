This contains the [Strapi](https://strapi.io/) CMS to manage Ikaika Records "services" and "out now music".

## Setup Instructions

1. Install dependencies:
   - [NodeJS](https://nodejs.org/en)
2. Run `npm i`.
3. Run `npm run strapi develop`.

## Notes

- There is no development database set up, so the production database is queried even in development (laziness). 
- Strapi is configured to [automatically integrate asset uploads with Cloudinary](https://strapi.io/blog/add-cloudinary-support-to-your-strapi-application).
- [This article](https://dev.to/yinks/how-to-create-and-deploy-a-strapi-project-on-railway-3kja) is invaluable for understanding how to set up Strapi to be hosted on Railway.
  _Copyright © Ikaika Records 2023. All Rights Reserved._
