import React from "react"
import { Link } from "gatsby"
import { Box, Grid, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import Button from "../../components/button"
import BlogCard from "./blogCard"
import ComponentSlider from "../componentSlider"
import BlogCardLoading from "../../components/blogCardLoading"

export default ({ loading, title, url, data }) => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  return (
    <Box>
      <Box
        pad={
          mobile
            ? { top: "28px", horizontal: "16px" }
            : { top: "40px", horizontal: "131px" }
        }
      >
        <Box direction="row">
          <Heading code={2}>{title}</Heading>
          <Box flex="grow">
            {url ? (
              <Box alignSelf="end">
                <Link to={url}>
                  <Button secondary label="view all" />
                </Link>
              </Box>
            ) : null}
          </Box>
        </Box>
        {loading ? (
          <Grid
            margin={mobile ? { top: "16px" } : { top: "48px" }}
            columns={mobile ? "100%" : "31%"}
            gap="small"
          >
            {mobile ? (
              <BlogCardLoading />
            ) : (
              [22, 66, 99].map(index => <BlogCardLoading key={index} />)
            )}
          </Grid>
        ) : null}
      </Box>
      <ComponentSlider
        margin={mobile ? { top: "16px" } : { top: "48px" }}
        gap="small"
      >
        {data.map((post, index) => (
          <BlogCard
            key={index}
            category={post.category}
            mobile={mobile}
            title={post.title}
            image={post.coverImage.path}
            minRead={post.timeToRead}
            link={`/blog/${post.slug}`}
          />
        ))}
      </ComponentSlider>
    </Box>
  )
}
