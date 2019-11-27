import React from 'react';
import styled from 'styled-components'
import './App.css'

const Header = styled.div`
display: flex
flex-direction: column
align-items: center
justify-content: center
height: 100vh
margin: 0`

const Title = styled.h1`
font-family: 'Ubuntu', sans-serif;
font-weight: 400
font-size: 5.5rem
background-color: pink
border: solid 2px pink
padding: 5px
color: #262626
opacity: 1
z-index: 10
width: 100vw`

function App() {
  return (
    <div className="App">
      <Header>
       

      <Title>Fred Davison</Title>
      <p>Full-stack web developer</p>


      </Header>
    </div>
  );
}

export default App;
