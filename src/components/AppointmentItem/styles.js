import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  opacity: ${props => props.focussed ? '1' : '.9'};
  height: ${props => props.focussed ? 'auto' : props.height + 'px'};
  min-height: ${props => props.height}px;
  top: ${props => props.top}px;
  width: ${props => props.width}%;
  left: ${props => props.left}%;
`

const Inner = styled.div`
  border-radius: 4px;
  background: rgba(227, 70, 65, 100);
  border: 1px solid #FF6255;
  border-radius: 4px;
  color: #FFCDC9;
  font-size: 12px;
  padding: 10px;
  box-sizing: border-box;
  width: calc(100% - 10px);
  margin-left: 5px;
  height: ${props => props.focussed ? 'auto' : props.height + 'px'};
  min-height: ${props => props.height}px;
`

const Title = styled.strong`
  font-weight: 400;
  max-width: ${props => props.focussed ? '90%' : 'calc(100% - 85px)'};
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const Description = styled.div`
  padding: 0;
  margin: 0;
  font-size: 11px;
  color: #FFC4BF;
`

const DeleteButton = styled.div`
  width: 20px;
  height: 20px;
  background: transparent url('${props => props.image}') no-repeat center center;
  position: absolute;
  right: 10px;
  top: 12px;
  display: ${ props => props.focussed ? 'block' : 'none' }
  cursor: pointer;
`

const TimeSpan = styled.span`
  width: 80px;
  position: absolute;
  right: 10px;
  top: 11px;
  display: ${ props => ( props.focussed ) ? 'none' : 'true' }
`

export {
  Wrapper,
  Inner,
  Title,
  Description,
  DeleteButton,
  TimeSpan
}
