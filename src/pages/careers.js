import React from "react"
import { graphql } from "gatsby"

import Layout from "../sections/layout"
import Seo from "../components/seo"
import JoinUs from "../sections/joinUs"
import CareerDropdown from "../sections/careersDropdown"
import CareerMail from "../sections/careerMail"

export default ({ data }) => {
  return (
    <Layout active="careers">
      <Seo title="Careers" />
      <JoinUs />
      <CareerDropdown data={data.allCockpitCareers.nodes} />
      <CareerMail />
    </Layout>
  )
}

export const query = graphql`
  {
    allCockpitCareers(filter: { lang: { eq: "en" } }) {
      nodes {
        position {
          value
        }
        requirement {
          value
        }
        responsibilites {
          value
        }
        specifications {
          value
        }
        experience {
          value
        }
      }
    }
  }
`
