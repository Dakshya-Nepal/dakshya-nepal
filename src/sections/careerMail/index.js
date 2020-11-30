import React from "react"
import { Box, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Button from "../../components/button"
import { Formik } from "formik"
import Notification from "../notification"
import submitForm from "../../utils/submitForm"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  const url = "/api/forms/submit/emailSubscriber"

  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  return (
    <Box
      pad={
        mobile
          ? { horizontal: "16px", vertical: "58px" }
          : { horizontal: "131px", vertical: "90px" }
      }
    >
      <Heading code={2}>Can’t find what you do?</Heading>
      <Box
        margin={{ top: "32px" }}
        pad="24px"
        direction={mobile ? "column" : "row"}
        border={{ size: "2px", color: "w2" }}
        round="8px"
        gap="large"
      >
        <Box width={mobile ? "100%" : "28%"}>
          <Heading code={4}>
            get a reminder for these positions if they are open again.
          </Heading>
        </Box>
        <Box flex="grow">
          <Formik
            initialValues={{
              email: "",
              position: "",
              for: "Job Updates",
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
                <Box direction={mobile ? "column" : "row"} gap="small">
                  <FormField
                    placeholder="Enter a position"
                    flex="grow"
                    name="position"
                    required={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.position}
                  />
                  <FormField
                    placeholder="Your E-mail"
                    flex="grow"
                    name="email"
                    required={true}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.email}
                  />
                  <Button
                    primary
                    disabled={isSubmitting}
                    label="Remind Me"
                    type="submit"
                  />
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
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
  )
}
