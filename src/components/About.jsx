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
li {
    list-style: none;
    font-family: sans-serif;
    font-size: 2rem;
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
    height: 400px;
    border-radius: 50%;
    margin: 20px;
    cursor: default;
    border: solid 8px #262626;
    `

const About = () => {
    return (
        <Wrapper>


            <HeadshotImg src={Headshot} />
            <ul>
                <li><span>DevMountain Graduate</span> Immersive Web-Development Course</li>
                <li><span>BBA Economics</span> University of Georgia</li>
                <li><span>BS Industrial Engineering</span> Texas Tech University</li>
                <li><span>3 Years as Trainmaster </span> Los Angeles and Richmond, CA</li>
                <li><span>Manager of Logistics</span> Philmont Scout Ranch</li>
            </ul>


        </Wrapper>
    )
}

export default About