import React from "react"

import Seo from "../components/seo"
import Layout from "../sections/layout"
import Slider from "../sections/slider"
import Features from "../sections/features"
import Blog from "../sections/blog"
import CtaBox from "../sections/ctaBox"
import ClientSection from "../sections/clientSection"
import Newsletter from "../sections/newsletter"

export default () => {
  const [blogData, setBlogData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // get data from api
    fetch(
      `${process.env.GATSBY_API_URL}/api/collections/get/blog?limit=3&sort[_created]=-1`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setLoading(null)
        setBlogData(resultData.entries)
      }) // set data for the blog
  }, [])

  return (
    <Layout>
      <Seo title="Home" />
      <Slider />
      <Features />
      <Blog title="blog" url="/blog" data={blogData} loading={loading} />
      <CtaBox />
      <ClientSection />
      <Newsletter />
    </Layout>
  )
}
