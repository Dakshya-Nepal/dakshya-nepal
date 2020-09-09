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
        <path d="M3 12H21" stroke="black" stroke-width="2" />
        <path d="M3 6H21" stroke="black" stroke-width="2" />
        <path d="M3 18H21" stroke="black" stroke-width="2" />
      </svg>
    </Blank>
  )
}
