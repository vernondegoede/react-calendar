import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  opacity: .9;
  height: ${props => props.height}px;
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
  height: ${props => props.height}px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 70%, rgba(227, 70, 65, 100));
    width: 90%;
    left: 5%;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const Title = styled.strong`
  font-weight: 400;
  max-width: calc(100% - 100px);
  overflow: hidden;
  display: block;
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
  top: 10px;
  display: ${ props => ( props.focussed ) ? 'block' : 'none' }
  cursor: pointer;
`

const TimeSpan = styled.span`
  width: 80px;
  position: absolute;
  right: 10px;
  top: 13px;
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
