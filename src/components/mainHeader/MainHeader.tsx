import React, { FC } from 'react'
import './mainHeader.scss'
import pizzaLogo from '../../assets/icons/pizza-logo.svg'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/storeHooks'
import { FiShoppingCart } from 'react-icons/fi'

const MainHeader: FC = () => {
  const { cartNetWorth, cartPizzasAmount } = useAppSelector(state => state.RootReducer.pizzaSlice)
  return (
    <div className='header'>
      <div className='container'>
        <Link to='/' className='header__logo'>
          <img width='38' src={pizzaLogo} alt='Pizza logo' />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <div className='header__cart'>
          <Link to={'/cart'} className='button button--cart'>
            <span>{cartNetWorth} ₽</span>
            <div className='button__delimiter'></div>
            <FiShoppingCart fontSize={17} />
            <span>{cartPizzasAmount}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
