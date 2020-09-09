import React from "react"
import { Blank } from "grommet-icons"

export default props => {
  return (
    <Blank {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4L4 20"
          stroke="black"
          stroke-width="2"
          stroke-linecap="square"
        />
        <path
          d="M4 4L20 20"
          stroke="black"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>
    </Blank>
  )
}
