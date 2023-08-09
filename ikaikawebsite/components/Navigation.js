import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import NavigationMobile from './NavigationMobile'; 

const Navigation = ({setMobile}) => { 
   return ( 
      <div className='navigation__container content__container'> 
         <nav>

            <Link href="/"><Image src="/logo.svg" width='72' height='72' className='navigation__logo' alt="Logo"/> </Link>

            <ul className='navigation__socials'>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_TWITTER}> <Image src="/twitter-logo.svg" width='27' height='27' alt="White filled twitter icon"/> </a> </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_YOUTUBE}> <Image src="/youtube-logo.svg" width='27' height='27' alt="White filled twitter icon"/> </a> </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_SPOTIFY}> <Image src="/spotify-logo.svg" width='27' height='27' alt="White filled twitter icon"/> </a> </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_INSTAGRAM}> <Image src="/instagram-logo.svg" width='27' className='navigation-social' height='27' alt="White filled twitter icon"/> </a> </li>
               <li key={Math.random()}> <a href={process.env.NEXT_PUBLIC_LINK_DISCORD}> <Image src="/discord-logo.svg" width='27' className='navigation-social' height='27' alt="White filled twitter icon"/> </a> </li>
            </ul>

            <ul className='navigation__menu'>
               <li> <Link className='navigation-item' href='/mission'>MISSION</Link> <div/> </li>
               <li> <Link className='navigation__item' href='/services'>SERVICES</Link> <div/> </li>
            </ul>

            <i onClick={() => setMobile(true)} className='navigation__button__on'></i> 
         </nav>
      </div> 
   )
}

export default Navigation;
