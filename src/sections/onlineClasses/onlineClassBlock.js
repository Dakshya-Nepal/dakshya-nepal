import React from "react"
import { Box } from "grommet"
import Heading from "../../components/heading"
import Text from "../../components/text"
import ChevronDown from "../../components/icons/chevron-down"
import Button from "../../components/button"
import TutorBlock from "./tutorBlock"
import CourseDetail from "./courseDetail"

export default ({ title, tutor, sesh, price, course }) => {
  return (
    <Box round="4px" border={{ color: "w2", size: "2px" }}>
      <Box pad="24px">
        <Heading code={4}>{title}</Heading>
        <TutorBlock
          name={tutor.name}
          image={tutor.image}
          special={tutor.special}
          teaches={tutor.teaches}
        />
        <Box direction="row">
          <Box flex="grow">
            <Text code="subtext-m" size="small" weight={500}>
              {sesh.latest}
              <ChevronDown size="small" color="b1" />
            </Text>
            <Text code="subtext-m" size="small" weight={500} color="h1">
              @{price}/session
            </Text>
          </Box>
          <Button secondary label="Enroll" />
        </Box>
      </Box>
      <Box pad={{ horizontal: "24px", vertical: "16px" }} background="p1-l">
        {course.map((item, index) => (
          <CourseDetail key={index} name={item.name} />
        ))}
      </Box>
    </Box>
  )
}
