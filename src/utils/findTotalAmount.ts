import { ICartPizza, IPizza } from '../models/pizzaTypes'

const findTotalAmount = (cartPizzas: ICartPizza[], pizza: IPizza) => {
  let amount = 0
  cartPizzas.forEach(piz => {
    if (piz.name === pizza.name) amount += piz.currentAmount
  })

  return amount
}

export default findTotalAmount
