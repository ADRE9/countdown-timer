import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {device} from '../helper/media';

const Body = styled.div`
  position:relative;
  width:100%;
  height:100vh;
  padding:0;
  margin:0;
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const StyledWrapperDiv = styled.div`
  flex-grow:1;
`;

const App = () => {
  return (
    <Body>
      <Header/>
      <Content/>
      <Footer />
    </Body>
  )
}

export default App
