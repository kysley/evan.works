import React from 'react'
import { Link } from 'react-router-dom'

import Banner from '../components/Banner'
import Item from '../components/Item'
import allWorks, { moreWork } from '../utils/works'

export default class Index extends React.Component {
	componentDidMount() {
		document.title = 'EVAN WORKS'
	}
	
	render() {
		return (
			<div className="fadeInUp">
				<Banner
					first="EVAN"
					last="KYSLEY"
				/>
				{allWorks.map(work => (
					<Item
						work={work}
						key={work.order}
					/>
				))}
			</div>
		)
	}
}