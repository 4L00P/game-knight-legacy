import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  // Affects the color scheme of the site
  palette: {
    primary: {
      main: '#A523A5',
      /**
       * Other Color Tokens:
       *  - light
       *  - dark
       *  - contrastText
       */
    },
    secondary: {
      main: '#24B478',
    },
    /**
     * Other Default Colors:
     *  - error
     *  - warning
     *  - info
     *  - success
     *
     * You may also provide custom colors using names different from the default names
     *  - Eg. purple, blue, magenta
     *  - Use: color="customColor" on the component you want to affect
     */
  },
  // Affects Typography throughout the site
  typography: {
    // fontFamily: `font`,`font`,`font`
    // fontSize: 16,
    /**
     * Typography variants can be customized individually:
     *  - h1
     *  - h2
     *  - h3
     *  - h4
     *  - h5
     *  - h6
     *  - subtitle1
     *  - subtitle2
     *  - body1
     *  - body2
     *  - button
     *  - caption
     *  - overline
     */
  },
  // Helper to create consistent spacing between the elements of the UI
  spacing: 8, // 8px?
  /**
   * Ways to change the spacing transformation (not 100% how to use these transformations):
   *  - A number => 4
   *    - theme.spacing(2) = `${4 * 2}px` = '8px'
   *
   *  - A function => (factor) => `${0.25 * factor}rem` // Bootstrap Strategy
   *    - theme.spacing(2) = (0.25 * 2)rem = 0.5rem = 8px
   *
   *  - An array => [0, 4, 8, 16, 32, 64]
   *    - theme.spacing(2) = '8px'
   *    - theme.spacing(4) = '32px'
   */
  components: {
    /**
     * Used to customize a component's styles, default props, and more by using
     * its component key inside the theme.
     */
  },
});

export default appTheme;
