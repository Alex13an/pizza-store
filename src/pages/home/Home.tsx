import React, { FC } from 'react'
import './home.scss'
import MainHeader from './../../components/mainHeader/MainHeader'
import TagsPanel from './../../components/tagsPanel/TagsPanel'
import PizzaList from './../../components/pizzaList/PizzaList'
import { useGetPizzasQuery } from '../../redux/services/pizzaApi'
import { IPizza } from '../../models/pizzaTypes'

const Home: FC = () => {
  const { data, isLoading } = useGetPizzasQuery('')
  return (
    <div className='wrapper'>
      <MainHeader />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <TagsPanel />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {isLoading ? 'Loading...' : <PizzaList pizzas={data || ([] as IPizza[])} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
