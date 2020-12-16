import React from "react"
import { Box, ResponsiveContext, Grid } from "grommet"
import FeatureBlock from "./featureBlock"
import features from "./aboutFeature.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box
      pad={
        mobile
          ? { top: "20px", horizontal: "16px" }
          : { top: "20px", horizontal: "131px" }
      }
    >
      <Grid
        columns={mobile ? "full" : "49%"}
        gap={{ column: "small", row: "xlarge" }}
      >
        {features.map((data, index) => (
          <FeatureBlock
            title={data.title}
            description={data.description}
            icon={data.icon}
            key={index}
            mobile={mobile}
          />
        ))}
      </Grid>
    </Box>
  )
}
