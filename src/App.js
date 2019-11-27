import React from 'react';
import styled from 'styled-components'
import './App.css'

const Title = styled.h1`
font-family: 'Ubuntu', sans-serif;
font-weight: 700
padding: 0
margin: 0
font-size: 8.5rem
opacity: 1`

const SubTitle = styled.h3`
font-size: 2.5rem
margin: 0
font-family: sans-serif
font-weight: 300

`

const TitleDiv = styled.div`
padding: 5px
color: white
opacity: .9
text-shadow: 1px 1px #262626
`

const Div = styled.div`
height: 100vh
background: white`

function App() {
  return (
    <div className="App">
      <header>
       <nav>
         <SubTitle>about</SubTitle>
         <SubTitle>portfolio</SubTitle>
       </nav>

      <TitleDiv>
      <Title>Fred Davison</Title>
      <SubTitle>full-stack web developer</SubTitle>
      </TitleDiv>


      </header>
      <Div></Div>
    </div>
  );
}

export default App;
