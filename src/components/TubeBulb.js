import React from 'react';
import styled from 'styled-components';
import {keyframes} from 'styled-components';
import tube from '../assets/Asset.png'

const colors = {
  innerGLow: "#ffb510",
  text: "#fce510",
  outerGlow:"#fb0000"
}

const TopDiv = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;

const LowerDiv = styled.div`
display:flex;
position:relative;
flex-direction:row;
width:100%;

`;

const Unit = styled.h1`
color:#333;
`;

const TubeWrapperLeft = styled.div`
position:relative;
flex-grow:1;
`;

const TubeWrapperRight = styled.div`
position:relative;
flex-grow:1;
`;

const TubeImg = styled.img`
position:relative;
z-index:5;
width:100%;
`;

const DigitDiv = styled.div`
  position:absolute;
  z-index:2;
  top:20% ;
  left:50% ;
  transform:translate(-50%,-35%)
`;


const flicker = keyframes`
  0%,80% {
    color:#333;
    text-shadow:none;
  }

  100% {
    color:${colors.text};
    text-shadow:0 0 10px #fb0000,
               0 0 20px #fb0000,
               0 0 40px #fb0000,
               0 0 80px #fb0000,
               0 0 120px #fb0000,
               0 0 150px #fb0000;
  }
`;


const Digit = styled.h1`
color:#333;
font-size:150px;
`;

const DigitSpan = styled.span`
  animation: ${flicker} 1s linear infinite;
`;

const TubeBulb = (props) => {

  var leftDigit = Math.floor(props.time / 10);
  var rightDigit = Math.floor(props.time % 10);

  return (
    <React.Fragment>
      <TopDiv>
        <Unit>{props.unit }</Unit>
      </TopDiv>
      <LowerDiv>
        <TubeWrapperLeft>
          <DigitDiv>
            <Digit><DigitSpan>{leftDigit?leftDigit:0}</DigitSpan></Digit>
          </DigitDiv>
          <TubeImg src={tube} />
        </TubeWrapperLeft>
        <TubeWrapperRight>
          <DigitDiv>
            <Digit><DigitSpan>{rightDigit?rightDigit:0}</DigitSpan></Digit>
          </DigitDiv>
          <TubeImg src={tube} />
        </TubeWrapperRight>
      </LowerDiv>
    </React.Fragment>
  )
}

export default TubeBulb
