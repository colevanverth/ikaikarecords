import Link from "next/link"
import React, { Component } from "react";
import Image from 'next/image'

const Footer = () => {
   return (
      <div className='footer__container'> 
         <footer> 
            <div> 
               <Image src="/logomono.png" width={200} height={59} alt="Ikaika Records logo icon with text in monotone colors" className='footer__logo'/> 
               <p> Copyright © Ikaika Records 2023. All Rights Reserved. </p>
            </div> 
            <ul>
               <a className='footer__label'> SITEMAP </a>
               <li key={Math.random()}> <Link href="/"> Home </Link> </li> 
               <li key={Math.random()}> <Link href="/services"> Services </Link> </li> 
               <li key={Math.random()}> <Link href="/mission"> Mission </Link> </li> 
               <li key={Math.random()}> <Link href="/studio-equipment"> Studio Equipment </Link> </li> 
            </ul>
            <ul>
               <a className='footer__label'> SOCIALS </a>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_SPOTIFY}> Spotify <Image src="/leaving.svg" width={17} height={17} alt=""/> </a>  </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_TWITTER}> Twitter <Image src="/leaving.svg" width={17} height={17} alt=""/> </a> </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM}> Instagram <Image src="/leaving.svg"  width={17} height={17} alt=""/> </a> </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_YOUTUBE}> Youtube <Image src="/leaving.svg" width={17} height={17} alt=""/> </a> </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_DISCORD}> Discord <Image src="/leaving.svg" width={17} height={17} alt=""/> </a> </li>
               <li key={Math.random()}> <a> </a> </li>
            </ul>
            <ul>
               <a className='footer__label'> IKAIKA RECORDS </a>
               <li key={Math.random()}> <a href="mailto:business@ikaikarecords.us"> business@ikaikarecords.us <Image src="/leaving.svg" width={17} height={17} alt=""/> </a> </li>
               <li key={Math.random()}> <a href="http://vanverth.com"> Website Designed by Van Verth Designs <Image src="/leaving.svg"  width={17} height={17} alt=""/></a> </li>
            </ul>
         </footer> 
      </div> 
   )
}

export default Footer; 
