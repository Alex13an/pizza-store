import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { ICartPizza } from '../../models/pizzaTypes'

interface PizzaState {
  cartPizzas: ICartPizza[]
  cartNetWorth: number
  cartPizzasAmount: number
}

const initialState: PizzaState = {
  cartPizzas: [] as ICartPizza[],
  cartNetWorth: 0,
  cartPizzasAmount: 0,
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    cartAdd: (state, action: PayloadAction<ICartPizza>) => {
      const { id, currentSize, currentType, currentAmount } = action.payload
      const match = state.cartPizzas.findIndex(pizza => {
        return (
          pizza.id === id && pizza.currentSize === currentSize && pizza.currentType === currentType
        )
      })
      if (match >= 0) {
        state.cartPizzas[match].currentAmount += currentAmount
      } else {
        state.cartPizzas.push(action.payload)
      }
      state.cartNetWorth += action.payload.currentPrice
      state.cartPizzasAmount += 1
    },

    cartRemove: (state, action: PayloadAction<ICartPizza>) => {
      state.cartNetWorth -= action.payload.currentPrice
      state.cartPizzas = [
        ...state.cartPizzas.filter(
          pizza =>
            pizza.name !== action.payload.name &&
            pizza.currentType !== action.payload.currentType &&
            pizza.currentSize !== action.payload.currentSize,
        ),
      ]
    },
  },
})

export const { cartAdd, cartRemove } = pizzaSlice.actions

export const selectPizzaCart = (state: RootState) => state.RootReducer.pizzaSlice

export default pizzaSlice.reducer
