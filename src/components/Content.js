import React,{useState} from 'react';
import styled from 'styled-components';
import {device} from '../helper/media';
import {countdown} from "../helper/countdown";
import TubeBulb from './TubeBulb';

const StyledContentDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-grow:1;
  flex-direction:column;
  width:100%;
  background-color:black;
`;

const Time = styled.h1`
color:white;
`;

const StyledClockDiv = styled.div`
  position:relative;
  max-width:100vw;
  flex-grow:1;
  display:grid;
  padding:2rem;
  grid-template-rows:1;
  grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
`;

const StyledHeadlineDiv = styled.div`
  width:100%;
  height:15vh;
  background-color:blue;
`;

const TimeDiv = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  height:30vh;
  background-color:aliceblue;
`;

const GridItem = styled.div`
  display:flex;
  position:relative;
  flex-direction:column;
`;

const Content = () => {

  const eventTime = new Date("feb 16, 2021 20:00:00").getTime();
  const [timeObj, setTimeObj] = useState({});

  setInterval(function () {
    setTimeObj(countdown(eventTime))
  }, 1000);

  /*useEffect(() => {
    
    setInterval(function () {
      setTimeObj(countdown(eventTime))
    }, 1000);  
  },[timeObj,eventTime]);*/

  return (
    <StyledContentDiv>
      <StyledHeadlineDiv>

      </StyledHeadlineDiv>
      <StyledClockDiv>
        <GridItem>
          <TubeBulb time={timeObj.days } unit="Days"/>
        </GridItem>
        <GridItem>
          <TubeBulb time={timeObj.hours } unit="Hours"/>
        </GridItem>
        <GridItem>
          <TubeBulb time={timeObj.mins } unit="Minutes"/>
        </GridItem>
        <GridItem>
          <TubeBulb time={timeObj.secs } unit="Seconds"/>
        </GridItem>
      </StyledClockDiv>
    </StyledContentDiv>
  )
}

export default Content;
