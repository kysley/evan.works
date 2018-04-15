import styled from 'styled-components'

const SelectedWrapper = styled.div`
  background: rgb(222, 142, 76);
  width: 25%;
  margin: 0.5em auto;
  padding: 0.5em;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
  }
`

const SelectedHeader = styled.h3`
  margin-top: 2em;
  font-size: 2rem;
  font-family: Theinhardt-Bold;
`

const SelectedName = styled.span`
  font-size: 1.3rem;
  font-family: Theinhardt;
`
const SelectedDesc = styled.span`
  display: block;
  font-size: 1rem;
  font-family: Akkurat;
  padding-left: 0.2em;
`

const SelectedLink = styled.a`
  display: block;
  text-decoration: none;
  color: #fff;
`

export {
  SelectedWrapper,
  SelectedHeader,
  SelectedName,
  SelectedDesc,
  SelectedLink,
}
