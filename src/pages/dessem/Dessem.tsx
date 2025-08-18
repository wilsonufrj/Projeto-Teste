import { StickySectionNavigator, TitleDescription } from "@cepel/cepel-react-components";
import { Box } from '@mui/material';
import InformacoesIniciais from "./InformacoesIniciais";
import AtualizacaoDeck from "./AtualizacaoDeck";
import Cenarios from "./Cenarios";
import PlanilhaResultado from "./PlanilhaResultados";

const Dessem = ()=>{
    const SECTIONS = [
        { id: 'informacoes-iniciais-section', label: 'Informações iniciais', component:<InformacoesIniciais/> },
        { id: 'arquivo-dadger-section', label: 'Atualiza Deck', component: <AtualizacaoDeck/> },
        { id: 'troca-arquivo-section', label: 'Cenários', component: <Cenarios/> },
        { id: 'planilha-resultado-section', label: 'Planilha de resultados', component: <PlanilhaResultado/> }

    ];

    return(
         <Box margin={5}>
            <Box sx={{ marginBottom: '20px' }}>
                <TitleDescription
                    title="Dessem"
                    description="Preencha as informações que servirão de base para a construção do fluxo de caixa ao 
                    longo do horizonte da análise. A definição dos parâmetros: data inicial do investimento, vida útil, 
                    período de estudo e taxa de desconto são essenciais para a garantir a consistência da análise."
                />
            </Box>

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

export default Dessem;