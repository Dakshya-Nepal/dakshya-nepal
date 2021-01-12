import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import showcasedata from "./productShowcaseData.json"
import ProductShowcaseCard from "./productShowcaseCard"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
    >
      <Heading code={2}>Why Dakshya CMS?</Heading>
      <Box gap="medium" pad={{ top: "32px" }}>
        {showcasedata.map((data, index) => (
          <ProductShowcaseCard
            image={data.image}
            title={data.title}
            description={data.description}
            mobile={mobile}
            index={index}
          />
        ))}
      </Box>
    </Box>
  )
}
