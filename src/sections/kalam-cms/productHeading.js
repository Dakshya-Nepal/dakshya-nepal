import React from "react"
import Heading from "../../components/heading"
import { Box, ResponsiveContext } from "grommet"
import Text from "../../components/text"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  return (
    <Box
      pad={
        mobile
          ? { top: "49px", horizontal: "16px" }
          : { top: "31px", horizontal: "131px" }
      }
    >
      <Heading code={2}>
        Create, Manage, Modify and Publish your website with a powerful CMS
      </Heading>
      <Text margin={{ top: "16px" }} color="b2" code="sub-r">
        Dakshya CMS (Content Management System) is a website that comes with a
        dashboard/admin panel from where contents for the website can easily be
        updated. Dakshya CMS is meant for anyone including schools, colleges,
        media organizations, bloggers, etc.
      </Text>
    </Box>
  )
}
