import React, { FC } from 'react'
import './cart.scss'
import { Link } from 'react-router-dom'
import CartItem from './../../components/cartItem/CartItem'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChevronLeft } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'

const Cart: FC = () => {
  return (
    <div className='content'>
      <div className='container container--cart'>
        <div className='cart'>
          <div className='cart__top'>
            <h2 className='content__title'>
              <FiShoppingCart />
              Корзина
            </h2>
            <div className='cart__clear'>
              <span>
                <FaRegTrashAlt />
                Очистить корзину
              </span>
            </div>
          </div>
          <div className='content__items'>
            <CartItem />
          </div>
          <div className='cart__bottom'>
            <div className='cart__bottom-details'>
              <span>
                {' '}
                Всего пицц: <b>3 шт.</b>{' '}
              </span>
              <span>
                {' '}
                Сумма заказа: <b>900 ₽</b>{' '}
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
      </div>
    </div>
  )
}

export default Cart
