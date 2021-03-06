import React from "react"
import SEO from "../../components/seo"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import { Link } from "gatsby"
import Button from "../../components/button"
import ProductList from "../productList"

export default () => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <>
      <SEO title="404: Page Not Found" />
      <Box
        pad={
          mobile
            ? { horizontal: "16px", top: "60px" }
            : { horizontal: "131px", top: "90px" }
        }
      >
        <Heading code={1}>
          Oh snap! <br />
          404: page not found
        </Heading>
        <Box width="medium" margin={{ vertical: "24px" }}>
          <Text code="sub-r" color="b2">
            The link you are trying to visit is not found or moved to a new
            address. Please go back or go to home.
          </Text>
        </Box>
        <Link to="/">
          <Button alignSelf="start" primary label="Go Home" as="span" />
        </Link>
      </Box>
      <Box pad={{ bottom: "65px" }}>
        <ProductList title="or, Explore our products" />
      </Box>
    </>
  )
}
