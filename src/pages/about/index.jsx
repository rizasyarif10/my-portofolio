import React from "react";
import BaseLayout from "../../components/layout/baseLayout";
import Meta from "../../utils/meta";
import Header from "../../components/header/header";
import ContentHeader from "../../components/header/contentHeader";

export default function AboutPage() {
  return (
    <BaseLayout>
      <Meta title={`About`} />
      <Header background={`bg-about`}>
        <ContentHeader
          title={`About`}
          subtitle={`Tentang Saya`}
        />
      </Header>
    </BaseLayout>
  );
}
