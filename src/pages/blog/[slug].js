import React from "react"

import Layout from "../../sections/layout"

import { BlogLoading, BlogLoaded } from "../../sections/blogLoading"
import ErrorPage from "../../sections/404"

export default props => {
  const slug = props.params.slug
  const [blogData, setBlogData] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [err, setErr] = React.useState(null)
  React.useEffect(() => {
    // get data from api
    fetch(
      `${process.env.GATSBY_API_URL}/api/collections/get/blog?filter[slug]=${slug}`
    )
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setLoading(null)
        if (resultData.entries.length === 0) {
          setErr(true)
        } else {
          setBlogData(resultData.entries[0])
        }
      }) // set data for the blog
  }, [slug])
  return (
    <Layout active="blogs">
      {loading ? (
        <BlogLoading />
      ) : err ? (
        <ErrorPage />
      ) : (
        <BlogLoaded blogData={blogData} />
      )}
    </Layout>
  )
}
