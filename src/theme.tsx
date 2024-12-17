import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#fff149" },
    secondary : purple
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1rem",
    },
  },
});

export default theme;