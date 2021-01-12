import React from "react"
import { Image, Box } from "grommet"
import Heading from "../../components/heading"
import SlideSelector from "./slideSelector"
import partnerData from "./partners.json"
import clientData from "./clients.json"

export default ({ name, mobile }) => {
  const Data = name === "clientele" ? clientData : partnerData
  return (
    <Box width={mobile ? "100%" : name === "clientele" ? "60%":"40%"}>
      <Heading code={2}>{name}</Heading>
      <SlideSelector>
        {Data.map((item, index) => (
          <Box>
            <Box
              round="4px"
              border={{ size: "2px", color: "w2" }}
              pad="xsmall"
              margin={mobile ? { right: "24px" } : { right: "0px" }}
              height="xsmall"
              width="xsmall"
              justify="center"
            >
              <a href={item.url}>
                <Image src={item.image} fill="horizontal" />
              </a>
            </Box>
          </Box>
        ))}
      </SlideSelector>
    </Box>
  )
}
