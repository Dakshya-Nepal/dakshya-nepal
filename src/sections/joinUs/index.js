import React from "react"
import { Box, Grid, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import JoinUs from "./joinus"
import joinus from "./joinUsData.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box
      pad={
        mobile
          ? { top: "28px", horizontal: "16px" }
          : { top: "34px", horizontal: "131px" }
      }
    >
      <Heading code={2}>Careers</Heading>
      <Grid pad={{ top: "24px" }} columns={"100%"} gap="medium">
        {joinus.map((data, index) => (
          <JoinUs data={data} key={index} mobile={mobile} />
        ))}
      </Grid>
    </Box>
  )
}
