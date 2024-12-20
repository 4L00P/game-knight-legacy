module.exports = {
  rules: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  } ,
  extends: "airbnb",
plugins: [
  "react",
  "react-hooks/recommended"
]

}
