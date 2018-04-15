import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  from {
    transform: translate3d(0, -30px, 0);
  }
  to {
    transform: translate3d(0, 30px, 0);
  }
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 90vh;
  margin: auto;
  padding: 10vh 1em 0 1em;
`

const HeroScroll = styled.div`
  color: rgb(191, 246, 185);
  display: flex;
  justify-content: center;
  text-decoration: underline;
  animation: ${slide} 1.7s infinite alternate;
  margin-top: 30vh;
`

const HeroBig = styled.h1`
  font-family: ${props => props.first ? 'inherit' : 'Theinhardt-Bold'};
  color: #fff;
  margin-top: ${props => props.first? '10vh' : '-25vh'};
  transform: ${props => props.first ? 'rotate(7deg)' : 'rotate(-10deg)'};
  background-color: ${props => props.first ? '' : 'rgb(42, 59, 206)'};
  line-height: ${props => props.first ? '2' : '1.2'};
  font-size: 3rem;
  letter-spacing: .15rem;
  display: block;
`

const HeroSmall = styled.span`
  position: fixed;
  font-family: Akkurat;
  background-color: ${props => props.inverted ? '#000' : '#fff'};
  color: ${props => props.inverted ? '#fff' : '#000'};
  width: ${props => props.inverted ? '6em' : ''};
  padding: 0 .5em 0 .5em;
  letter-spacing: .1rem;
  display: block;
  z-index: 6;

  &:nth-of-type(2) {
    margin-top: 1.5em;
    z-index: 5;
  }
  &:nth-of-type(3) {
    margin-top: 3em;
    z-index: 6;
  }
`

const HeroLink = styled.a`
  position: fixed;
  font-family: Akkurat;
  // background-color: #ffcc02;
  background-color: rgb(191, 246, 185);
  color: #000;
  width: 6em;
  padding: 0 .5em 0 .5em;
  letter-spacing: .1rem;
  display: block;
  z-index: 6;

  &:hover {
    text-decoration: none;
  }

  &:nth-of-type(1) {
    margin-top: 3em;
    margin-left: 7em;
  }
  &:nth-of-type(2) {
    margin-top: 4.5em;
    margin-left: 7em;
  }
`

export {
  HeroWrapper,
  HeroScroll,
  HeroBig,
  HeroSmall,
  HeroLink,
}
