import React from "react"
import { Box, Image, Layer, TextArea, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Exit from "../../components/icons/exit"
import { Formik } from "formik"
import Notification from "../notification"
import { RemoveScroll } from "react-remove-scroll"
import submitForm from "../../utils/submitForm"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  const url = "/api/forms/submit/jobApplication"

  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  return (
    <RemoveScroll>
      <Layer
        onClickOutside={() => props.setApply(false)}
        onEsc={() => props.setApply(false)}
        modal={true}
      >
        <Box direction="row">
          <Box pad="24px" gap="small" width={mobile ? "100%" : "50%"}>
            <Box
              direction="row"
              margin={mobile ? { bottom: "large" } : { bottom: "small" }}
            >
              <Heading code={4}>Apply for {props.position}</Heading>
              <ResponsiveContext.Consumer>
                {size =>
                  size === "small" ? (
                    <Box alignContent="end" flex="grow">
                      <Box
                        onClick={() => props.setApply(false)}
                        alignSelf="end"
                      >
                        <Exit />
                      </Box>
                    </Box>
                  ) : null
                }
              </ResponsiveContext.Consumer>
            </Box>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
                driveUrl: "",
                position: props.position,
              }}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                if (await submitForm(values, url)) {
                  setSuccess(true)
                  setSubmitting(false)
                  resetForm()
                } else setError(true)
              }}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <FormField
                    label="Your Name *"
                    placeholder="Jane Doe"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.name}
                    required={true}
                  />
                  <FormField
                    label="Your Email*"
                    placeholder="email@domain.com"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.email}
                    required={true}
                  />
                  <FormField
                    label="Your Phone*"
                    placeholder="9854756256"
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.phone}
                    required={true}
                  />
                  <label
                    style={{
                      fontSize: "14px",
                      lineHeight: "normal",
                    }}
                    htmlFor="message"
                  >
                    Messages (If any)
                  </label>
                  <TextArea
                    placeholder="Input your message"
                    size="small"
                    name="message"
                    style={{ border: "2px solid #EAEAEA" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.message}
                  />
                  <FormField
                    label="Your Resume Link *"
                    placeholder="Google Drive Link"
                    type="text"
                    name="driveUrl"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.driveUrl}
                    required={true}
                  />
                  <input
                    type="hidden"
                    name="position"
                    value={values.position}
                  />
                  <Box pad={{ top: "xsmall" }}>
                    <Button
                      type="submit"
                      alignSelf="start"
                      primary
                      label="Submit"
                      disabled={isSubmitting}
                    />
                  </Box>
                </form>
              )}
            </Formik>
            {success && (
              <Notification
                message="Message Sent Successfully"
                closeMain={setSuccess}
              />
            )}
            {error && (
              <Notification
                message="Could not send message. Please try again!"
                error
                closeMain={setError}
              />
            )}
          </Box>
          {mobile ? null : (
            <Box background="p1-l" width="50%">
              <Box
                style={{ position: "absolute", top: "24px", right: "24px" }}
                onClick={() => props.setApply(false)}
              >
                <Exit />
              </Box>
              <Box height="570px">
                <Image src="/illustrations/guidance form.svg" fit="cover" />
              </Box>
            </Box>
          )}
        </Box>
      </Layer>
    </RemoveScroll>
  )
}
