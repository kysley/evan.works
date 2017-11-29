import React from 'react'

import Banner from '../components/Banner'
import Item from '../components/Item'
import allWorks from '../utils/works'

export default class Index extends React.Component {
  constructor() {
    super()

    this.state = {
      isResizing: false,
    }
  }

  componentDidMount() {
    document.title = 'EVAN WORKS'
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    clearTimeout(window.resizingFinished)
    if (!this.state.isResizing) this.setState({ isResizing: true })
    window.resizingFinished = setTimeout(() => {
      this.setState({ isResizing: false })
    }, 250)
  }

  render() {
    return (
      <div>
        <Banner />
        {allWorks.map(work => (
          <Item
            work={work}
            key={work.order}
          />
        ))}
        { this.state.isResizing && <h1 className="NOT-RESPONSIVE">YOU SHOULD KNOW BETTER</h1> }
      </div>
    )
  }
}
