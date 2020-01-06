import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
height: 100px;
background: #262626;
color: white;
width: 100%;
display: flex;
align-items: center;
/* justify-content: center; */
padding-left: 50px;
box-sizing: border-box;
p {
    font-size: 2rem;
    font-family: sans-serif;
    font-weight: 100;
}
span {
    font-size: 2rem;
    font-weight: 700;
}`

const Footer = () => {
    return (
        <Wrapper>
            <p><span>Fred Davison</span> 2019</p>
        </Wrapper>
    )
}

export default Footer