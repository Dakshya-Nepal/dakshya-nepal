import React from "react"
import { Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"

export default () => {
  return (
    <Box round="4px" border={{ color: "w2", size: "2px" }}>
      <Box background="p1-l">
        <Image src="illustrations/Online classes.svg" fill="vertical" />
      </Box>
      <Box pad="24px" gap="small">
        <Heading code={4}>Join as online tutor</Heading>
        <Text code="subtext-r" size="small" color="b2">
          If you have a passion in teaching and want to educate and enlighten
          students with your personalized way of teaching, we would love to have
          your expertise.
        </Text>
        <Button secondary label="Apply" />
      </Box>
    </Box>
  )
}
