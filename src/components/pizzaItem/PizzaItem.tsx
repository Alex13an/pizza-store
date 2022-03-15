import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/storeHooks'
import { IPizza } from '../../models/pizzaTypes'
import { cartAdd } from '../../redux/slices/pizzaSlice'
import { GoPlus } from 'react-icons/go'

interface PizzaItemProps {
  pizza: IPizza
  amount: number
  sizes: number[]
  types: { val: number; desc: string }[]
}

const PizzaItem: FC<PizzaItemProps> = ({ pizza, amount, sizes, types }) => {
  const [pizzaType, setPizzaType] = useState<number>(pizza.types[0])
  const [pizzaSize, setPizzaSize] = useState<number>(pizza.sizes[0])
  const dispatch = useAppDispatch()

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={pizza.imageUrl} alt='Pizza' />
      <h4 className='pizza-block__title'>{pizza.name}</h4>
      <div className='pizza-block__selector'>
        <div className='pizza-block__params'>
          {types.map((type, index) => {
            const typed = pizza.types.find(t => t === type.val) !== undefined
            return (
              <div
                className={
                  !typed
                    ? 'pizza-block__param pizza-block__param_dead'
                    : pizzaType === type.val
                    ? 'pizza-block__param pizza-block__param_active'
                    : 'pizza-block__param'
                }
                role={typed ? 'button' : undefined}
                key={index}
                tabIndex={typed ? 0 : undefined}
                onClick={typed ? () => setPizzaType(type.val) : undefined}
              >
                {type.desc}
              </div>
            )
          })}
        </div>
        <div className='pizza-block__params'>
          {sizes.map((size, index) => {
            const fit = pizza.sizes.find(s => s === size)
            return (
              <div
                className={
                  !fit
                    ? 'pizza-block__param pizza-block__param_dead'
                    : pizzaSize === size
                    ? 'pizza-block__param pizza-block__param_active'
                    : 'pizza-block__param'
                }
                role={fit ? 'button' : undefined}
                tabIndex={fit ? 0 : undefined}
                onClick={fit ? () => setPizzaSize(size) : undefined}
                key={index}
              >
                {size} см.
              </div>
            )
          })}
        </div>
      </div>
      <div className='pizza-block__bottom'>
        <div className='pizza-block__price'>от {pizza.price} ₽</div>
        <div
          onClick={() =>
            dispatch(
              cartAdd({
                ...pizza,
                currentPrice: pizza.price,
                currentSize: pizzaSize,
                currentType: pizzaType,
                currentAmount: 1,
              }),
            )
          }
          role={'button'}
          tabIndex={0}
          className='button button--outline button--add pizza-block__button'
        >
          <GoPlus />
          <span>Добавить</span>
          {amount > 0 && <i>{amount}</i>}
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
