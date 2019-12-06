import React from 'react'
import styled from 'styled-components'
// import linked from '../assets/In.png'
// import github from '../assets/25231.png'

export const Stripe = styled.div`
display: flex
flex-direction: column
align-items: center
box-sizing: border-box
width: 100%
height: 165px
background: rgb(222,222,222)`
const Foot = styled.div`
margin: 10px
padding: 0 50px
height: 300px
box-sizing: border-box
display: flex
align-items: center
justify-content: space-between
width: 1100px
@media (max-width: 1025px){
    width: 800px
}
@media (max-width: 500px){
    width: 100vw
    justify-content: space-evenly
    margin: 0
}`
const LogoBox = styled.div`
display: flex
align-items: center`
const Paragraph = styled.p`
font-size: 1.2rem
font-family: sans-serif
font-weight: 200`

export default function Footer() {
    return (
        <Stripe>
            <Foot>
                <Paragraph>
                    <span>Fred Davison</span> DevMountain Student 2019
                </Paragraph>
                <LogoBox>
                    <a href='https://www.linkedin.com/in/fred-davison-220425196/' target='_blank'
                        rel="noopener noreferrer">
                        {/* <FootLogo src={linked} alt="linkedIn logo" /> */}
                    </a>
                    <a href='https://github.com/fdavison1' target='_blank'
                        rel="noopener noreferrer">
                        {/* <FootLogo src={github} alt="github logo" /> */}
                    </a>
                </LogoBox>
            </Foot>
        </Stripe>
    )
}