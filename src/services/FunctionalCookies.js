const returnCookie = str =>
  str
    .trim()
    .split("=")
    .reduce((name, value) =>
      ({ name: name, value: value }))

const getCookie = name =>
  decodeURIComponent(document.cookie)
    .split(";")
    .reduce((cookie, str) =>
      str.includes(name + "=") ? returnCookie(str) : {}
    , {})

export default getCookie