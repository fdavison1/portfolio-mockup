import React from 'react'
import styled from 'styled-components'
import Landing from '../assets/screenshots/landing.png'
import fnl from '../assets/screenshots/fnl.png'

const Wrapper = styled.div`
background: white;`

const Thumbnail = styled.img`
transition: .5s ease;
height: 300px;
margin: 20px;
border-radius: 5px;
box-sizing: border-box;
border: 1px solid #999999;
&:hover {
  border: 2px solid purple;
  cursor: pointer;
}
@media (max-width: 500px){
  height: 200px;
}`

const Paragraph = styled.p`
color: white;
font-size: 1.2rem;
font-family: sans-serif;
font-weight: 200;
text-align: center;
margin: 10px;
@media (max-width: 500px){
  text-align: center;
  color: #262626;
}`

const Banner2 = styled.div`
background: #6e7889;
  padding: 35px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  width: 1000px;
  margin: 25px;
  @media (max-width: 500px){
    padding: 0;
    flex-decoration: column;
    height: auto;
    width: 400px;
  }`

const ListApp = styled.div`
@media (max-width: 500px){
  text-align: center;
}`

const MobileDiv = styled.div`
display: flex;
align-items: center;
@media (max-width: 500px){
  flex-direction: column;
}`

const A = styled.a`
text-decoration: none;
color: #262626;`

const SubTitle = styled.h3`
transition: color .5s ease;
font-size: 2rem;
margin: 0;
color: #262626;
font-family: sans-serif;
font-weight: 300;
&:hover {
  color: purple;
  cursor: pointer;
}
`

const Portfolio = () => {
    return (
        <Wrapper>

        

          <Banner2>
            <MobileDiv>
              <a href='https://fredlist.app/' target='_blank' rel="noopener noreferrer">
                <Thumbnail src={Landing} />
              </a>
              <ListApp>
                <A href='https://fredlist.app/' target='_blank' rel="noopener noreferrer">
                  <SubTitle id='fredlist'>fredlist.app</SubTitle>
                </A>
                <Paragraph>A simple list app designed to demonstrate skills and technologies learned while participating in an immersive 13-week web development program at DevMountain.</Paragraph>
              </ListApp>
            </MobileDiv>
          </Banner2>
              
              
            <Banner2>
            <MobileDiv>
              <a href='https://fridaynightlite.app/' target='_blank' rel="noopener noreferrer">
                <Thumbnail src={fnl} />
              </a>
              <ListApp>
              <A href='https://fridaynightlite.app/' target='_blank' rel="noopener noreferrer">
                  <SubTitle id='fredlist'>fridaynightlite.app</SubTitle>
                </A>
                <Paragraph>A clone of ESPN's game cast functionality intended for use by high school football teams. A group project designed and built over two weeks.</Paragraph>
              </ListApp>
              </MobileDiv>
              </Banner2>


        </Wrapper>
    )
}

export default Portfolio