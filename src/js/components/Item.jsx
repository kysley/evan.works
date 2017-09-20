import React from 'react'

export default class Item extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			picActive: false,
		}
	}

	showPic = () => {
		this.setState({ picActive: true, })
	}

	hidePic = () => {
		this.setState({ picActive: false, })
	}
	
	render() {
		const { work } = this.props
		return (
			<div className="item--container">
				<span className="item--item" 
					onMouseOver={this.showPic}
					onMouseOut={this.hidePic}
				>
					<a href={`${work.website}`} target="_blank">{work.name}</a>
				</span>
				{ this.state.picActive ?
					<img className="item--pic" src={require(`img/${this.props.work.slug}.jpg`)} alt={work.name} />
				: null }
				{ this.state.picActive ?
					<div className="item--desc">
						{work.description}
						<span>{work.stack}</span>
					</div>
				: null }
			</div>
		)
	}
}
