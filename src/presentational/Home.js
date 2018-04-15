import React from 'react'
import { Flex } from 'grid-styled'
import Camber from 'react-camber'

import Hero from 'Components/Hero'
import { SelectedName, SelectedWrapper, SelectedLink } from 'Styled/Selected'
import Works, { Other } from 'Utils/works'

class Home extends React.Component {
  state = {
    works: Works || [],
    other: Other || [],
  }

  render() {
    const { works, other } = this.state
    return (
      <Flex flexDirection="column">
        <Camber />
        <Hero />
        {works.map(work => (
          <SelectedWrapper colour={work.colour} key={work.order}>
            <SelectedLink href={work.link} target="_blank">
              <SelectedName>{work.name}</SelectedName>
            </SelectedLink>
          </SelectedWrapper>
        ))}
        {other.map(work => (
          <SelectedWrapper colour={work.colour} key={work.order}>
            <SelectedLink href={work.link} target="_blank">
              <SelectedName>{work.name}</SelectedName>
            </SelectedLink>
          </SelectedWrapper>
        ))}
        <Hero />
      </Flex>
    )
  }
}

export default Home
