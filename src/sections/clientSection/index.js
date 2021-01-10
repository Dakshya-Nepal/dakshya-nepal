import React from "react"
import { Box, ResponsiveContext } from "grommet"
import SectionBlock from "./sectionBlock"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      gap="xlarge"
      direction={mobile ? "column" : "row"}
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
    >
      <SectionBlock name="clientele" mobile={mobile} />
      <SectionBlock name="Partners" mobile={mobile} />
    </Box>
  )
}
