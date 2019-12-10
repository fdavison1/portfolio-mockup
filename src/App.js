import React from 'react';
import styled from 'styled-components'
import './App.css'
import Landing from './assets/screenshots/landing.png'
// import Dash from './assets/screenshots/dash.png'
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

const Div1 = styled.div`
display: flex
flex-direction: column
align-items: center
justify-content: center
box-sizing: border-box
padding: 50px
background: white
@media (max-width: 500px){
  background: #6e7889;
  margin: 0
  padding: 0
  height: 100vh
}`

const Div2 = styled.div`
display: flex
flex-direction: column
align-items: center
justify-content: center
box-sizing: border-box
padding: 50px
background: white
@media (max-width: 500px){
  background: #f3b54a;
  margin: 0
  padding: 0
}`

const Icons = styled.div`
position: fixed
right: 25px
bottom: 15px
display: flex
flex-direction: column
align-items: center
justify-content: center
opacity: .85
@media (max-width: 500px){
  position: absolute
  bottom: 15px
}`

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
}
@media (max-width: 500px){
  height: 200px
}`

const Paragraph = styled.p`
font-size: 1.2rem
font-family: sans-serif
font-weight: 200
text-align: left
margin: 10px
@media (max-width: 500px){
  text-align: center
}`

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
justify-content: center
`

const ListItem = styled.li`
font-family: sans-serif
font-weight: 200
font-size: 1.2rem
text-align: left
line-height: 2rem
@media (max-width: 500px){
  font-size: 1rem
  line-height: 1.5rem
  width: 400px
  list-style-type: none
  text-align: center
  padding: 0
}`

const Banner = styled.div`
background: #f3b54a;
  padding: 35px;
  border-radius: 3px;
  display: flex
  height: 200px
  align-items: center
  width: 1000px
  @media (max-width: 500px){
    padding: 0
    width: 400px
    flex-direction: column
    height: 100vh
  }`

const Banner2 = styled.div`
background: #6e7889
  padding: 35px;
  border-radius: 3px;
  display: flex
  align-items: center
  width: 1000px
  @media (max-width: 500px){
    padding: 0
    flex-decoration: column
    height: auto
    width: 400px
  }`

  const Break =styled.br`
  display: none
  @media (max-width: 500px){
    display: block
  }`

const ListApp = styled.div`
@media (max-width: 500px){
  text-align: center
}`



const MobileDiv = styled.div`
display: flex
align-items: center
@media (max-width: 500px){
  flex-direction: column
}`

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

      <Div1>
        <A name='about'></A>
        <Title2>portfolio</Title2>
        <AboutDiv>
          <Banner2>
          <MobileDiv>
          <a href='https://fredlist.app/' target='_blank' rel="noopener noreferrer">
          <Thumbnail src={Landing} />
          </a>
          <ListApp>
          <A href='https://fredlist.app/' target='_blank' rel="noopener noreferrer">
          <SubTitle>List App</SubTitle>
          </A>
          <Paragraph>A simple list app designed to demonstrate skills and technologies learned while participating in an immersive 13-week web development program at DevMountain.</Paragraph>
          </ListApp>
          </MobileDiv>
        </Banner2>
        </AboutDiv>
      </Div1>
      
      <Div2 className='about'>
        <A name='about'></A>
        <Title2>about</Title2>
        <AboutDiv>
          <Banner>
          <HeadshotImg src={Headshot} />
          <ul>
            <ListItem><span>Student at DevMountain</span> <Break />Immersive Web-Development Course</ListItem>
            <ListItem><span>BBA Economics</span> <Break/>University of Georgia</ListItem>
            <ListItem><span>BS Industrial Engineering</span> <Break/>Texas Tech University</ListItem>
            <ListItem><span>3 Years as Trainmaster </span> <Break/>Los Angeles and Richmond, CA</ListItem>
            <ListItem><span>Manager of Logistics</span> <Break/>Philmont Scout Ranch</ListItem>
          </ul>
        </Banner>
        </AboutDiv>
      </Div2>



      <Footer/>
   
    </div>
  );
}

export default App;
