import React from "react"
import { Box, Image } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"
import ApplyConsultant from "../applyConsultant"

export default ({ data, mobile }) => {
  const [apply, setApply] = React.useState(false)

  return (
    <Box
      direction={mobile ? "column" : "row"}
      border={{ size: "2px", color: "w2" }}
      round="4px"
    >
      <Box
        background="p1-l"
        overflow="hidden"
        width={mobile ? "100%" : "40%"}
        pad={{ top: "medium" }}
      >
        <Image
          src={data.image}
          alignSelf={mobile ? "center" : data.background}
        />
      </Box>
      <Box
        gap="small"
        pad={{ horizontal: "24px", vertical: "24px" }}
        alignSelf="center"
      >
        <Heading code={3}>{data.title}</Heading>
        <Text code="subtext-r" size="small" color="b2">
          {data.desc}
        </Text>
        <Box width={mobile ? "100%" : "xsmall"}>
          <Button secondary label="Apply" onClick={() => setApply(true)} />
        </Box>
      </Box>
      {apply && <ApplyConsultant setApply={setApply} />}
    </Box>
  )
}
