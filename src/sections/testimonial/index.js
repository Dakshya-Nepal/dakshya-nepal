import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import ComponentSlider from "../componentSlider"
import TestimonialCard from "./testimonialCard"
import tesimonialData from "./testimonialData.json"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box>
      <Box
        pad={
          mobile
            ? { top: "64px", horizontal: "16px" }
            : { top: "90px", horizontal: "131.5px" }
        }
      >
        <Heading code={2}>Our Happy Costumers</Heading>
      </Box>
      <ComponentSlider margin={{ top: "48px" }}>
        {tesimonialData.map((data, index) => (
          <TestimonialCard
            name={data.name}
            occupation={data.occupation}
            message={data.message}
            image={data.image}
            key={index}
          />
        ))}
      </ComponentSlider>
    </Box>
  )
}
