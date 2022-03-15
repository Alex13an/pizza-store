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
      const { id, currentSize, currentType } = action.payload
      const match = state.cartPizzas.findIndex(pizza => {
        return (
          pizza.id === id && pizza.currentSize === currentSize && pizza.currentType === currentType
        )
      })
      if (match >= 0) {
        state.cartPizzas[match].currentAmount += 1
      } else {
        state.cartPizzas.push(action.payload)
      }
      state.cartNetWorth += action.payload.currentPrice
      state.cartPizzasAmount += 1
    },

    cartDelete: (state, action: PayloadAction<ICartPizza>) => {
      const { id, currentAmount, currentPrice, currentSize, currentType } = action.payload
      const match = state.cartPizzas.findIndex(pizza => {
        return (
          pizza.id === id && pizza.currentSize === currentSize && pizza.currentType === currentType
        )
      })
      if (match < 0) return
      state.cartNetWorth -= currentPrice * currentAmount
      state.cartPizzasAmount -= currentAmount
      state.cartPizzas.splice(match, 1)
    },

    cartRemove: (state, action: PayloadAction<ICartPizza>) => {
      const { id, currentSize, currentType } = action.payload
      const match = state.cartPizzas.findIndex(pizza => {
        return (
          pizza.id === id && pizza.currentSize === currentSize && pizza.currentType === currentType
        )
      })
      if (match < 0) return

      state.cartNetWorth -= action.payload.currentPrice
      state.cartPizzasAmount -= 1
      if (state.cartPizzas[match].currentAmount > 1) {
        state.cartPizzas[match].currentAmount -= 1
      } else {
        state.cartPizzas.splice(match, 1)
      }
    },

    cartClear: state => {
      state.cartNetWorth = 0
      state.cartPizzasAmount = 0
      state.cartPizzas = [] as ICartPizza[]
    },
  },
})

export const { cartAdd, cartRemove, cartDelete, cartClear } = pizzaSlice.actions

export const selectPizzaCart = (state: RootState) => state.RootReducer.pizzaSlice

export default pizzaSlice.reducer
