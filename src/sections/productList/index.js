import React from "react"
import { Box, Grid, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import products from "../../content/products.json"
import Card from "./card"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "28px", horizontal: "16px" }
          : { top: "40px", horizontal: "131px" }
      }
    >
      <Heading code={2}>{props.title || "Products"}</Heading>
      <Grid
        margin={{ top: "42px" }}
        columns={mobile ? "100%" : "30%"}
        gap="medium"
      >
        {products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </Grid>
    </Box>
  )
}
