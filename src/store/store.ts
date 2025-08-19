import { configureStore } from "@reduxjs/toolkit";
import informacoesGeraisReducer from '../pages/informacoesGerais/feature/informacoesGeraisSlice'
export const store = configureStore({
  reducer: {
    informacoesGerais: informacoesGeraisReducer,
  },
  // middleware e devTools já vêm configurados por padrão
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
