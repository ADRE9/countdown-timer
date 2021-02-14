import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {countdown} from "../helper/countdown";

const StyledContentDiv = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-grow:1;
  width:100%;
  background-color:black;
`;

const Time = styled.h1`
color:white;
`;

const Content = () => {

  const eventTime = new Date("feb 16, 2021 20:00:00").getTime();
  const [timeObj, setTimeObj] = useState({});

  useEffect(() => {
    
    setInterval(function () {
      setTimeObj(countdown(eventTime))
    }, 1000);  
  },[timeObj,eventTime]);

  return (
    <StyledContentDiv>
      <Time>
        {timeObj.days}
      </Time>
      <br/>
      <Time>
        {timeObj.hours}
      </Time>
      <br/>
      <Time>
        {timeObj.mins}
      </Time>
      <br/>
      <Time>
        {timeObj.secs}
      </Time>
    </StyledContentDiv>
  )
}

export default Content;
