import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {device} from '../helper/media';
import glassTube from '../assets/Asset 6@4x.png'
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
  flex-grow:1;
  width:100%;
  display:flex;
  align-items:center;
  padding-top:2rem;
  flex-direction:column;

  @media ${device.laptop}{
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding-top:0rem;
  }
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
          <TubeBulb time={timeObj.days}/>
          <TubeBulb time={timeObj.hours}/>
          <TubeBulb time={timeObj.mins}/>
          <TubeBulb time={timeObj.secs}/>
      </StyledClockDiv>
    </StyledContentDiv>
  )
}

export default Content;
