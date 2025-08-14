import { StickySectionNavigator, TitleDescription } from '@cepel/cepel-react-components';
import { Box } from '@mui/material';
import EncadeamentoSemanal from './EncadeamentoSemanal';

const InformacoesGerais = () => {

    const SECTIONS = [
        { id: 'encadeamento-semanal-section', label: 'Encadeamento semanal', component: <EncadeamentoSemanal /> },
        {
            id: 'limites-pld-section', label: 'Limites PLD', component: <></>
        },
        { id: 'ajuste-armazenamento-final-section', label: 'Ajuste de armazenamento final', component: <></> },
        { id: 'estudo-restart-section', label: 'Estudo de restart', component: <></> }

    ];

    return (
        <Box margin={10} padding={10}>
            <Box sx={{ marginBottom: '20px' }}>
                <TitleDescription
                    title="Informações Gerais"
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

export default InformacoesGerais;