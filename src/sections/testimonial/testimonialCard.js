import React from "react"
import Text from "../../components/text"
import { Avatar, Box } from "grommet"
import Heading from "../../components/heading"
import Card from "../../components/card"

export default ({ name, occupation, message, image }) => {
  return (
    <Card pad="24px" border={{ color: "w2" }} width="100%" gap="medium">
      <Text code="subtext-r" size="small">
        {message}
      </Text>
      <Box direction="row" gap="small">
        <Avatar rounded src={image} />
        <Box>
          <Heading code={4}>{name}</Heading>
          <Text code="subtext-m" size="small" color="b2">
            {occupation}
          </Text>
        </Box>
      </Box>
    </Card>
  )
}
