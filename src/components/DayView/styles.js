import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 80px;
  width: calc(100% - 120px);
  top: ${props => props.top}px
`

export {
  Wrapper
}
