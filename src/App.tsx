import InformacoesIniciais from './pages/InformacoesIniciais';
import GerenciadorPL from './pages/GerenciadorPL';
import StickySectionNavigator from './components/StickySectionNavigator/StickySectionNavigator';
import TitleDescription from './components/TitleDescription/TitleDescription';
import { Box } from '@mui/material';
import TrocaArquivos from './pages/TrocaArquivos';
import TendenciaHidrologia from './pages/TendenciaHidrologica';
import PlanilhaResultado from './pages/PlanilhaResultados';
function App() {
  const SECTIONS = [
    { id: 'informacoes-iniciais-section', label: 'Informações iniciais', component: <InformacoesIniciais /> },
    {
      id: 'gerenciador-pl-section', label: 'Gerenciador de PL', component: <GerenciadorPL />
    },
    { id: 'troca-versao-section', label: 'Troca de versão', component: <TrocaArquivos /> },
    { id: 'virada-anos-section', label: 'Virada de anos', component: <></> },
    { id: 'tendencia-hidrologica-section', label: 'Tendência hidrológica', component: <TendenciaHidrologia /> },
    { id: 'planilhas-resultados-section', label: 'Planilhas de resultados', component: <PlanilhaResultado /> },
  ];
  return (
    <Box margin={10} padding={10}>
      <Box sx={{ marginBottom: '20px' }}>
        <TitleDescription
          title="NEWAVE"
          description="Preencha as informações que servirão de base para a construção do fluxo de caixa ao 
                    longo do horizonte da análise. A definição dos parâmetros: data inicial do investimento, vida útil, 
                    período de estudo e taxa de desconto são essenciais para a garantir a consistência da análise."
        />
      </Box>

      {/* Menu Lateral */}
      <StickySectionNavigator
        sections={SECTIONS.map(({ id, label }) => ({ id, label }))}
      >
        {SECTIONS.map(({ id, component }) => (
          <Box key={id} id={id} sx={{ mb: 4 }}>
            {component}
          </Box>
        ))}
      </StickySectionNavigator>

    </Box>
  )
}

export default App;
