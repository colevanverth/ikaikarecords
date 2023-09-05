import Landing from "../components/Landing";
import Head from "next/head";
import { useEffect, useState } from "react";

const meta_description =
  "Ikaika Records is democratizing the music industry with an artist first approach, providing music services, and a home for a growing community of artists.";
const meta_title =
  "Ikaika Records - Record label, audio services, and community";

export async function getStaticProps() {
  // Get outnows.
  const outnowsUrl =
    process.env.NODE_ENV == "production"
      ? process.env.NEXT_PUBLIC_STRAPI_URL + "/api/outnows"
      : "http://127.0.0.1:1337/api/outnows";
  const outnowsRes = await fetch(outnowsUrl, { method: "GET" });
  const outnows = await outnowsRes.json();

  return {
    props: {
      outnows,
    },
  };
}

export default function Home({ outnows }) {
  const [href, setHref] = useState("");
  useEffect(() => {
    setHref(window.location.href);
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
        <meta property="og:site_name" content="Ikaika Records" />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/daazndobg/image/upload/v1691462361/Ikaika-Brand-Mark-RGB-ColorMedium_dx8psw.png"
        />
        <meta property="og:url" content={href} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing outnows={outnows} />
    </>
  );
}
