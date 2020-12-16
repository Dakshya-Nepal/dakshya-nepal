import React from "react"
import { Box, Image } from "grommet"
import { Link } from "gatsby"
import Text from "../../components/text"
import Heading from "../../components/heading"

export default ({ title, image, minRead, link, category }) => {
  return (
    <Box width="100%" round="4px" border={{ color: "w2" }} animation="fadeIn">
      <Link style={{ textDecoration: "none", color: "inherit" }} to={link}>
        <Box height="small">
          <Image
            src={process.env.GATSBY_API_URL + image}
            alt={title}
            fit="cover"
          />
        </Box>
        <Box pad={{ horizontal: "16px", top: "16px", bottom: "40px" }}>
          <Box direction="row">
            <Text code="sub-r" color="g1">
              {minRead} min read
            </Text>
            <Box flex="grow">
              <Text
                code="sub-r"
                color="g1"
                alignSelf="end"
                style={{ textTransform: "capitalize" }}
              >
                #{category}
              </Text>
            </Box>
          </Box>
          <Heading code={4} margin={{ top: "8px" }}>
            {title}
          </Heading>
        </Box>
      </Link>
    </Box>
  )
}
