import React from "react"
import { Image, Box } from "grommet"
import Heading from "../../components/heading"
import SlideSelector from "./slideSelector"
import partnerData from "./partners.json"
import { Link } from "gatsby"

export default ({ name, mobile }) => {
  return (
    <Box>
      <Heading code={2}>{name}</Heading>
      <SlideSelector>
        {partnerData.map((partner, index) => (
          <Box>
            <Box
              round="4px"
              border={{ size: "2px", color: "w2" }}
              pad="xsmall"
              margin={mobile ? { right: "24px" } : { right: "0px" }}
              height="xsmall"
              justify="center"
            >
              <Link to={partner.url}>
                <Image src={partner.image} fill="horizontal" />
              </Link>
            </Box>
          </Box>
        ))}
      </SlideSelector>
    </Box>
  )
}
