import React from "react"
import ReactParser, { convertNodeToElement } from "react-html-parser"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Box, Image, ResponsiveContext } from "grommet"
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

const transform = node => {
  if (node.name === "p") {
    if (node.children[0].name === "strong") {
      return <Text weight="bold">{node.children[0].children[0].data}</Text>
    } else if (node.children[0].name === "em") {
      return (
        <Box direction="row" gap="small">
          <Image src="/images/quotation.svg" alignSelf="start" />
          <Text as="blockquote">
            <span
              style={{
                fontStyle: "italic",
                backgroundColor: "#ffd749",
                lineHeight: "35px",
                padding: "5px",
              }}
            >
              {node.children[0].children[0].data}
            </span>
          </Text>
        </Box>
      )
    } else if (node.children[0].name === "span") {
      const image = node.children[0]
      image.attribs.style = image.attribs.style.replace("650px", "100%")
      convertNodeToElement(image)
      return
    }
    return <Text>{node.children[0].data}</Text>
  }
}

export default ({ data: { post }, location }) => {
  const url = post.path
  const category = url.match(/(?<=\/)(.*?)(?=\/)/g)
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Layout>
      <SEO title={post.name} />
      <Box pad={mobile ? { horizontal: "16px" } : { horizontal: "268px" }}>
        <Box gap="small" direction="row" pad={{ top: "32px" }}>
          <ArrowLeft color="b1" />
          <Text code="sub-r" color="b2">
            {post.createdTime}
          </Text>
          <Text code="sub-r" color="b2" style={{ textTransform: "capitalize" }}>
            {category[0].replace("-", " ")}
          </Text>
          <Text code="sub-r" color="b2">
            {post.childMarkdownRemark.timeToRead} mins read
          </Text>
        </Box>
        <Heading code={3} margin={{ top: "16px", bottom: "24px" }}>
          {post.name}
        </Heading>
        <Box pad={{ bottom: "24px" }}>
          <Img
            fluid={post.cover.image.childImageSharp.fluid}
            style={{ borderRadius: "4px" }}
          />
        </Box>
        <Box gap="medium">
          {ReactParser(post.childMarkdownRemark.html, {
            transform,
          })}
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
    post: googleDocs(path: { eq: $path }) {
      childMarkdownRemark {
        html
        timeToRead
      }
      path
      name
      createdTime(fromNow: true)
      cover {
        image {
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