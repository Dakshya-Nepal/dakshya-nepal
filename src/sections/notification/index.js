import React from "react"
import { Box, Collapsible } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Exit from "../../components/icons/exit"
import { Validate, Alert } from "grommet-icons"

export default ({ error, message, closeMain }) => {
  const [open, setOpen] = React.useState(true)
  const Icon = error ? Alert : Validate
  const handleClose = () => {
    setOpen(false)
    closeMain(false)
  }
  return (
    <Box style={{ position: "fixed", bottom: 0 }} width="80%">
      <Collapsible open={open}>
        <Box
          round={{ size: "8px", corner: "top" }}
          background={error ? "s2" : "s1"}
          pad={{ vertical: "medium", horizontal: "large" }}
          align="center"
          justify="center"
          direction="row"
        >
          <Box flex="grow">
            <Box direction="row" gap="medium">
              <Icon size="large" />
              <Box alignSelf="center">
                <Heading code={3}>{error ? "Error" : "Success"}</Heading>
                <Text code="sub-m">{message}</Text>
              </Box>
            </Box>
          </Box>
          <Box onClick={handleClose}>
            <Exit />
          </Box>
        </Box>
      </Collapsible>
    </Box>
  )
}
