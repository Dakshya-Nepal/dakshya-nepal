import React from "react"
import { Box, Image, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { horizontal: "16px", top: "64px" }
          : { horizontal: "131.5px", top: "90px" }
      }
    >
      <Heading code={2} size="medium">
        Interested in educating Nepal?
      </Heading>
      <Box
        margin={mobile ? { top: "32px" } : { top: "48px" }}
        direction={mobile ? "column" : "row"}
        border={{ size: "2px", color: "w2" }}
        round="4px"
        gap="medium"
      >
        <Box
          background="p1-l"
          pad={{ top: "large", left: "small", right: "xsmall" }}
          round={{ corner: "left", size: "4px" }}
        >
          <Image src="/illustrations/Careers.svg" />
        </Box>
        <Box
          alignSelf="center"
          gap="small"
          pad={mobile ? { horizontal: "16px", bottom: "16px" } : null}
          width={mobile ? "100%" : "large"}
        >
          <Heading level={3}>Join our mission</Heading>
          <Box width={mobile ? "100%" : "80%"}>
            <Text code="subtext-r" color="b2" size="small">
              If you are willing to digitize Nepal and become a part of the
              largest digital educator, join us in changing the education system
              for being recognized as the global leader in education.
            </Text>
          </Box>
          <Box direction={mobile ? "column" : "row"} gap="small">
            <Button primary label="explore careers" />
            <Button secondary label="Join as consultant" />
            <Button secondary label="Join as online tutor" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
