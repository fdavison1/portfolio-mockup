import React from 'react';
import styled from 'styled-components'
import './App.css'

const Title = styled.h1`
font-family: Poppins, sans-serif;
font-weight: 700
padding: 0
margin: 0
font-size: 5rem
opacity: 1`

const Title2 = styled.h1`
font-family:  sans-serif;
font-weight: 200
padding: 0
margin: 0
font-size: 2.75rem
opacity: 1`

const SubTitle = styled.h3`
transition: color .5s ease;
font-size: 2rem
margin: 0
color: #262626
font-family: sans-serif
font-weight: 300
&:hover {
  color: purple
  cursor: pointer
}
opacity: .85
`

const TitleDiv = styled.div`
padding: 5px
opacity: .9
`

const Div1 = styled.div`
box-sizing: border-box
height: 100vh
padding: 50px
background: white`

const Div2 = styled.div`
box-sizing: border-box
height: 100vh
padding: 50px
background: rgb(222,222,222)`

const Icons = styled.div`
position: fixed
right: 25px
bottom: 25px
display: flex
flex-direction: column
align-items: center
justify-content: center
opacity: .85
`
const A = styled.a`
text-decoration: none`

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <A href='#about'>
            <SubTitle>about</SubTitle>
          </A>
          <A href='#portfolio'>
            <SubTitle>portfolio</SubTitle>
          </A>

        </nav>
        <Icons>
          <a href='https://github.com/fdavison1' target='_blank'
          rel="noopener noreferrer">
            <div className='img'></div>
          </a>
          <a href='https://www.linkedin.com/in/fred-davison-220425196/' target='_blank'
          rel="noopener noreferrer">
            <div className='img2'></div>
          </a>

        </Icons>

        <TitleDiv>
          <Title>Fred Davison</Title>
          <Title2>full-stack web developer</Title2>
        </TitleDiv>


      </header>
      <Div1>
        <a name='about'></a>
        <Title2>about</Title2>
      </Div1>

      <Div2>
        <a name='portfolio'></a>
        <Title2>portfolio</Title2>
      </Div2>

    </div>
  );
}

export default App;
