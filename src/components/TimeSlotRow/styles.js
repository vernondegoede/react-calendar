import styled from 'styled-components';

const TimeSlot = styled.div`
  height: 50px;
  font-size: 12px;
  color: #D3D3D3;
  margin-left: 40px;
  position: relative;
  overflow-x: hidden;
`

const Hour = styled.div`
display: inline-block;
position: relative;
width: 35px;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    border-bottom: 1px solid #F3F3F3;
    top: calc( -50% + 1px);
    width: 600px;
    left: 100%;
    margin-left: 10px;
  }
`

export {
  Hour,
  TimeSlot
}
