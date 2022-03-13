import React, { FC, useState } from 'react'
import './home.scss'
import MainHeader from './../../components/mainHeader/MainHeader'
import TagsPanel from './../../components/tagsPanel/TagsPanel'
import PizzaList from './../../components/pizzaList/PizzaList'
import { useGetPizzasQuery } from '../../redux/services/pizzaApi'
import { IFilter, IPizza } from '../../models/pizzaTypes'
import FilterDropDown from './../../components/filterDropDown/FilterDropDown'

const Home: FC = () => {
  const pizzaTags = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
  const pizzaFilters: IFilter[] = [
    { type: 'rating', desc: 'популярности' },
    { type: 'price', desc: 'цене' },
    { type: 'name', desc: 'алфавиту' },
  ]
  const [activeTag, setActiveTag] = useState(0)
  const [activeFilter, setActiveFilter] = useState(pizzaFilters[0])
  const { data, isLoading } = useGetPizzasQuery({
    _sort: activeFilter.type,
    ...(activeTag && { category: activeTag }),
  })

  return (
    <div className='wrapper'>
      <MainHeader />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <TagsPanel tags={pizzaTags} activeTag={activeTag} applyTag={setActiveTag} />
            <FilterDropDown
              filters={pizzaFilters}
              currentFilter={activeFilter}
              setFilter={setActiveFilter}
            />
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
