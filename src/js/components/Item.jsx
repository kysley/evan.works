import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ work }) => {
	return (
		<div className="item--container">
			<span className="item--item"><a href={`${work.website}`} target="_blank">{work.name}</a></span>
			<img className="item--pic" src={require(`img/${work.slug}.jpg`)} alt={work.name} />
			<div className="item--desc">
				{work.description}
				<span>{work.stack}</span>
			</div>
		</div>
	)
}

export default Item
