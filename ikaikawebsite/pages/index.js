import Landing from '../components/Landing'
import Head from 'next/head'

export async function getStaticProps() {
   const res = await fetch(`https://strapi-cms-production-b766.up.railway.app/api/outnows`, {method: "GET"})
   const outnows = await res.json()

   return {
      props: {
         outnows,
      },
   };
}

export default function Home({outnows}) {
   return (
      <>
      <Head>
         <title>Ikaika Records - Record label, audio services, and community</title>
         <meta
            name="description" 
            content="Democratizing the music industry with an artist first approach, providing music services, and a home for a growing community of artists." 
         />
         <meta 
            name="viewport" 
            content="width=device-width, initial-scale=1" 
         />
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing outnows={outnows} /> 
      </>
   )
}
