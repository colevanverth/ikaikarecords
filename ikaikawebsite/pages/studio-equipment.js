import Header from "../components/Header";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

export async function getStaticProps() {
  // Load equipment list if required by service display options.
  const equipment_url =
    process.env.NODE_ENV == "production"
      ? process.env.NEXT_PUBLIC_STRAPI_URL + "/api/equipment"
      : "http://127.0.0.1:1337/api/equipment";
  const equipment_res = await fetch(equipment_url);
  const equipmentData = await equipment_res.json();
  var equipment = equipmentData.data.attributes;

  return { props: equipment };
}

const StudioEquipment = ({ equipment }) => {
  return (
    <>
      <Head>
        <title> Studio Equipment - Ikaika Records </title>
        <meta
          name="description"
          content="The equipment at our recording studio at Ikaika Records."
        />
      </Head>
      <div className="page__padding" />
      <Header headerName="Studio Equipment" />
      <div className="content__container">
        <ReactMarkdown className="equipment__list">{equipment}</ReactMarkdown>
      </div>
    </>
  );
};

export default StudioEquipment;
