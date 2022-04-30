import React, { FC, useState } from 'react'
import './home.scss'
import TagsPanel from './../../components/tagsPanel/TagsPanel'
import PizzaList from './../../components/pizzaList/PizzaList'
import { IFilter, IPizza } from '../../models/pizzaTypes'
import FilterDropDown from './../../components/filterDropDown/FilterDropDown'
import pizzas from '../../mock/db'

const Home: FC = () => {
  const pizzaTags = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые']
  const pizzaFilters: IFilter[] = [
    { type: 'rating', desc: 'популярности' },
    { type: 'price', desc: 'цене' },
    { type: 'name', desc: 'алфавиту' },
  ]
  const [activeTag, setActiveTag] = useState(0)
  const [activeFilter, setActiveFilter] = useState(pizzaFilters[0])

  const comparePizzas = (a: IPizza, b: IPizza) => {
    const key = activeFilter.type
    if (key === 'rating') {
      if (a[key] < b[key]) return 1
      if (a[key] > b[key]) return -1
    } else {
      if (a[key] < b[key]) return -1
      if (a[key] > b[key]) return 1
    }
    return 0
  }

  const getPizzas = (): IPizza[] => {
    if (!pizzas) return [] as IPizza[]
    let data = pizzas.sort(comparePizzas)
    if (activeTag) data = data.filter(pizza => pizza.category === activeTag)
    return data
  }

  return (
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
          <PizzaList pizzas={getPizzas() || ([] as IPizza[])} />
        </div>
      </div>
    </div>
  )
}

export default Home
