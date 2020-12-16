import React from "react"

import Layout from "../sections/layout"
import Seo from "../components/seo"
import JoinUs from "../sections/joinUs"
import CareerDropdown from "../sections/careersDropdown"
import CareerMail from "../sections/careerMail"

export default () => {
  const [careerData, setCareerData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // get data from api
    fetch(`${process.env.GATSBY_API_URL}/api/collections/get/careers`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setLoading(null)
        setCareerData(resultData.entries)
      }) // set data for the blog
  }, [])

  return (
    <Layout active="careers">
      <Seo title="Careers" />
      <JoinUs />
      <CareerDropdown data={careerData} loading={loading} />
      <CareerMail />
    </Layout>
  )
}
