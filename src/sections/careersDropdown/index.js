import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Dropdown from "./dropdown"
import careers from "./careers.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box
      pad={
        mobile
          ? { top: "90px", horizontal: "16px" }
          : { top: "58px", horizontal: "131px" }
      }
    >
      <Heading code={2}>open Careers @ dakshya nepal</Heading>
      <Box pad={{ top: "40px" }} gap="medium">
        {careers.map((data, index) => (
          <Dropdown info={data} key={index} active={index === 1} />
        ))}
      </Box>
    </Box>
  )
}
