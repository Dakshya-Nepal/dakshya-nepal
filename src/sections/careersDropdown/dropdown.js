import React from "react"
import { Box, Collapsible, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import Button from "../../components/button"
import chevUp from "../../components/icons/chevron-up"
import chevDown from "../../components/icons/chevron-down"

import ApplyJob from "../../sections/applyJob"

export default ({ info, active }) => {
  const [open, setOpen] = React.useState(active)
  const [apply, setApply] = React.useState(false)
  const [position, setPosition] = React.useState("")

  const openForm = position => {
    setPosition(position)
    setApply(true)
  }

  const Icon = open ? chevUp : chevDown
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <>
      <Box round="8px" border={{ size: "2px", color: "w2" }}>
        <Box
          direction="row"
          onClick={() => setOpen(!open)}
          background={open ? "p1-l" : "w1"}
          pad="24px"
          round={open ? { corner: "top", size: "8px" } : { size: "8px" }}
          border={open ? { side: "bottom", size: "2px" } : ""}
        >
          <Heading code={4}>{info.position.value}</Heading>
          <Box align="end" flex="grow">
            <Icon color="b1" alignSelf="end" />
          </Box>
        </Box>
        <Collapsible open={open}>
          <Box pad="24px" gap="small">
            <Text code="sub-m" size="small">
              Experience: {info.experience.value}
            </Text>
            <Text code="sub-m" size="small">
              Requirement: {info.requirement.value}
            </Text>
            <Text code="sub-m" size="small">
              Job Specifications
            </Text>
            <Text code="sub-r" size="small" color="b2" className="jobDetails">
              <div
                dangerouslySetInnerHTML={{ __html: info.specifications.value }}
              />
            </Text>
            <Text code="sub-m" size="small">
              Job Responsibilities
            </Text>
            <Text code="sub-r" size="small" color="b2" className="jobDetails">
              <div
                dangerouslySetInnerHTML={{ __html: info.responsibilites.value }}
              />
            </Text>
            <Box width={mobile ? "100%" : "xsmall"}>
              <Button
                secondary
                label="Apply"
                onClick={() => openForm(info.position.value)}
              />
            </Box>
          </Box>
        </Collapsible>
      </Box>
      {apply && <ApplyJob setApply={setApply} position={position} />}
    </>
  )
}
