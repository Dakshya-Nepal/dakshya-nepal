import React from "react"
import Layout from "../../sections/layout"
import SEO from "../../components/seo"
import ProductHeading from "../../sections/kalam-cms/productHeading"
import KalamFeatures from "../../sections/kalam-cms/kalamFeatures"
import ProductShowcase from "../../sections/kalam-cms/productShowcase"
import ContactSalesForm from "../../sections/contactSalesForm"

export default () => {
  const product = "Dakshya CMS"
  return (
    <Layout active="products">
      <SEO title={product} />
      <ProductHeading />
      <KalamFeatures />
      <ProductShowcase />
      <ContactSalesForm
        title="Contact Sales Form"
        product={product}
        image="/illustrations/CMS.svg"
      />
    </Layout>
  )
}
