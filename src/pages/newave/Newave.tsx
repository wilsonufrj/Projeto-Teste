import { Box } from '@mui/material';
import { StickySectionNavigator, TitleDescription } from '@cepel/cepel-react-components';
import InformacoesIniciais from './InformacoesIniciais';
import GerenciadorPL from './GerenciadorPL';
import PlanilhaResultado from './PlanilhaResultados';
import TendenciaHidrologia from './TendenciaHidrologica';
import TrocaArquivos from './TrocaArquivos';
import TrocaVersoes from './TrocaVersoes';
import ViradaAnos from './ViradaAnos';



const Newave = () => {

    const SECTIONS = [
        { id: 'informacoes-iniciais-section', label: 'Informações iniciais', component: <InformacoesIniciais /> },
        {
            id: 'gerenciador-pl-section', label: 'Gerenciador de PL', component: <GerenciadorPL />
        },
        { id: 'troca-arquivo-section', label: 'Troca de arquivos', component: <TrocaArquivos /> },
        { id: 'troca-versao-section', label: 'Troca de versoes', component: <TrocaVersoes /> },
        { id: 'virada-anos-section', label: 'Virada de anos', component: <ViradaAnos /> },
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
    );
}