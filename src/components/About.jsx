import React from 'react'
import styled from 'styled-components'
import Headshot from '../assets/Fred.jpg'

const Wrapper = styled.div`
background: white;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
padding-bottom: 100px;
box-sizing: border-box;
li {
    list-style: none;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 10px 0;
}
ul {
    text-align: left;
}
span {
    font-weight: bold;
}`

const HeadshotImg = styled.img`
    border: 1px solid #999999;
    height: 300px;
    border-radius: 50%;
    margin: 20px;
    cursor: default;`

const About = () => {
    return (
        <Wrapper>


            <HeadshotImg src={Headshot} />
            <ul>
                <li><span>Student at DevMountain</span> Immersive Web-Development Course</li>
                <li><span>BBA Economics</span> University of Georgia</li>
                <li><span>BS Industrial Engineering</span> Texas Tech University</li>
                <li><span>3 Years as Trainmaster </span> Los Angeles and Richmond, CA</li>
                <li><span>Manager of Logistics</span> Philmont Scout Ranch</li>
            </ul>


        </Wrapper>
    )
}

export default About