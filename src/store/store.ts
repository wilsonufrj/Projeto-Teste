import { configureStore } from "@reduxjs/toolkit";
import informacoesGeraisReducer from '../pages/informacoesGerais/feature/informacoesGeraisSlice'
import newaveReducer from '../pages/newave/feature/newaveSlice'

export const store = configureStore({
  reducer: {
    informacoesGerais: informacoesGeraisReducer,
    newave: newaveReducer,
  },
  // middleware e devTools já vêm configurados por padrão
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
