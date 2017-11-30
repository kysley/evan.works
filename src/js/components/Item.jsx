import React from 'react'

const Item = ({ work }) => (
  <div className="item--container">
    <span
      className="item--item"
    >
      <a href={`${work.website}`} target="_blank">{work.name}</a>
    </span>
    <div className="item--pic__wrapper">
      <img className="item--pic" src={require(`img/${work.slug}.jpg`)} alt={work.name} />
    </div>
  </div>
)

export default Item
