import React, { FC } from 'react'
import { useAppSelector } from '../../hooks/storeHooks'
import { IPizza } from '../../models/pizzaTypes'
import PizzaItem from '../pizzaItem/PizzaItem'
import './pizzaList.scss'
import findTotalAmount from '../../utils/findTotalAmound'

interface PizzaListProps {
  pizzas: IPizza[]
}

const PizzaList: FC<PizzaListProps> = ({ pizzas }) => {
  const { cartPizzas } = useAppSelector(state => state.RootReducer.pizzaSlice)
  const sizes: number[] = [26, 30, 40]
  const types: Array<{ val: number; desc: string }> = [
    { val: 0, desc: 'тонкое' },
    { val: 1, desc: 'традиционное' },
  ]

  return (
    <>
      {pizzas.map(pizza => (
        <PizzaItem
          pizza={pizza}
          key={pizza.name}
          amount={findTotalAmount(cartPizzas, pizza)}
          sizes={sizes}
          types={types}
        />
      ))}
    </>
  )
}

export default PizzaList
