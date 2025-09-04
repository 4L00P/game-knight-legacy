# NOTES 9-4-25 #
`Completed`
Made a sample component using the Date Time Picker and the Time Picker
Rendered it to the GameNights.jsx page (inside views dir)

Figured out what was breaking the build after tryna add BarChart 
It was a webpack config issue. Needed to add:

  {
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  }

Made a sample BarChart in AvailabilityChart.jsx (took from MUI docs) and imported it into GameNights.jsx

`Steps to do next`

Make a Mongoose schema to add availability data from the user
- need: date, time start, time end, name (to display on the chart)

Make backend routing and CRUD operations for the availability

