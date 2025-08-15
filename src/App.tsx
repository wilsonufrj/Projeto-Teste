import { useState } from 'react';
import InformacoesGerais from './pages/informacoesGerais/InformacoesGerais';
import Newave from './pages/newave/Newave';
import { Tab, DateRange } from '@cepel/cepel-react-components'
import { Box } from '@mui/material';
import Gevazp from './pages/gevazp/Gevazp';
import Decomp from './pages/decomp/Decomp';

function App() {
  const tabsItens = [
    { label: "Test1", component: <h1>Teste 1</h1> },
    { label: "Test2", component: <h1>Teste 2</h1> }
  ];
 const handleDateChange = (start: Date | null, end: Date | null) => {
        console.log("Data inicial:", start);
        console.log("Data final:", end);
    };
  return (
    <Box sx={{margin:'5px'}}>
      {/* <InformacoesGerais /> */}
      {/* <Newave/> */}
      {/* <Gevazp/> */}
      <Decomp/>
      {/* <DateRange
            title="Selecione o Horizonte"
            defaultValues={{ startDate: null, endDate: null }}
            onDateChange={handleDateChange}
            minDate={new Date(2023, 0, 1)}
            maxDate={new Date(2025, 11, 31)}
            message="Escolha um intervalo entre as datas disponíveis"
            titlePosition='top'
        /> */}
    </Box>
  )
}

export default App;
