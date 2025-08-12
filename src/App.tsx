import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from './components/Button';
import { Box} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './App.css';
import FileUpload from './components/FileUpload/FileUpload';
import type { UploadFile } from './components/FileUpload/fileUploadSlice';
import { type TabComponent } from './components/Tab/Tab';
import Tabs from './components/Tab/Tab';
import InformacoesIniciais from './pages/InformacoesIniciais';
import GerenciadorPL from './pages/GerenciadorPL';
function App() {

  const tabs = [
    {label:"Semanal",component: <h1>Semanal</h1>},
    {label:"Mensal",component:  <h1>Mensal</h1>}
  ] 

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <Stack spacing={2}>
        <Button variant="contained" sx={{ width: '230px' }} >Criar Deck</Button>
        <Button variant="outlined">Outlined</Button>
        <Button disabled endIcon={<ArrowForwardIcon/>}>Prosseguir </Button>
        <Stack direction="row" spacing={2}>
          <Button startIcon={<ArrowBackIcon />} variant="outlined" onClick={()=>console.log("Cliquei em voltar")}sx={{ width: '115px' }} >Voltar</Button>
          <Button endIcon={<ArrowForwardIcon/>} variant="contained" onClick={()=>console.log("Cliquei em avançar")} sx={{ width: '115px' }}>Avançar</Button>
        </Stack>
      </Stack>

      <Stack direction={'row'} sx={{ gap: '60px', width: '100%' }} justifyContent={'center'}>
        <TextField value={value} onChange={setValue} label="1a simulação da S. Sint" />
        <TextField value={value2} onChange={setValue2} label="2a simulação da S. Sint" />
      </Stack>
    */}


      {/* <FileUpload direction='bottom'/> */}

      <Stack>
       <InformacoesIniciais/>
       <GerenciadorPL/>
      </Stack>

    </div>)
}

export default App;
