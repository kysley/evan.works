import React from 'react'
import { Box } from 'grid-styled'

import { HeroWrapper, HeroScroll, HeroBig, HeroSmall, HeroLink } from 'Styled/Hero'
import { getMonth, getDay, getHour, getMinute } from 'Utils/time'

const Hero = () => (
  <HeroWrapper>
    <Box w={1}>
      <HeroSmall>Evan Kysley</HeroSmall>
      <HeroSmall inverted>{getMonth()} {getDay()}</HeroSmall>
      <HeroSmall inverted>{getHour()}:{getMinute()}</HeroSmall>
      <HeroLink href="https://github.com/kysley">github</HeroLink>
      <HeroLink href="https://linkdin.com/in/evankysley">linkedin</HeroLink>
    </Box>

    <Box w={1}>
      <HeroBig first>
        EVAN EVAN EVAN EVAN EVAN EVAN EVAN
        EVAN EVAN EVAN EVAN EVAN
        EVAN EVAN EVAN EVAN EVAN EVAN EVAN
      </HeroBig>
      <HeroBig>kysley kysley kysley kysley kysley kysley</HeroBig>
      <HeroScroll>scroll - scroll - scroll</HeroScroll>
    </Box>
  </HeroWrapper>
)

export default Hero
