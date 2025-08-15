import { StickySectionNavigator, TitleDescription } from '@cepel/cepel-react-components';
import { Box } from '@mui/material';
import InformacoesIniciais from './InformacoesIniciais';
import TrocaVersoes from './TrocaVersoes';
import InformacoesPrevisoes from './InformacoesPrevisoes';


const Gevazp = ()=>{

    const SECTIONS = [
        { id: 'informacoes-iniciais-section', label: 'Informações iniciais', component: <InformacoesIniciais /> },
        { id: 'troca-versoes-section', label: 'Troca de versões', component: <TrocaVersoes/> },
        { id: 'informacoes-previsoes-section', label: 'Informações de previsões', component: <InformacoesPrevisoes/> }

    ];

    return(
         <Box margin={5}>
            <Box sx={{ marginBottom: '20px' }}>
                <TitleDescription
                    title="Gevazp"
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
                    <Box key={id} id={id} sx={{ marginBottom: '116px' }}>
                        {component}
                    </Box>
                ))}
            </StickySectionNavigator>

        </Box>
    )
}

export default Gevazp;