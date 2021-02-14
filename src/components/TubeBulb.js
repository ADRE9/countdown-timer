import React from 'react';
import styled from "styled-components";
import tubePicture from '../assets/Asset.png'

const TubeBulbSectionWrapper = styled.div`
  width:auto;
  padding:0rem 2rem;
  display:flex;
  flex-direction:row;
  height:30vh;
`;

const TubeBulbWrapperLeft = styled.div`
  position:relative;
  display:flex;
  justify-content:flex-end;
  width:50%;
  height:100%;
`;

const TubeBulbWrapperRight = styled.div`
  position:relative;
  display:flex;
  justify-content:flex-start;
  width:50%;
  height:100%;
`;

const TubePic = styled.img`
  height:100%;
  width:auto;
`;

const TubeBulb = (props) => {
  return (
    <TubeBulbSectionWrapper>
      <TubeBulbWrapperLeft>
        <TubePic src={tubePicture}/>
      </TubeBulbWrapperLeft>
      <TubeBulbWrapperRight>
        <TubePic src={tubePicture}/>
      </TubeBulbWrapperRight>
    </TubeBulbSectionWrapper>
  )
}

export default TubeBulb
