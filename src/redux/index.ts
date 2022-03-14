import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice'
import { pizzaApi } from './services/pizzaApi'

const RootReducer = combineReducers({
  counterSlice,
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
