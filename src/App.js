import React from 'react';
import styled from 'styled-components'
import './App.css';

const Header = styled.div`
display: flex
align-items: center
justify-content: center
height: 100vh`

const Title = styled.h1`
font-family: sans-serif
font-weight: 200`

function App() {
  return (
    <div className="App">
      <Header>
       

      <Title>Fred Davison</Title>


      </Header>
    </div>
  );
}

export default App;
