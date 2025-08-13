import "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    neutrals: {
      600: string
      100?: string
      200?: string
      300?: string
      400?: string
      500?: string
      700?: string
      800?: string
      900?: string
      1000?: string
    }
    base: {
      white: string
      black: string
    }
    primaryColors: {
      azul: string
      azul100: string
      azul200: string
      azul300: string
      azul400: string
      azul500: string
      azul600: string
      azul700: string
      azul800: string
      azul900: string
      azul1000: string
    }
    secondaryColors: {
      green: string
      green100: string
      green200: string
      green300: string
      green400: string
      green500: string
      green600: string
      green700: string
      green800: string
      green900: string
      green1000: string
    }
    successColors: {
      success100: string
      success200: string
      success300: string
    }
    warningColors: {
      warning100: string
      warning200: string
      warning300: string
    }
    errorColors: {
      error100: string
      error200: string
      error300: string
    }
    information: {
      main: string
      information100: string
      information200: string
      information300: string
    }
    contraste: {
      main: string
      contraste100: string
    }
  }

  interface PaletteOptions {
    neutrals?: {
      600: string
      100?: string
      200?: string
      300?: string
      400?: string
      500?: string
      700?: string
      800?: string
      900?: string
      1000?: string
    }
    base?: {
      white: string
      black: string
    }
    primaryColors?: {
      azul: string
      azul100: string
      azul200: string
      azul300: string
      azul400: string
      azul500: string
      azul600: string
      azul700: string
      azul800: string
      azul900: string
      azul1000: string
    }
    secondaryColors?: {
      green: string
      green100: string
      green200: string
      green300: string
      green400: string
      green500: string
      green600: string
      green700: string
      green800: string
      green900: string
      green1000: string
    }
    successColors?: {
      success100: string
      success200: string
      success300: string
    }
    warningColors?: {
      warning100: string
      warning200: string
      warning300: string
    }
    errorColors?: {
      error100: string
      error200: string
      error300: string
    }
    information?: {
      main: string
      information100: string
      information200: string
      information300: string
    }
    contraste?: {
      main: string
      contraste100: string
    }
  }
}
