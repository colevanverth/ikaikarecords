import React, { useEffect, useState } from 'react';
import '@/styles/globals.css'

import Landing from '../components/Landing'
import Footer from '../components/Footer'; 
import Newsletter from '../components/Newsletter';
import Navigation from '../components/Navigation'; 
import NavigationMobile from '../components/NavigationMobile'; 

const twitter = 'ikaikarecords';
export async function getStaticProps() {
   const url = (process.env.NODE_ENV == 'production' ? 'https://strapi-cms-production-b766.up.railway.app/api/social' : 'http://127.0.0.1:1337/api/social')
   const res = await fetch(url, {method: "GET"})
   const socialData = await res.json()
   const socials = socialData.data.attributes
   console.log(socials)
   return {
      props: {
         socials
      },
   }
}

export default function App({ Component, pageProps, socials }) {

   const [mobile, setMobile] = useState(false); 
   const [width, setWidth] = useState(); 

   useEffect(() => {
      if (mobile) { document.body.style.overflow = "hidden";}
      else { document.body.style.overflow = "";}
      function handleResize() {
         setWidth(window.innerWidth); 
         if (window.innerWidth > 1350) { setMobile(false); } 
   }
      window.addEventListener('resize', handleResize)
   })

   return (
      <>
      {socials?.twitter}
         <Navigation setMobile={setMobile}/>
         {mobile ? <NavigationMobile mobile={mobile} setMobile={setMobile}/> : null}
         <Component {...pageProps} />
         <Newsletter /> 
         <Footer />
      </>
   )
}
