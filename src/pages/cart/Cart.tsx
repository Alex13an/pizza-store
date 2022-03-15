import React, { FC } from 'react'
import './cart.scss'
import { Link } from 'react-router-dom'
import CartItem from './../../components/cartItem/CartItem'
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChevronLeft } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { cartClear } from '../../redux/slices/pizzaSlice'
import emptyCart from '../../assets/images/empty-cart.png'

const Cart: FC = () => {
  const { cartNetWorth, cartPizzas, cartPizzasAmount } = useAppSelector(
    state => state.RootReducer.pizzaSlice,
  )
  const dispatch = useAppDispatch()
  return (
    <div className='content'>
      <div className='container container--cart'>
        {cartPizzasAmount > 0 ? (
          <div className='cart'>
            <div className='cart__top'>
              <h2 className='content__title'>
                <FiShoppingCart />
                Корзина
              </h2>
              <div
                onClick={() => dispatch(cartClear())}
                role='button'
                tabIndex={0}
                className='cart__clear'
              >
                <span>
                  <FaRegTrashAlt />
                  Очистить корзину
                </span>
              </div>
            </div>
            <div className='content__items'>
              {cartPizzas.map(pizza => (
                <CartItem
                  key={pizza.id + '#' + pizza.currentSize + pizza.currentType}
                  pizza={pizza}
                />
              ))}
            </div>
            <div className='cart__bottom'>
              <div className='cart__bottom-details'>
                <span>
                  {' '}
                  Всего пицц: <b>{cartPizzasAmount} шт.</b>{' '}
                </span>
                <span>
                  {' '}
                  Сумма заказа: <b>{cartNetWorth} ₽</b>{' '}
                </span>
              </div>
              <div className='cart__bottom-buttons'>
                <Link to={'/'} className='button button--outline button--add go-back-btn'>
                  <span>
                    <BsChevronLeft />
                    Вернуться назад
                  </span>
                </Link>
                <div className='button pay-btn'>
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='cart cart--empty'>
            <h2>
              Корзина пустая <span>😕</span>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={emptyCart} alt='Empty cart' />
            <Link to='/' className='button button--black'>
              <span>Вернуться назад</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
