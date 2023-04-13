import React from "react";
import BaseLayout from "../../components/layout/baseLayout";
import Header from "../../components/header/header";
import ContentHeader from "../../components/header/contentHeader";
import Meta from "../../utils/meta";

export default function ContactPage() {
  return (
    <BaseLayout>
      <Meta title={`About`} />
      <Header background={`bg-contact`}>
        <ContentHeader title={`Contact Me`} subtitle={`Kontak Saya`} type={'contact'}/>
      </Header>
    </BaseLayout>
  );
}
