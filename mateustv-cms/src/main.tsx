import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import './style/global.css';
import { createTheme, CssBaseline, ThemeProvider, } from '@mui/material';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{
      main: '#ffffff',
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={ darkTheme}>
  <CssBaseline/>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
)