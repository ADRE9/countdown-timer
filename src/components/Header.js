import React from 'react';
import styled from 'styled-components';
import stopwatch from '../assets/stopwatch.png';

const MenuBar = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  height:10vh;
  background-color:black;
`;

const Logo = styled.h2`
  margin-left:2rem;
  color:white;
  font-family: 'Acme', sans-serif;
`;

const SettingsWrapper = styled.div`
  position:relative;
  margin-right:1.5rem;
  width:30px;
  height:30px;
`;

const Settings = styled.img`
  width:100%;
  height:100%;
`;


const Header = () => {
  return (
    <MenuBar>
      <Logo>
        COUNT DOWN
      </Logo>
      <SettingsWrapper>
        <Settings src={stopwatch}/>
      </SettingsWrapper>
    </MenuBar>
  )
}

export default Header
