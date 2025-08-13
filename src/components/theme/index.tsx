
import React from "react"

import { ReactNode } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import palette from "./pallete"
import typography from "./typography"

interface ThemeProviderProps {
  children: ReactNode
}

const theme = createTheme({
  palette,
  typography,
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Prompt", "Helvetica", sans-serif',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Prompt", "Helvetica", sans-serif',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#0088cc",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          textTransform: "none",
          fontWeight: 400,
          "&.Mui-selected": {
            fontWeight: 700,
            color: "#0088cc",
          },
        },
      },
    },
  },
})

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
