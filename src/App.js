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
margin-top: 50px
font-size: 3.5rem
opacity: 1`

const SubTitle = styled.h3`
transition: color .5s ease;
font-size: 2rem
margin: 0
color: #262626
font-family: sans-serif
font-weight: 300
&:hover {
  color: pink
  cursor: pointer
}
opacity: .85
`

const TitleDiv = styled.div`
padding: 5px
color: white
opacity: .9
text-shadow: 1.5px 1.5px #262626
`

const Div1 = styled.div`
height: 100vh
padding: 50px
background: white`

const Div2 = styled.div`
height: 100vh
padding: 50px
background: rgb(161,161,161)`

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
          <a href='https://github.com/fdavison1' target='_blank'>
            <div className='img'></div>
          </a>
          <a href='https://www.linkedin.com/in/fred-davison-220425196/' target='_blank'>
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
