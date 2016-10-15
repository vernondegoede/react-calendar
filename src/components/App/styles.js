import styled from 'styled-components';

const CalendarWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1000px) {
    width: 90%;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: block;

  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
`

const TodayView = styled.div`
  background-color: #FFFFFF;
  position: relative;
  height: 600px;
  width: 70%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`

const TodaysDate = styled.div`
  border-bottom: 1px solid #DADADA;
  height: 60px;
  display: flex;
  align-items: center;
`

const DateHeader = styled.h1`
  color: rgba(68, 68, 68, 100);
  font-size: 20px;
  vertical-align: middle;
  padding-left: 40px;
  margin: 0;
`

const TodayContainer = styled.div`
  max-height: calc(100% - 61px);
  overflow: scroll;
  position: relative;
`

const CalendarSidebar = styled.div`
  width: 30%;
  padding: 0;
  position: absolute;
  right: 0;
  height: calc(100% - 40px);
  top: 20px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #F2F2F2;
  box-shadow: inset 9px 0px 16px 0px rgba(220,220,220,1);
`

export {
  CalendarWrapper,
  Wrapper,
  TodayView,
  TodaysDate,
  DateHeader,
  TodayContainer,
  CalendarSidebar
}
