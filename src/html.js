import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          id="___loader"
          key={`loader`}
          style={{
            alignItems: "start",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              paddingTop: "5%",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <img src="/images/logo-loading.svg" alt="dakshya nepal logo" />
            <img src="/images/Dakshya nepal loader.gif" alt="loading bar" />
          </div>
        </div>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `  
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              
              (function () {
                var s1 = document.createElement("script"),
                  s0 = document.getElementsByTagName("script")[0]
                s1.async = true
                s1.src = "https://embed.tawk.to/5f9a779f7f0a8e57c2d81cb4/default"
                s1.charset = "UTF-8"
                s1.setAttribute("crossorigin", "*")
                s0.parentNode.insertBefore(s1, s0)
              })()
            `,
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
