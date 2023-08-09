import Header from "../../../components/Header"
import ContactForm from "../../../components/ContactForm"
import EquipmentList from "../../../components/EquipmentList"

import Image from "next/image"
import Script from "next/script"
import {useRouter} from "next/router"
import Head from "next/head"
import {useEffect, useState} from "react"
import {motion} from "framer-motion"

/**
 * Generates service pages on build; `params` is exposed to getStaticProps()
*/
export async function getStaticPaths() {
   const url = (process.env.NODE_ENV == 'production' ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services` : 'http://127.0.0.1:1337/api/services')
   const res = await fetch(url)
   const services = await res.json()

   const paths = services.data?.map((item) => { 
      return {
         params: { id: item.attributes.siteLink }
      }
   })

  return { paths, fallback: false }
}

/**
 * Pulls service object corresponding to current slug and creates a prop for that service.
*/
export async function getStaticProps({ params }) {
   const url = (process.env.NODE_ENV == 'production' ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/services` : 'http://127.0.0.1:1337/api/services')
   const res = await fetch(`${url}/?filters[siteLink][$eq]=${params.id}`)
   const serviceData = await res.json();
   const service = serviceData.data[0];

   return { props: { service } }
}


const ServicePage = ({service }) => {
   const pageTitle = service.attributes.name + ' - Ikaika Records' // Note that this has to set here and not in the JSX otherwise it causes a problem.
   const [pageType, setPageType] = useState("");
   const [href, setHref] = useState("");

   useEffect( ()=> {
      // Checks to see if there is a calendly link associated with the service
      if (service.attributes.calendlyLink) { 
         setPageType("calendar");
      }
      else { 
         setPageType("form");
      }
      setHref(window.location.href);
   })
   return (
      <>
    <Head>
         <title>{pageTitle}</title> 
         <meta
            name='description'
            content={service.attributes.metadescription} 
         />
         <meta
            property='og:site_name'
            content='Ikaika Records'
         />
         <meta
            property='og:title'
            content={pageTitle}
         />
         <meta
            property='og:description'
            content={service.attributes.metadescription}
         />
         <meta 
            property='og:image' 
            content={service.attributes.imageLink}
         />
         <meta
            property='og:url'
            content={href}
         />
         <meta
            property='twitter:site'
            content='@ikaikarecords'
         />
         <meta
            property='twitter:title'
            content={pageTitle}
         />
         <meta
            property='twitter:description'
            content={service.attributes.metadescription}
         />
         <meta
            property='twitter:card'
            content='summary_large_image'
         />
         <meta
            property='twitter:image:src'
            content={service.attributes.imageLink}
         />


      </Head>
      <div className="radial__gradient"> 
         <div className="page__padding" />
         <Header headerName={service.attributes.name} prev="services"/>

         { pageType == "calendar" ? 
               <>
              
                  <div className="calendly-inline-widget" data-url={`${service.attributes.calendlyLink}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=161a1e&text_color=f5f7fb&primary_color=1c6590`} style={{height:850}}></div>
                  <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>

               </>
         : null }

         <div className="content__container" > 
            <div className="servicepage__description">
               <img alt={service.attributes.alt} src={service.attributes.imageLink}/>
               <h4> {service.attributes.name.toUpperCase()} - {service.attributes.tag.toUpperCase()} </h4>
               <p> {service.attributes.description} </p>
            </div> 
         </div> 
         { pageType == "form" ? <ContactForm serviceName={service.attributes.name}/> : null } 

      { service.attributes.siteLink == "in-person" ? 
            <>
               <Header headerName="recording equipment" minor={true} />
               <div className="content__container">
                  <EquipmentList /> 
               </div>
            </>
      : null } 


      </div> 
      </>
   )
}

export default ServicePage;
