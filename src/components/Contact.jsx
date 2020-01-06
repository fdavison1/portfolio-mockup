import React from 'react'
import styled from 'styled-components'
import phone from '../assets/phone.jpg'

const Wrapper = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding-bottom: 100px;
ul {
    text-align: left;
}
li {
    list-style: none;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 10px 0;
}
span {
    font-weight: bold;
}
.splash {
    background: url(${phone});
    /* background-position: 0 -50px; */
    background-size: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    top: 50px;
    padding-bottom: 50px;
}`

const A = styled.a`
 text-decoration: none;
 color: #262626;`

const Contact = () => {
    return (
        <Wrapper>
            <div className="splash">
                <ul>
                    <li><A href="https://github.com/fdavison1" target="_blank"><span>GitHub:</span> https://github.com/fdavison1</A></li>
                    <li><A href="https://www.linkedin.com/in/fdavison1/" target="_blank"><span>LinkedIn:</span> https://www.linkedin.com/in/fdavison1</A></li>
                    <li><A><span>Email: </span> fred.davison@outlook.com</A></li>
                </ul>
            </div>

        </Wrapper>
    )
}

export default Contact