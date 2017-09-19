import React from 'react'
import { Link } from 'react-router-dom'

export default class PageNotFound extends React.Component {
	componentDidMount() {
		document.title = 'NOT FOUND! EVAN WORKS'
	}

	render() {
		return (
			<div className="notfoundsendhelp">
				<Link to="/"><span>back >:( </span></Link>
			</div>
		)
	}
}