import React from "react";
import BaseLayout from "../../components/layout/baseLayout";
import Header from "../../components/header/header";
import ContentHeader from "../../components/header/contentHeader";
import Meta from "../../utils/meta";
import CV from "../../assets/document/pdf/cv.pdf";
import { useNavigate } from "react-router-dom";
import { SectionAbout } from "../../components/app/home";

export default function HomePage() {
  const navigate = useNavigate();
  const handleDownloadCV = () => {
    fetch(`${CV}`).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV Mochamad Riza Syarif.pdf";
        alink.click();
      });
    });
  };
  const handleContactMe = () => {
    navigate("/app/contact");
  };
  return (
    <BaseLayout>
      <Meta title={`Home`} />
      <Header background={`bg-home`}>
        <ContentHeader
          title={`Mochamad Riza Syarif`}
          subtitle={`rizasyarif20@gmail.com`}
          type={"home"}
          titleButton1={"Contact"}
          titlebutton2={"Download CV "}
          handlebutton1={handleContactMe}
          handlebutton2={handleDownloadCV}
        />
      </Header>
      <SectionAbout />
    </BaseLayout>
  );
}
