import React from "react"
import { Box, Image, Layer, TextArea, ResponsiveContext } from "grommet"
import Heading from "../../components/heading"
import FormField from "../../components/formField"
import Button from "../../components/button"
import Exit from "../../components/icons/exit"
import { Field, Formik } from "formik"
import Notification from "../notification"
import Text from "../../components/text"
import { RemoveScroll } from "react-remove-scroll"
import submitForm from "../../utils/submitForm"

export default props => {
  const mobile = React.useContext(ResponsiveContext) === "small"

  const url = "/api/forms/submit/applyConsultant"

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
          <Box
            pad="24px"
            gap="small"
            width={mobile ? "100%" : "60%"}
            height="560px"
            overflow="auto"
          >
            <Box
              direction="row"
              margin={mobile ? { bottom: "small" } : { bottom: "large" }}
            >
              <Heading code={4}>Apply for counselor</Heading>
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
                gender: "",
                email: "",
                phone: "",
                address: "",
                qualification: "",
                specialization: "",
                training: "",
                occupation: "",
                whyAssociate: "",
                position: "Consultant",
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
                  <Box gap="xsmall">
                    <Text size="small">Gender</Text>
                    <Field name="gender" as="select">
                      <option value="" disabled selected hidden>
                        Select one
                      </option>
                      <option value="Academics">Male</option>
                      <option value="Relationship">Female</option>
                      <option value="Others">Others</option>
                    </Field>
                  </Box>
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
                    label="Contact Number"
                    placeholder="9876564123"
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
                    htmlFor="address"
                  >
                    Address
                  </label>
                  <TextArea
                    placeholder="Input your address"
                    size="small"
                    name="address"
                    style={{ border: "2px solid #EAEAEA" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.address}
                  />
                  <FormField
                    label="Education Qualification"
                    placeholder="Undergraduate"
                    type="text"
                    name="qualification"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.qualification}
                    required={true}
                  />
                  <FormField
                    label="Any Specialization In Counseling"
                    placeholder="Training"
                    type="text"
                    name="specialization"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.specialization}
                    required={true}
                  />
                  <FormField
                    label="Counseling Or Related Subjects Training Or Courses"
                    placeholder="Your Training"
                    type="text"
                    name="training"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.training}
                    required={true}
                  />
                  <FormField
                    label="Current Occupation"
                    placeholder="Your Occupation"
                    type="text"
                    name="occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.occupation}
                    required={true}
                  />
                  <label
                    style={{
                      fontSize: "14px",
                      lineHeight: "normal",
                    }}
                    htmlFor="dakshya"
                  >
                    Why do you want to associate with Dakshya Nepal?
                  </label>
                  <TextArea
                    placeholder="Input your answer"
                    size="small"
                    name="whyAssociate"
                    style={{ border: "2px solid #EAEAEA" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.whyAssociate}
                  />
                  <input
                    type="hidden"
                    name="position"
                    value={values.position}
                  />
                  <Box pad={{ top: "small" }}>
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
