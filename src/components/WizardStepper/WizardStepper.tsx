import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface Step {
  section?: any;
  label: string;
  icon?: React.ReactNode;
  extraSpacing?: boolean;
  colorStep?: string;
}

interface WizardStepperProps {
  steps: Step[];
  contents: React.ReactNode[];
  activeStep: number; // Passa o step ativo
  onStepChange: (step: number) => void; // Callback para alterar o step ativo
  completedSteps?: Record<number, boolean>; // Progresso dos steps
  onStepComplete?: (step: number) => void; // Marca o step como completo
  onBackToSelection?: () => void; // Callback para voltar ao WizardSelectionGrid
  stepValidation?: Record<number, any>; // Validação
  stickyHeader?: boolean; // torna o header fixo 
}

const WizardStepper: React.FC<WizardStepperProps> = ({
  steps,
  contents,
  activeStep,
  onStepChange,
  completedSteps,
  onStepComplete,
  onBackToSelection,
  stepValidation = {},
  stickyHeader = true
}) => {
  const handleNext = () => {
    if (onStepComplete) onStepComplete(activeStep); // Marca o step atual como concluído
    onStepChange(activeStep + 1); // Vai para o próximo step
  };

  const handleBack = () => {
    if (activeStep === 0 && onBackToSelection) {
      onBackToSelection(); // Volta ao WizardSelectionGrid
    } else {
      onStepChange(activeStep - 1); // Volta ao step anterior
    }
  };

  const handleStepClick = (index: number) => {
    onStepChange(index);
  };

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      {/* Stepper Retangular com Linhas */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: stickyHeader ? "sticky" : "relative",
          top: stickyHeader ? '112px' : 'auto',
          zIndex: 99,
          height: "60px"
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={step.label}
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Retângulo do Step */}
            <Box
              onClick={() => handleStepClick(index)}
              sx={{
                position: "relative",
                fontFamily: "Prompt",
                px: 2,
                py: 1,
                minHeight: 39,
                maxWidth: { xs: '120px', sm: '180px', md: '220px', lg: '300px' },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexWrap: "wrap",
                whiteSpace: "normal",
                wordBreak: "normal",
                overflowWrap: "break-word",
                backgroundColor:
                  step.colorStep && (index === steps.length - 1 && activeStep === index)
                    ? "#00A61C"
                    : activeStep === index
                      ? "#0088CC"
                      : "#ABBCC4",
                color: "#fff",
                fontSize: "clamp(12px, 1.5vw, 16px)",
                fontWeight: activeStep === index ? "bold" : "normal",
                borderRadius: 2,
                cursor: "pointer",
                zIndex: 2,
                transition: 'background-color 0.3s ease, color 0.3s ease',
                "&:hover": {
                  backgroundColor: activeStep === index ? "#0088CC" : "#94A3AC",
                },

              }}
            >
              <Box sx={{ textAlign: "center" }}>
                {step.label}
              </Box>
              {step.icon && (
                <Box sx={{ ml: 1 }}>
                  {React.cloneElement(step.icon as React.ReactElement, {
                    fontSize: "small",
                  })}
                </Box>
              )}

              {stepValidation && stepValidation[step.section]?.isValid ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    width: 18,
                    height: 18,
                    backgroundColor: "#00CC44", // verde sucesso
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "bold",
                    zIndex: 3,
                  }}
                >
                  ✓
                </Box>
              ) : stepValidation && stepValidation[step.section]?.errors.length > 0 ? (
                <Box
                  sx={{
                    position: "absolute",
                    top: "-5px",
                    right: "-5px",
                    width: 18,
                    height: 18,
                    backgroundColor: "#FF3B30", // vermelho padrão de erro
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                    zIndex: 3,
                  }}
                >
                  {stepValidation[step.section]?.errors.length}
                </Box>
              ) : null}
            </Box>

            {/* Linha entre Steps */}
            {index < steps.length - 1 && (
              <Box
                sx={{
                  width: steps[index + 1]?.extraSpacing ? 65 : 25,
                  height: 2,
                  backgroundColor: "#ABBCC4",
                  zIndex: 1,
                  marginLeft: "-2px",
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Conteúdo da Etapa */}
      <Box
        sx={{
          mt: 3,
          p: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        {contents[activeStep]}
      </Box>

      {/* Botões de Navegação */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 3,
        }}
      >
        {(onBackToSelection || activeStep != 0) && (
          <Button
            variant="outlined"
            onClick={handleBack}
            size="large"
            sx={{
              color: "#0088CC",
              borderColor: "#0088CC",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ArrowBackIcon fontSize="small" />
            Voltar
          </Button>
        )}
        {activeStep < steps.length - 1 && (
          <Button
            variant="contained"
            onClick={handleNext}
            size="large"
            sx={{
              backgroundColor: "#0088CC",
              color: "#fff",
              textTransform: "none",
              fontWeight: "bold",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#0077BB",
              },
            }}
          >
            Avançar
            <ArrowForwardIcon fontSize="small" />
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default WizardStepper;