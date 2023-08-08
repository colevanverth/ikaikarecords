This is a [Next.js](https://nextjs.org/) app that comprises the front-end of the Ikaika Records website and implements an API that interfaces with SendGrid and MailChimp.

## Setup Instructions
1. Install dependencies: 
    * [NodeJS](https://nodejs.org/en)
    * [SASS](https://sass-lang.com/)
2. Run `npm i`.
3. Run `npm run dev`.
4. Run `sass --watch styles/master.scss styles/globals.css`. 

Note that NextJS automatically sets the `NODE_ENV` environment variable in development. When the app detects it is in a development mode, the Strapi CMS must be hosted on the local machine at port `1337`.

*Copyright © Ikaika Records 2023. All Rights Reserved.*
