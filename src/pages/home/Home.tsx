import React, { FC } from 'react'
import './home.scss'
import MainHeader from './../../components/mainHeader/MainHeader'
import TagsPanel from './../../components/tagsPanel/TagsPanel'
import PizzaList from './../../components/pizzaList/PizzaList'

const Home: FC = () => {
  return (
    <div className="wrapper">
      <MainHeader />
      <div className="content">
        <div className="container">
          <TagsPanel />
          <h2 className="content__title">Все пиццы</h2>
          <PizzaList />
        </div>
      </div>
    </div>
  )
}

export default Home
