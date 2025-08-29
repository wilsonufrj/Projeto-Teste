import { configureStore } from "@reduxjs/toolkit";
import informacoesGeraisReducer from '../pages/informacoesGerais/feature/informacoesGeraisSlice'
import newaveReducer from '../pages/newave/feature/newaveSlice'
import gevazpReducer from '../pages/gevazp/feature/gevazpSlice'
import dessemReducer from '../pages/dessem/feature/DessemSlice'

export const store = configureStore({
  reducer: {
    informacoesGerais: informacoesGeraisReducer,
    newave: newaveReducer,
    gevazp: gevazpReducer,
    dessem: dessemReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
