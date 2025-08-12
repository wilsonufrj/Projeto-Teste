import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0088CC',  //Azul Xlibs
      dark: '#1565c0',
      light: '#FAFAFA',
      contrastText:'#eceff1'
    },
    secondary: {
      main: '#9c27b0', // Roxo padrão
    },
    error: {
      main: '#d32f2f', // Vermelho para erros
    },
    background: {
      default: '#f5f5f5', // Cor de fundo padrão
      paper: '#ffffff',
    },
    action: {
      disabledBackground: '#BAC8CE', // Fundo desativado
      disabled: '#ffffff', // Cor do texto desativado   
    },
    text: {
      primary: '#000000', // Preto para texto primário
      secondary: '#757575',
    },
    grey: {
      100: '#8DA3AE',
      300: '#8EA4AF',
      500:'#637883'
    }
  },
  typography: {
    fontFamily: '"Prompt"', // Fonte padrão
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none', // Remove uppercase dos botões
    },
  },
  spacing: 8, // Valor base do espaçamento (8px)
  shape: {
    borderRadius: 4, // Border radius padrão
  },
});

export default theme;