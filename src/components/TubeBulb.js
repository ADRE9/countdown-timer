import React from 'react';
import styled from "styled-components";
import {device} from '../helper/media';
import tubePicture from '../assets/Asset.png'

const TubeBulbSectionWrapper = styled.div`
  width:auto;
  padding:0rem 2rem;
  display:flex;
  
  flex-direction:row;
  height:30vh;

  @media ${device.laptop}{
    padding:0rem;
    height:53vh;
    flex-grow:1;
  }
`;

const TubeBulbWrapperLeft = styled.div`
  position:relative;
  display:flex;
  justify-content:flex-end;
  height:100%;
  
`;

const TubeBulbWrapperRight = styled.div`
  position:relative;
  display:flex;
  justify-content:flex-start;
  height:100%;
`;

const TubePic = styled.img`
  height:100%;
  width:auto;
`;

const GlowTime = styled.h1`
  position:absolute;
  color:white;
`;

const TubeBulb = (props) => {
  return (
    <TubeBulbSectionWrapper>
      <TubeBulbWrapperLeft>
        <TubePic src={tubePicture} />
        <GlowTime>{props.time}</GlowTime>
      </TubeBulbWrapperLeft>
      <TubeBulbWrapperRight>
        <TubePic src={tubePicture}/>
      </TubeBulbWrapperRight>
    </TubeBulbSectionWrapper>
  )
}

export default TubeBulb;
