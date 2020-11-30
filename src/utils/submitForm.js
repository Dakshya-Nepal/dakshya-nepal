export default async (values, url) => {
  const finalUrl =
    process.env.GATSBY_PROXY_URL + process.env.GATSBY_API_URL + url

  const response = await fetch(finalUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cockpit-Token": process.env.GATSBY_API_FORM,
    },
    body: JSON.stringify({ form: values }),
  })
  return response.ok
}
