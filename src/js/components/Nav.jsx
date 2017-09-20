import React from 'react'

const data = {
	"devDependencies": {
	  "babel-eslint": "^7.2.3",
	  "eslint": "^4.3.0",
	  "eslint-config-airbnb": "^15.1.0",
	  "eslint-import-resolver-webpack": "^0.8.3",
	  "eslint-loader": "^1.8.0",
	  "eslint-plugin-import": "^2.7.0",
	  "eslint-plugin-jsx-a11y": "^5.1.1",
	  "eslint-plugin-react": "^7.1.0"
	},
	"dependencies": {
	  "babel-core": "^6.24.1",
	  "babel-loader": "^7.1.1",
	  "babel-minify-webpack-plugin": "^0.2.0",
	  "babel-plugin-transform-class-properties": "^6.24.1",
	  "babel-plugin-transform-object-rest-spread": "^6.26.0",
	  "babel-polyfill": "^6.23.0",
	  "babel-preset-env": "^1.6.0",
	  "babel-preset-react": "^6.24.1",
	  "babel-preset-stage-2": "^6.24.1",
	  "css-loader": "^0.28.0",
	  "express": "^4.15.4",
	  "extract-text-webpack-plugin": "^3.0.0",
	  "file-loader": "^0.11.1",
	  "html-webpack-plugin": "^2.29.0",
	  "lost": "^8.1.0",
	  "morgan": "^1.8.2",
	  "node-sass": "^4.5.2",
	  "postcss-cssnext": "^2.10.0",
	  "postcss-import": "^9.1.0",
	  "postcss-loader": "^1.3.3",
	  "raw-loader": "^0.5.1",
	  "react": "^15.6.1",
	  "react-dom": "^15.6.1",
	  "react-ga": "^2.2.0",
	  "react-router-dom": "^4.1.1",
	  "sass-loader": "^6.0.6",
	  "sitemap-webpack-plugin": "^0.3.0",
	  "style-loader": "^0.16.1",
	  "url-loader": "^0.5.8",
	  "webpack": "^3.5.5",
	  "webpack-dev-server": "^2.5.1"
	}
}

export default class Nav extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			uthActive: false,
		}
	}

	hideUTH = () => {
		this.setState({ uthActive: false, })
	}

	showUTH = () => {
		this.setState({ uthActive: true, })
	}

	render() {
		return (
			<nav className="nav">
				<a 
					id="hood" 
					href="https://github.com/kysley/evan.works" 
					onMouseOver={this.showUTH}
					onMouseOut={this.hideUTH}
				>
					under the hood :)
				</a>
				{ this.state.uthActive ? 
					<div id="underthehoodman">
						built during downtime with &lt;3 using:
						<pre>{ JSON.stringify(data, null, 2) }</pre>
					</div>
				: null }
				<a href='http://kysley.com' target="_blank">my non-'brutalist' website =)</a>
			</nav>
		)
	}
}
