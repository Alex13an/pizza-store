import React, { FC } from 'react'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'
import { ICartPizza } from '../../models/pizzaTypes'
import { useAppDispatch } from './../../hooks/storeHooks'
import { cartAdd, cartDelete, cartRemove } from '../../redux/slices/pizzaSlice'

interface CartItemProps {
  pizza: ICartPizza
}

const CartItem: FC<CartItemProps> = ({ pizza }) => {
  const dispatch = useAppDispatch()
  return (
    <div className='cart__item'>
      <div className='cart__item-img'>
        <img className='pizza-block__image' src={pizza.imageUrl} alt='Pizza' />
      </div>
      <div className='cart__item-info'>
        <h3>{pizza.name}</h3>
        <p>
          {pizza.currentType ? 'традиционное' : 'тонкое'} тесто, {pizza.currentSize} см.
        </p>
      </div>
      <div className='cart__item-count'>
        <div
          onClick={() => dispatch(cartRemove(pizza))}
          role='button'
          tabIndex={0}
          className='button button--outline button--circle cart__item-count-minus'
        >
          <FiMinus />
        </div>
        <b>{pizza.currentAmount}</b>
        <div
          onClick={() => dispatch(cartAdd(pizza))}
          role='button'
          tabIndex={0}
          className='button button--outline button--circle cart__item-count-plus'
        >
          <GoPlus />
        </div>
      </div>
      <div className='cart__item-price'>
        <b>{pizza.currentPrice * pizza.currentAmount} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <div
          onClick={() => dispatch(cartDelete(pizza))}
          role='button'
          tabIndex={0}
          className='button button--outline button--circle'
        >
          <GoPlus />
        </div>
      </div>
    </div>
  )
}

export default CartItem
