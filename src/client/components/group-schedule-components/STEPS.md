# NOTES 9-5-25 #

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
Made a Mongoose schema to add availability data from the user
- need: date, time start, time end, name (to display on the chart)
Made backend routing 

`Steps to do next`
Make sample data to test front end display

bar charts:
- contain a data property that will hold an array of values
- can specify bar ticks with xAxis prop
- series contains the points of data


Make CRUD operations for the availability on back end

