import { createTheme } from "@mui/material";






export const theme=createTheme({
    palette: {
     primary: {
         main: "#47663B", // Green color for primary elements
         contrastText: "#ffffff", // Text color on primary background
      },
      secondary: {
        main: "#ff5722", // Orange for secondary elements
      },
      background: {
        default: "#f5f5f5", // Light gray background for the app
      },
    }
})


 