This is an isolated monorepo containing the Ikaika Records LLC logo, website front-end, content managment system alongside a PostgresSQL database, and an Express app that facilitates integrations. 

## Overview
The file structure is as follows: 
   * './ikaikacms' - Strapi CMS with PostgresSQL database. 
   * './ikaikaexpress' - Express app for connecting to integrations (see below).
   * './ikaikawebsite' - NextJS app utilizing React comprising the front-end of the website. 
   * './ikaikalogo' - Contains all the logo variations of the Ikaika Records LLC logo, including Illustrator files and font. 

## Integrations
The front-end connects to two integrations through the Express app: 
   * SendGrid: Sends an email to CJ Ikaika when someone has submitted a contact form on the website front-end.
   * MailChimp: Receives the email of a front-end website when they sign up for the newsletter; MailChimp is then used to facitate the newsletter. 

Ikaika Records LLC 2023. All Rights Reserved. 
