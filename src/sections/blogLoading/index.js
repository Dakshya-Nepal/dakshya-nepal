import React from "react"
import { Box, Image, ResponsiveContext } from "grommet"
import ArrowLeft from "../../components/icons/arrow-left"
import Text from "../../components/text"
import dayjs from "dayjs"
import Skeleton from "react-loading-skeleton"
import Heading from "../../components/heading"
import htmr from "htmr"
import {
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import Facebook from "../../components/icons/facebook"
import Twitter from "../../components/icons/twitter"
import Instagram from "../../components/icons/instagram"
import Linkedin from "../../components/icons/linkedin"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const transform = {
  p: "p",
  img: node => (
    <img
      src={process.env.GATSBY_API_URL + node.src}
      width="100%"
      alt={node.alt}
    />
  ),
}

export const BlogLoaded = ({ blogData }) => {
  const path = typeof window !== "undefined" ? window.location.href : ""
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={mobile ? { horizontal: "16px" } : { horizontal: "268px" }}
      animation="fadeIn"
    >
      <SEO title={blogData.title} />
      <Box gap="small" direction="row" pad={{ top: "32px" }}>
        <Link to="/blog">
          <ArrowLeft color="b1" />
        </Link>
        <Text code="sub-r" color="b2">
          {dayjs.unix(blogData._created).format("DD, MMMM, YYYY")}
        </Text>
        <Text code="sub-r" color="b2" style={{ textTransform: "capitalize" }}>
          {blogData.category || <Skeleton />}
        </Text>
        <Text code="sub-r" color="b2">
          {blogData.timeToRead} mins read
        </Text>
      </Box>
      <Heading code={3} margin={{ top: "16px", bottom: "24px" }}>
        {blogData.title}
      </Heading>
      <Box pad={{ bottom: "24px" }}>
        {Object.keys(blogData).length !== 0 ? (
          <Image src={process.env.GATSBY_API_URL + blogData.coverImage.path} />
        ) : null}
      </Box>
      <Box gap="medium">
        <div className="blogPost">
          {Object.keys(blogData).length !== 0
            ? htmr(blogData.content, { transform })
            : null}
        </div>
      </Box>
      <Box
        flex="grow"
        alignSelf="end"
        direction="row"
        gap="small"
        pad={{ vertical: "medium" }}
      >
        <FacebookShareButton url={path}>
          <Facebook color="b1" />
        </FacebookShareButton>
        <TwitterShareButton url={path}>
          <Twitter color="b1" />
        </TwitterShareButton>
        <InstapaperShareButton url={path}>
          <Instagram color="b1" />
        </InstapaperShareButton>
        <LinkedinShareButton url={path}>
          <Linkedin color="b1" />
        </LinkedinShareButton>
      </Box>
    </Box>
  )
}

export const BlogLoading = () => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { horizontal: "16px", vertical: "32px" }
          : { horizontal: "268px", vertical: "32px" }
      }
      gap="medium"
    >
      <Box direction="row" gap="medium">
        <Box width="15%">
          <Skeleton />
        </Box>
        <Box width="15%">
          <Skeleton />
        </Box>
        <Box width="15%">
          <Skeleton />
        </Box>
      </Box>
      <Box>
        <Skeleton height={40} />
      </Box>
      <Box>
        <Skeleton height={250} />
      </Box>
      <Box>
        <Skeleton count={6} />
        <Skeleton width={100} />
      </Box>
    </Box>
  )
}
