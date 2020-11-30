import React from "react"
import { Link } from "gatsby"
import { Box, Header, Image, ResponsiveContext } from "grommet"

import ProductMenu from "./productMenu"

export default ({ children }) => {
  const size = React.useContext(ResponsiveContext)
  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <Header
      background="w1"
      pad={
        size === "small" ? "16px" : { horizontal: "131px", vertical: "24px" }
      }
      elevation="header"
      direction="column"
    >
      <Box direction="row" width="100%">
        <Link to="/">
          <Image
            src="/images/logo-horizontal.svg"
            label="Dakshya Nepal"
            fill="vertical"
          />
        </Link>
        {children}
      </Box>
      {url.includes("/products/") && <ProductMenu link={url} />}
    </Header>
  )
}
