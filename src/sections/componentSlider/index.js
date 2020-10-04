import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../../styles/custom-slick-component.css"

export default props => {
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "16px",
    className: "component-slide",
  }

  return (
    <ResponsiveContext.Consumer>
      {size =>
        size === "small" ? (
          <Box {...props}>
            <Slider {...props} {...settings}>
              {props.children}
            </Slider>
          </Box>
        ) : (
          <Box
            {...props}
            direction="row"
            gap="medium"
            pad={{ horizontal: "131.5px" }}
          >
            {props.children}
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
  )
}
