import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 60px;
  top: ${props => ( ( props.inMinutes / 60) * props.row_height ) + props.row_height }px;
`

const Time = styled.span`
  font-size: 11px;
  left: -35px;
  top: -7px;
  position: absolute;
  z-index: 30;
`

const Line = styled.div`
width: 100%;
border-top: 1px solid red;

&:before {
  position: absolute;
  left: 0;
  width: 8px;
  height: 8px;
  content: " ";
  background: red;
  border-radius: 50%;
  bottom: -4px;
  background-clip: padding-box;
}
`

export {
  Line,
  Wrapper,
  Time
}
