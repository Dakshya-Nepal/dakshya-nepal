import React from "react"
import { Box, ResponsiveContext, Image } from "grommet"
import submitForm from "../../utils/submitForm"
import Heading from "../../components/heading"
import FormSideImage from "../../../static/illustrations/Guidance Counseling.svg"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Text from "../../components/text"
import { Formik, Field } from "formik"
import Notification from "../notification"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"
  const url = "/api/forms/submit/guidanceCounseling"

  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  return (
    <Box
      pad={
        mobile
          ? { top: "64px", horizontal: "16px" }
          : { top: "90px", horizontal: "131.5px" }
      }
      gap="medium"
    >
      <Box
        direction={mobile ? "column" : "row"}
        justify="between"
        alignContent="center"
        gap="small"
      >
        <Heading code={2}>
          Lets start learning with Guidance Counseling sessions
        </Heading>
        <Box background="h1" pad="16px" round={{ size: "8px" }}>
          <Heading code={4} color="#ffffff" size="small" alignSelf="center">
            First Session On Us!
          </Heading>
        </Box>
      </Box>
      <Formik
        initialValues={{
          name: "",
          address: "",
          phone: "",
          school: "",
          problems: "",
          type: "",
          nature: "",
          available: "",
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
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              direction="row"
              border={{ color: "w2", size: "2px" }}
              round="8px"
            >
              <Box width={mobile ? "100%" : "50%"} pad="16px" gap="medium">
                <Box gap="small">
                  <Box gap="xsmall">
                    <Text size="small">Need guidance as</Text>
                    <Field name="type" as="select">
                      <option value="" disabled selected hidden>
                        Select one
                      </option>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                    </Field>
                  </Box>
                  <FormField
                    label="Your Name *"
                    placeholder="Input your name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.name}
                    required="true"
                  />
                  <FormField
                    label="Address"
                    placeholder="Your Address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.address}
                  />
                  <FormField
                    label="Contact Number *"
                    name="phone"
                    type="text"
                    placeholder="Input your phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.phone}
                    required="true"
                  />
                  <FormField
                    label="School Name"
                    placeholder="Your school name as applicable"
                    name="school"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.school}
                  />
                  <Box gap="xsmall">
                    <Text size="small">
                      Nature of Counseling you are seeking
                    </Text>
                    <Field name="nature" as="select">
                      <option value="" disabled selected hidden>
                        Select one
                      </option>
                      <option value="Academics">Academics</option>
                      <option value="Relationship">Relationship</option>
                      <option value="Others">Social Life, others</option>
                    </Field>
                  </Box>
                  <FormField
                    label="Describe the hardships you are facing in few words"
                    placeholder="Your hardships"
                    name="problems"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.problems}
                  />
                  <Box gap="xsmall">
                    <Text size="small">Available for Counseling via</Text>
                    <Field name="available" as="select">
                      <option value="" disabled selected hidden>
                        Select one
                      </option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="Video Call">Video Call</option>
                    </Field>
                  </Box>
                </Box>
                <Box width={mobile ? "100%" : "small"}>
                  <Button
                    primary
                    label="Book Your Session"
                    disabled={isSubmitting}
                    type="submit"
                  />
                </Box>
              </Box>
              <Box
                width={mobile ? "0%" : "50%"}
                background="p1-l"
                alignContent="end"
                justify="end"
              >
                <Image src={FormSideImage} fill="horizontal" />
              </Box>
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
  )
}
