import React from 'react';
import styled from 'styled-components';
import {keyframes} from 'styled-components';
import tube from '../assets/Asset.png'

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

const Digit = styled.h1`
color:#333;

font-size:150px;
`;

const flicker = keyframes``;

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
            <Digit>{leftDigit?leftDigit:0}</Digit>
          </DigitDiv>
          <TubeImg src={tube} />
        </TubeWrapperLeft>
        <TubeWrapperRight>
          <DigitDiv>
            <Digit>{rightDigit?rightDigit:0}</Digit>
          </DigitDiv>
          <TubeImg src={tube} />
        </TubeWrapperRight>
      </LowerDiv>
    </React.Fragment>
  )
}

export default TubeBulb
