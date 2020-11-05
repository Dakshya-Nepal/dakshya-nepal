import React from "react"

import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../sections/layout"
import Slider from "../sections/slider"
import Features from "../sections/features"
import Blog from "../sections/blog"
import CtaBox from "../sections/ctaBox"
import ClientSection from "../sections/clientSection"
import Newsletter from "../sections/newsletter"

export default ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Slider />
      <Features />
      <Blog title="blog" url="/blog" data={data} />
      <CtaBox />
      <ClientSection />
      <Newsletter />
    </Layout>
  )
}

export const query = graphql`
  {
    allCockpitBlog(filter: { lang: { eq: "en" } }, limit: 3) {
      edges {
        node {
          fields {
            path
          }
          title {
            value
          }
          category {
            value
          }
          timeToRead {
            value
          }
          coverImage {
            value {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
