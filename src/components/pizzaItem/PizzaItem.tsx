import React, { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/storeHooks'
import { IPizza } from '../../models/pizzaTypes'
import { cartAdd } from '../../redux/slices/pizzaSlice'

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
          className='button button--outline button--add'
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
          {amount > 0 && <i>{amount}</i>}
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
