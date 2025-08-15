import { StickySectionNavigator, TitleDescription } from '@cepel/cepel-react-components';
import { Box } from '@mui/material';
import InformacoesGerais from './InformacoesIniciais';

const Decomp = ()=>{

    const SECTIONS = [
        { id: 'informacoes-iniciais-section', label: 'Informações iniciais', component: <InformacoesGerais/> },
        { id: 'troca-arquivo-section', label: 'Troca de arquivo', component: null },
        { id: 'troca-versoes-section', label: 'Troca de versão', component: null },
        { id: 'planilha-resultado-section', label: 'Planilha de resultados', component: null }

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

export default Decomp;