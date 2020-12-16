import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Dropdown from "./dropdown"
import Skeleton from "react-loading-skeleton"

export default ({ data, loading }) => {
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
        {data.map((data, index) => (
          <Dropdown info={data} key={index} active={index === 1} />
        ))}
        {loading ? <Skeleton count={4} height={40} /> : null}
      </Box>
    </Box>
  )
}
