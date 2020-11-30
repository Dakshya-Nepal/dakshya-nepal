import React from "react"
import { Box, Collapsible, Grid, ResponsiveContext } from "grommet"
import { ScrollTo } from "react-scroll-to"

import Heading from "../../../components/heading"
import Button from "../../../components/button"

import products from "../../../content/products.json"
import HeaderCard from "./headerCard"

import chevUp from "../../../components/icons/chevron-up"
import chevDown from "../../../components/icons/chevron-down"

export default props => {
  const url = typeof window === "undefined" ? "" : window.location.href
  console.log(url)
  const [open, setOpen] = React.useState(false)
  const Icon = open ? chevUp : chevDown
  const mobile = React.useContext(ResponsiveContext) === "small"
  let name = url.match("/.*/(.*)")

  return (
    <>
      <Box
        width="100%"
        direction="row"
        border={{ size: "1px", side: "top" }}
        pad={{ top: "12px" }}
      >
        <Box direction="row" alignSelf="center" onClick={() => setOpen(!open)}>
          <Heading
            code={4}
            size="small"
            style={{ textTransform: "capitalize" }}
          >
            {name[1].replace("-", " ") || "Products"}
          </Heading>
          <Icon color="b1" />
        </Box>
        <Box flex="grow">
          <ScrollTo>
            {({ scroll }) => (
              <Button
                onClick={() => scroll({ y: 2800, smooth: true })}
                alignSelf="end"
                primary
                label="Contact Sales"
              />
            )}
          </ScrollTo>
        </Box>
      </Box>
      <Box width="100%">
        <Collapsible open={open} {...props}>
          <Grid
            columns={mobile ? "100%" : "31%"}
            gap="medium"
            pad={{ top: "24px" }}
          >
            {products.map((data, index) => (
              <HeaderCard product={data} key={index} />
            ))}
          </Grid>
        </Collapsible>
      </Box>
    </>
  )
}
