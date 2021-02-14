import React from 'react';
import styled from 'styled-components';
import tube from '../assets/Asset.png'

const TopDiv = styled.div`

`;

const LowerDiv = styled.div`
display:flex;
position:relative;
flex-direction:row;
width:100%;
`;

const Unit = styled.h1`
color:white;
`;

const TubeWrapperLeft = styled.div`
flex-grow:1;
`;

const TubeWrapperRight = styled.div`
flex-grow:1;
`;

const TubeImg = styled.img`
width:100%;
`;

const TubeBulb = (props) => {
  return (
    <React.Fragment>
      <TopDiv>
        <Unit>{props.unit }</Unit>
      </TopDiv>
      <LowerDiv>
        <TubeWrapperLeft>
          <TubeImg src={ tube}/>
        </TubeWrapperLeft>
        <TubeWrapperRight>
          <TubeImg src={ tube}/>
        </TubeWrapperRight>
      </LowerDiv>
    </React.Fragment>
  )
}

export default TubeBulb
