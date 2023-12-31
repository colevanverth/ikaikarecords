import Header from "../../../components/Header";
import ContactForm from "../../../components/ContactForm";
import EquipmentList from "../../../components/EquipmentList";

import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Generates service pages on build; `params` is exposed to getStaticProps()
 */
export async function getStaticPaths() {
  const url =
    process.env.NODE_ENV == "production"
      ? process.env.NEXT_PUBLIC_STRAPI_URL + "/api/services"
      : "http://127.0.0.1:1337/api/services";
  const res = await fetch(url);
  const services = await res.json();

  const paths = services.data?.map((item) => {
    return {
      params: { id: item.attributes.siteLink },
    };
  });

  return { paths, fallback: false };
}

/**
 * Pulls service object corresponding to current slug and creates a prop for that service.
 */
export async function getStaticProps({ params }) {
  // Load service info.
  const service_url =
    process.env.NODE_ENV == "production"
      ? process.env.NEXT_PUBLIC_STRAPI_URL + "/api/services"
      : "http://127.0.0.1:1337/api/services";
  const service_res = await fetch(
    `${service_url}/?filters[siteLink][$eq]=${params.id}`,
  );
  const serviceData = await service_res.json();
  const service = serviceData.data[0];

  // Load equipment list if required by service display options.
  var equipment = null;
  if (service.attributes.displayEquipment) {
    const equipment_url =
      process.env.NODE_ENV == "production"
        ? process.env.NEXT_PUBLIC_STRAPI_URL + "/api/equipment"
        : "http://127.0.0.1:1337/api/equipment";
    const equipment_res = await fetch(equipment_url);
    const equipmentData = await equipment_res.json();
    equipment = await equipmentData.data.attributes.equipment;
  }

  return { props: { service, equipment } };
}

const ServicePage = ({ service, equipment }) => {
  const pageTitle = service.attributes.name + " - Ikaika Records"; // Note that this has to set here and not in the JSX otherwise it causes a problem.
  const [href, setHref] = useState("");

  useEffect(() => {
    // Checks to see if there is a calendly link associated with the service
    setHref(window.location.href);
  });
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={service.attributes.metadescription} />
        <meta property="og:site_name" content="Ikaika Records" />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={service.attributes.metadescription}
        />
        <meta property="og:image" content={service.attributes.imageLink} />
        <meta property="og:url" content={href} />
        <meta property="twitter:site" content="@ikaikarecords" />
        <meta property="twitter:title" content={pageTitle} />
        <meta
          property="twitter:description"
          content={service.attributes.metadescription}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image:src"
          content={service.attributes.imageLink}
        />
      </Head>
      <div className="radial__gradient">
        <div className="page__padding" />
        <Header headerName={service.attributes.name} prev="services" />

        {service.attributes.displayCalendly ? (
          <>
            <div
              className="calendly-inline-widget"
              data-url={`https://calendly.com/${process.env.NEXT_PUBLIC_CALENDLY_USERNAME}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=161a1e&text_color=f5f7fb&primary_color=1c6590`}
              style={{ height: 850 }}
            ></div>
            <Script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            ></Script>
          </>
        ) : null}

        <div className="content__container">
          <div className="servicepage__description">
            <img
              alt={service.attributes.alt}
              src={service.attributes.imageLink}
            />
            <h4>
              {" "}
              {service.attributes.name.toUpperCase()} -{" "}
              {service.attributes.tag.toUpperCase()}{" "}
            </h4>
            <p> {service.attributes.description} </p>
          </div>
        </div>
        {service.attributes.displayForm ? (
          <ContactForm serviceName={service.attributes.name} />
        ) : null}

        {service.attributes.displayEquipment ? (
          <>
            <Header headerName="recording equipment" minor={true} />
            <div className="content__container">
              <ReactMarkdown className="equipment__list">
                {equipment}
              </ReactMarkdown>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default ServicePage;
