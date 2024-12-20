module.exports = {
  rules: {},
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  } ,
  extends: ["airbnb", "airbnb/hooks"],
plugins: [
  "react",
  "react-hooks/recommended"
]

}
