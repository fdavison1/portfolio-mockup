import React from 'react';
import styled from 'styled-components'
import './App.css'

const Title = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 700
padding: 0
margin: 0
font-size: 8rem
opacity: 1`

const Title2 = styled.h1`
font-family: 'Poppins', sans-serif;
font-weight: 700
padding: 0
margin: 0
font-size: 5rem
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

const Div1 = styled.div`
height: 100vh
padding: 50px
background: white`

const Div2 = styled.div`
height: 100vh
padding: 50px
background: rgb(161,161,161)`

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
      <Div1>
        <Title2>about</Title2>
      </Div1>

      <Div2>
        <Title2>portfolio</Title2>
      </Div2>

    </div>
  );
}

export default App;
