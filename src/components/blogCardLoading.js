import React from "react"
import { Box } from "grommet"
import Skeleton from "react-loading-skeleton"

export default () => {
  return (
    <Box border={{ size: "2px" }} height="auto" width="100%">
      <Box height="small">
        <Skeleton height={190} circle={false} />
      </Box>
      <Box pad="small">
        <Box direction="row" width="100%">
          <Box>
            <Skeleton width={90} />
          </Box>
          <Box flex="grow" align="end">
            <Skeleton width={90} />
          </Box>
        </Box>
        <Skeleton />
        <Skeleton width={90} />
      </Box>
    </Box>
  )
}
