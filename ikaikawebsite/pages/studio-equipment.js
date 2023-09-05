import EquipmentList from "../components/EquipmentList";
import Header from "../components/Header";
import Head from "next/head";

const StudioEquipment = () => {
  return (
    <>
      <Head>
        <title> Studio Equipment - Ikaika Records </title>
        <meta
          name="description"
          content="The equipment at our recording studio here at Ikaika Records."
        />
      </Head>
      <div className="page__padding" />
      <Header headerName="Studio Equipment" />
      <div className="content__container">
        <EquipmentList />
      </div>
    </>
  );
};

export default StudioEquipment;
