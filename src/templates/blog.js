import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, ResponsiveContext } from "grommet"
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

import Layout from "../sections/layout"
import SEO from "../components/seo"
import Text from "../components/text"
import Heading from "../components/heading"

import ArrowLeft from "../components/icons/arrow-left"
import Facebook from "../components/icons/facebook"
import Twitter from "../components/icons/twitter"
import Instagram from "../components/icons/instagram"
import Linkedin from "../components/icons/linkedin"

export default ({ data: { post }, location }) => {
  const url = location ? location.href : ""
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Layout active="blogs">
      <SEO title={post.name} />
      <Box pad={mobile ? { horizontal: "16px" } : { horizontal: "268px" }}>
        <Box gap="small" direction="row" pad={{ top: "32px" }}>
          <ArrowLeft color="b1" />
          <Text code="sub-r" color="b2">
            {post.cockpitCreated}
          </Text>
          <Text code="sub-r" color="b2" style={{ textTransform: "capitalize" }}>
            {post.category.value}
          </Text>
          <Text code="sub-r" color="b2">
            {post.timeToRead.value} mins read
          </Text>
        </Box>
        <Heading code={3} margin={{ top: "16px", bottom: "24px" }}>
          {post.title.value}
        </Heading>
        <Box pad={{ bottom: "24px" }}>
          <Img
            fluid={post.coverImage.value.childImageSharp.fluid}
            style={{ borderRadius: "4px" }}
          />
        </Box>
        <Box gap="medium">
          <div
            className="blogPost"
            dangerouslySetInnerHTML={{
              __html: post.content.value.childMarkdownRemark.html,
            }}
          />
        </Box>
        <Box
          flex="grow"
          alignSelf="end"
          direction="row"
          gap="small"
          pad={{ vertical: "medium" }}
        >
          <FacebookShareButton url={url}>
            <Facebook color="b1" />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <Twitter color="b1" />
          </TwitterShareButton>
          <InstapaperShareButton url={url}>
            <Instagram color="b1" />
          </InstapaperShareButton>
          <LinkedinShareButton url={url}>
            <Linkedin color="b1" />
          </LinkedinShareButton>
        </Box>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($path: String) {
    post: cockpitBlog(lang: { eq: "en" }, fields: { path: { eq: $path } }) {
      fields {
        path
      }
      title {
        value
      }
      category {
        value
      }
      content {
        value {
          childMarkdownRemark {
            html
          }
        }
      }
      cockpitCreated(fromNow: true)
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
`
