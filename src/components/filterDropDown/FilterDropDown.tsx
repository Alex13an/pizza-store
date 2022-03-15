import React, { FC } from 'react'
import useDropDown from '../../hooks/useDropDown'
import { IFilter } from '../../models/pizzaTypes'
import './filterDropDown.scss'
import { BsFillCaretDownFill } from 'react-icons/bs'

interface FilterDropDownProps {
  filters: IFilter[]
  currentFilter: IFilter
  setFilter: (value: React.SetStateAction<IFilter>) => void
}

const FilterDropDown: FC<FilterDropDownProps> = ({ filters, setFilter, currentFilter }) => {
  const { dropToggle, dropped, dropRef } = useDropDown()

  return (
    <div className='sort' ref={dropRef}>
      <div className='sort__label'>
        <BsFillCaretDownFill />
        <b>Сортировка по:</b>
        <span role='button' tabIndex={0} onClick={dropToggle}>
          {currentFilter.desc}
        </span>
      </div>
      {dropped ? (
        <div className='sort__popup'>
          {filters.map(filt => (
            <div
              role='button'
              key={filt.type}
              tabIndex={0}
              className={`sort__item ${
                filt.type === currentFilter.type ? 'sort__item_active' : ''
              }`}
              onClick={() => {
                setFilter(filt)
                dropToggle()
              }}
            >
              {filt.desc}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default FilterDropDown
