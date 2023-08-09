import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button';
import Header from '../components/Header'
import Landing from '../components/Landing';
import { appear } from '../components/Appear'; 
import Image from "next/image"
import Head from 'next/head'

const meta_description = 'Offering in-person and remote music services including studio recording and sound mixing. A service that you need not listed? Contact us for a quote.';
const meta_title = 'Services - Ikaika Records'

export async function getStaticProps() {
   const url = (process.env.NODE_ENV == 'production' ? process.env.NEXT_PUBLIC_STRAPI_URL + '/api/services' : 'http://127.0.0.1:1337/api/services')
   const res = await fetch(url, {method: "GET"})
   const services = await res.json()
  
   return {
      props: {
         services,
      },
   }
}

const Services = ({services}) => { 
   const [href, setHref] = useState("");
   useEffect( ()=> {
      setHref(window.location.href);
   })

   return ( 
      <>  
         <Head>
            <title>{meta_title}</title> 
            <meta
               name='description'
               content={meta_description}
            />
            <meta
               property='og:site_name'
               content='Ikaika Records'
            />
            <meta
               property='og:title'
               content={meta_title}
            />
            <meta
               property='og:description'
               content={meta_description}
            />
            <meta 
               property='og:image' 
               content='https://res.cloudinary.com/daazndobg/image/upload/v1691462361/Ikaika-Brand-Mark-RGB-ColorMedium_dx8psw.png'
            />
            <meta
               property='og:url'
               content={href}
            />
         </Head> 

         <div className="services__content__image"/> 
         <div className="services__content__transition"/>
         <Header headerName='Services' />

         <div className="content__container radial__container">
               <main className='services'> 

                   {services.data?.map((item, index) => { 
                     return ( 
                        <>
                           <motion.div key={item.id} className='service__container' variants={appear} initial='hidden' whileInView='visible' viewport={{once: true}}>
                              <div className='service'>
                                 <img alt={item.attributes.alt} width='50%' src={item.attributes.imageLink}/>
                                 <div> 
                                 <a className='service__tag'> {item.attributes.tag.toUpperCase()} </a> 
                                 <h3> {item.attributes.name.toUpperCase()} </h3> 
                                 <p> {item.attributes.description} </p>
                                 <Button className='button__big__hollow' text={item.attributes.calendlyLink ? "BOOK NOW" : "GET STARTED"} link={"/services/" + item.attributes.siteLink} />
                                 </div>
                              </div>
                           </motion.div>  
                                               </>
                     )
                  })}
                   <div className='service__custom'>
                     <h3> CUSTOM SERVICES </h3> 
                     <p> Not seeing the service you need? We love working on custom projects. Please <a href="mailto:business@ikaikarecords.us">contact us</a> for a quote.</p>
                  </div> 
               </main> 
         </div>
      </>
   )
}

export default Services;
