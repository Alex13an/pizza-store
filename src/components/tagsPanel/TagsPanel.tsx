import React, { FC } from 'react'
import './tagsPanel.scss'

interface TagsPanelProps {
  tags: string[]
  activeTag: number
  applyTag: React.Dispatch<React.SetStateAction<number>>
}

const TagsPanel: FC<TagsPanelProps> = ({ tags, applyTag, activeTag }) => {
  return (
    <div className='categories'>
      {tags.map((tag, index) => (
        <button
          className={`categories__item ${activeTag === index ? 'active' : ''}`}
          key={tag}
          onClick={() => applyTag(index)}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

export default TagsPanel
