import React from 'react'

const Banner = ({ first, last }) => {
	return (
		<div className="banner">
			<h1 className="banner--text">{first}{last}</h1>
		</div>
	)
}

export default Banner
