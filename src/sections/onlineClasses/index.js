import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import classes from "./classes.json"
import OnlineClassBlock from "./onlineClassBlock"
import NewTutor from "./newTutor"
import ComponentSlider from "../componentSlider"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box>
      <Box
        direction="row"
        pad={
          mobile
            ? { horizontal: "16px", top: "64px" }
            : { horizontal: "131.5px", top: "98px" }
        }
      >
        <Heading code={2} size="medium">
          online classes
        </Heading>
        <Box flex="grow">
          <Button secondary label="Explore" alignSelf="end" />
        </Box>
      </Box>
      <ComponentSlider margin={{ top: "48px" }}>
        {classes.map((cls, index) => (
          <OnlineClassBlock
            title={cls.title}
            tutor={cls.tutor}
            sesh={cls.sesh}
            price={cls.price}
            course={cls.course}
            key={index}
          />
        ))}
        <NewTutor />
      </ComponentSlider>
    </Box>
  )
}
