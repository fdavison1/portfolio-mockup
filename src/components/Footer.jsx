import React from 'react'
import styled from 'styled-components'
import cat from '../assets/cat-white.png'
import ln from '../assets/In-white.png'
import pinkcat from '../assets/cat-pink.png'
import pinkln from '../assets/In-pink.png'

const Wrapper = styled.div`
opacity: .8;
z-index: 2;
height: 100px;
background: #262626;
color: white;
/* color: rgb(112,191,219); */
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px;
box-sizing: border-box;
/* position: fixed; */
/* bottom: 0; */
p {
    font-size: 2.5rem;
    font-family: sans-serif;
    font-weight: 100;
}
span {
    font-size: 2.5rem;
    font-weight: 700;
}
.left {

}
.right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: .85;
    width: 150px;
}
.img, .img2 {
  height: 65px;
  margin: 5px 0;
  margin: 5px 0;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.img {
  transition: background .5s ease;
  background: url(${cat});
  background-size: 100%;
  height: 60px;
  width: 60px;
  &:hover {
    cursor: pointer;
  background: url(${pinkcat});
  background-size: 100%; 
  height: 60px;
  width: 60px;
  }
}
.img2 {
transition: background .5s ease;
  background: url(${ln});
  background-size: 100%; 
  height: 55px;
  width: 55px;
    &:hover {
        cursor: pointer;
    background: url(${pinkln});
    background-size: 100%; 
    height: 55px;
    width: 55px;
    }
}
.footer {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 50px;
    box-sizing: border-box;
}`

const Footer = () => {
    return (
        <Wrapper>
            <div className="footer">
            <div className="left">
                {/* <a href="#top"> */}
                <p><span>Fred Davison</span> 2019</p>
                {/* </a> */}
            </div>

            <div className="right">
            <a href='https://github.com/fdavison1' target='_blank'
             rel="noopener noreferrer">
             <div className='img'></div>
           </a>
           <a href='https://www.linkedin.com/in/fred-davison-220425196/' target='_blank'
             rel="noopener noreferrer">
             <div className='img2'></div>
           </a>
            </div>
            </div>
        </Wrapper>
    )
}

export default Footer