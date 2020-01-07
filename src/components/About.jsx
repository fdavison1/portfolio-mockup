import React from 'react'
import styled from 'styled-components'
import Headshot from '../assets/Fred.jpg'

const Wrapper = styled.div`
position: relative;
top: 50px;
background: white;
display: flex;
align-items: center;
justify-content: center;
height: 100%;
padding-bottom: 150px;
box-sizing: border-box;
@media (max-width: 500px){
        padding-bottom: 50px;
        flex-direction: column;
    }
li {
    list-style: none;
    font-family: sans-serif;
    font-size: 2rem;
    font-weight: 300;
    margin: 10px 0;
    @media (max-width: 500px){
       font-size: 1rem; 
    }
}
ul {
    text-align: left;
    @media (max-width: 500px){
        margin: 0;
        padding: 10px;
        text-align: center;
    }
}
span {
    font-weight: bold;
}`

const HeadshotImg = styled.img`
    border: 1px solid #999999;
    height: 400px;
    border-radius: 50%;
    margin: 20px;
    cursor: default;
    border: solid 1px #262626;
    box-shadow: 1px 1px 2px #262626;
    @media (max-width: 500px){
        height: 200px;
    }
    `
const Break = styled.br`
display: none;
 @media (max-width: 500px){
        display: block;
        height: 20px;
    }`

const About = () => {
    return (
        <Wrapper>


            <HeadshotImg src={Headshot} />
            <ul>
                <li><span>DevMountain Graduate</span><Break/> Immersive Web-Development Course</li>
                <li><span>BBA Economics</span><Break/> University of Georgia</li>
                <li><span>BS Industrial Engineering</span><Break/> Texas Tech University</li>
                <li><span>3 Years as Trainmaster </span><Break/> Los Angeles and Richmond, CA</li>
                <li><span>Manager of Logistics</span><Break/> Philmont Scout Ranch</li>
            </ul>


        </Wrapper>
    )
}

export default About