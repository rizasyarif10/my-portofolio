import React  from "react";
import BaseLayout from "../../components/layout/baseLayout";
import Header from "../../components/header/header";
import ContentHeader from "../../components/header/contentHeader";
import Meta from "../../utils/meta";

export default function HomePage() {
  return (
    <>
      <BaseLayout>
        <Meta title={`Home`} />
        <Header background={`bg-home`}>
          <ContentHeader
            title={`Mochamad Riza Syarif`}
            subtitle={`Frontend Developer`}
            paragraph = {'pengalaman di bidang web application'}
            type={'home'}
          />
        </Header>
      </BaseLayout>
    </>
  );
}
