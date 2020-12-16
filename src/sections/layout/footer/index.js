import React from "react"
import { Box, Image, ResponsiveContext } from "grommet"

import LogoHoriWhite from "../../../images/logo-horizontal-white.svg"
import Facebook from "../../../components/icons/facebook"
import Instagram from "../../../components/icons/instagram"
import Twitter from "../../../components/icons/twitter"
import LinkedIn from "../../../components/icons/linkedin"
import Text from "../../../components/text"
import Call from "../../../components/icons/call"
import Email from "../../../components/icons/email"
import Location from "../../../components/icons/location"

import footerMenu1 from "./footerMenu1.json"
import footerMenu2 from "./footerMenu2.json"
import Footer from "./footer"
import InfoBlock from "./infoBlock"
import FooterBlock from "./footerBlock"
import CollapsibleMenu from "./collapsibleMenu"
import MapBox from "../../mapBox"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Footer>
      <Box
        direction="column"
        gap="medium"
        style={mobile ? { order: "4" } : null}
        margin={mobile ? { top: "large" } : null}
        flex="grow"
      >
        <Box>
          <Image src={LogoHoriWhite} alignSelf="start" />
        </Box>
        <Box direction="row" gap="small">
          <a
            href="https://www.facebook.com/dakshyanepal"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <Twitter />
          <a
            href="https://www.instagram.com/dakshyanepal/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/company/dakshya-nepal/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </Box>
        <Text color="g1" code="subtext-r" size="small">
          #सक्षमनेपाल
        </Text>
        <Box direction="column" gap="small">
          <Text code="subtext-r" color="g1" size="small">
            Legal . Paperwork . Advertisement
          </Text>
          <Text code="subtext-r" color="g1" size="small">
            All rights reserved Dakshya Nepal 2020
          </Text>
        </Box>
      </Box>
      <CollapsibleMenu name="Products" items={footerMenu1} />
      <CollapsibleMenu name="Company" items={footerMenu2} active />
      <FooterBlock name="Contact">
        <Box height="80px" width="326px" overflow="hidden">
          <MapBox />
        </Box>
        <Box direction="column" gap="small">
          <InfoBlock text="+977 9802302101" icon={<Call color="b2" />} />
          <InfoBlock
            text="info@dakshyanepal.com "
            icon={<Email color="b2" />}
          />
          <InfoBlock
            text="TG Complex, Koteshwor, Kathmandu, Nepal"
            icon={<Location color="b2" />}
          />
        </Box>
      </FooterBlock>
    </Footer>
  )
}
