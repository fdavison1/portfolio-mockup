import React from 'react'
import styled from 'styled-components'
import phone from '../assets/phone.jpg'

const Wrapper = styled.div`
position: relative;
top: 50px;
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
    font-size: 2rem;
    font-weight: 300;
    margin: 10px 0;
}
span {
    font-weight: bold;
}
.phone {
    background: url(${phone});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}`

const A = styled.a`
 text-decoration: none;
 color: #262626;`

const Contact = () => {
    return (
        <Wrapper>
            <div className="phone">
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