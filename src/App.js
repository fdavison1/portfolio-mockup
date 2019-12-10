import React from 'react';
import styled from 'styled-components'
import './App.css'
import Landing from './assets/screenshots/landing.png'
import Dash from './assets/screenshots/dash.png'
import Headshot from './assets/Fred.jpg'
import Footer from './Footer'

const Title = styled.h1`
color: #262626
font-family: Poppins, sans-serif;
font-weight: 700
padding: 0
margin: 10px
line-height: 5rem
font-size: 5rem
opacity: 1`

const Title2 = styled.h1`
color: #262626
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
`

const TitleDiv = styled.div`
padding: 5px
opacity: .9
`


const Div2 = styled.div`
display: flex
flex-direction: column
align-items: center
justify-content: center
box-sizing: border-box
padding: 50px
background: white`

const Icons = styled.div`
position: fixed
right: 25px
bottom: 15px
display: flex
flex-direction: column
align-items: center
justify-content: center
opacity: .85
`
const A = styled.a`
text-decoration: none`


const Thumbnail = styled.img`
transition: .5s ease
height: 300px
margin: 20px
border-radius: 5px
box-sizing: border-box
border: 1px solid #999999
&:hover {
  border: 2px solid purple
  cursor: pointer
}`

const Paragraph = styled.p`
font-size: 1.2rem
font-family: sans-serif
font-weight: 200
text-align: left
margin: 10px`

const HeadshotImg = styled.img`
border: 1px solid #262626
height: 300px
border-radius: 50%
margin: 20px
cursor: default`

const AboutDiv = styled.div`
display: flex
align-items: center
margin: 15px
border-radius: 10px
padding: 20px 0
box-sizing: border-box
display: flex
justify-content: center`

const ListItem = styled.li`
font-family: sans-serif
font-weight: 200
font-size: 1.2rem
text-align: left
line-height: 2rem`

const Banner = styled.div`
background: #f3b54a;
  padding: 35px;
  border-radius: 3px;
  display: flex
  height: 200px
  align-items: center
  width: 1000px
  `

const Banner2 = styled.div`
background: #6e7889
  padding: 35px;
  border-radius: 3px;
  display: flex
  height: 200px
  align-items: center
  width: 1000px
  `

const ListApp = styled.div``

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          {/* <A href='#about'>
            <SubTitle>about</SubTitle>
          </A>
          <A href='#portfolio'>
            <SubTitle>portfolio</SubTitle>
          </A> */}

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

      <Div2>
        <A name='about'></A>
        <Title2>portfolio</Title2>
        <AboutDiv>
          <Banner2>
          <Thumbnail src={Landing} />
          <ListApp>
          <SubTitle>List App</SubTitle>
          <Paragraph>A simple list app designed to demonstrate skills and technologies learned while participating in an immersive 13-week web development program at DevMountain.</Paragraph>
          </ListApp>
        </Banner2>
        </AboutDiv>
      </Div2>
      <Div2>

        <A name='about'></A>
        <Title2>about</Title2>
        <AboutDiv>
          <Banner>
          <HeadshotImg src={Headshot} />
          <ul>
            <ListItem><span>Student at DevMountain</span> Immersive Web-Development Course</ListItem>
            <ListItem><span>BBA Economics</span> University of Georgia</ListItem>
            <ListItem><span>BS Industrial Engineering</span> Texas Tech University</ListItem>
            <ListItem><span>3 Years as Trainmaster </span> Los Angeles and Richmond, CA</ListItem>
            <ListItem><span>Manager of Logistics</span> Philmont Scout Ranch</ListItem>
          </ul>
        </Banner>
        </AboutDiv>
      </Div2>



      <Footer/>
    </div>
  );
}

export default App;
