import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from './components/Button';
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './App.css';
import TextField from './components/TextField';

function App() {
  const [value, setValue] = useState<string>("")
  const [value2, setValue2] = useState<string>("")

  return (
    <div>
      <Stack spacing={2}>
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
    </div>
  )
}

export default App
