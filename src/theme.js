import { createMuiTheme } from "@material-ui/core/styles";
import Colors from "./constants/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.primary,
      contrastText: Colors.white,
    },
    secondary: {
      main: Colors.secondary,
      contrastText: Colors.white,
    },

    white: {
      main: Colors.white,
    },
    black: {
      main: Colors.black,
    },
    light: {
      main: Colors.light,
    },
    dark: {
      main: Colors.dark,
    },

    background: {
      default: Colors.black,
    },
    text: { primary: "#1E1E2D", secondary: "#707070" },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),

    button: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },

    subtitle1: {
      fontSize: "1rem",
      fontWeight: 800,
    },

    body1: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },

    h1: {
      fontWeight: 900,
    },

    h2: {
      fontWeight: 900,
    },

    h3: {
      fontSize: "2.125rem",
      fontWeight: 500,
    },

    h4: {
      fontWeight: 900,
    },

    h5: {
      fontWeight: 900,
      color: "#1F1F1F",
    },

    h6: {
      fontWeight: 700,
    },
  },
  overrides: {
    MuiButton: {
      sizeSmall: {
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 5,
        paddingRight: 5,
        minWidth: 90,
        borderRadius: 100,
      },
      sizeLarge: {
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: "2rem",
        paddingRight: "2rem",
        minWidth: 200,
        borderRadius: 100,
      },
      contained: {
        padding: ".625rem 2rem",
        boxShadow: "none",
        // borderRadius: 5,
        fontSize: ".75rem",
        borderRadius: 100,
        minWidth: 130,
      },
      outlined: {
        padding: ".625rem 2rem",
        boxShadow: "none",
        // borderRadius: 5,
        fontSize: ".75rem",
        minWidth: 130,
        borderRadius: 100,
      },
    },
    MuiInputBase: {
      input: {
        fontWeight: 400,
      },
      root: {
        minWidth: 130,
      },
    },
    MuiChip: {
      root: {
        minWidth: 80,
        color: "#fff !important",
        backgroundColor: Colors.very_light_grey,
      },
    },
  },
});

export default theme;
