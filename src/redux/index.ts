import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { pizzaApi } from './services/pizzaApi'
import pizzaSlice from './slices/pizzaSlice'

const RootReducer = combineReducers({
  pizzaSlice,
})

export const store = configureStore({
  reducer: {
    RootReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(pizzaApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store
