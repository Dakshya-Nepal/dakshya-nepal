import React from "react"
import Slider from "react-slick"
import "../../styles/custom-text-slick.css"

export default ({ textList }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: "38px",
    autoplaySpeed: 1500,
    slidesToScroll: 1,
    vertical: true,
    adaptiveHeight: true,
    variableWidth: false,
    verticalSwiping: true,
    className: "text-slide",
  }
  return (
    <Slider {...settings}>
      {textList.map((data, index) => (
        <h2 key={index}>{data}</h2>
      ))}
    </Slider>
  )
}
