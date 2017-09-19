import React from 'react'

const Banner = ({ first, last, blurb }) => {
	return (
		<div className="banner">
			<h1 className="banner--text">{first}{last}</h1>
			{/*<h1 className="banner--text banner--text__cgreen">{last}</h1>*/}
		</div>
	)
}

export default Banner
