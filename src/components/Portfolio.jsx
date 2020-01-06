import React from 'react'
import styled from 'styled-components'
import list from '../assets/screenshots/landing.png'
import fnl from '../assets/screenshots/fnl.png'

const Wrapper = styled.div`
position: relative;
top: 50px;
display: flex;
justify-content: center;
align-items: center;
background: white;
height: 100%;
padding-bottom: 150px;
box-sizing: border-box;
h2 {
    transition: 1s all ease;
    &:hover {
        color: rgb(112,191,219);
        cursor: pointer;
    }
}
img {
    transition: 1s all ease;
    height: 200px;
    border: solid 2px white;
    border-radius: 5px;
    &:hover {
        border-color: rgb(112,191,219);
        cursor: pointer;
    }
}
p {
    text-align: justify;
    font-size: 1.25rem;
}
.box {
    width: 500px;
    border-radius: 5px;
    margin: 25px;
    height: 500px;
    box-sizing: border-box;
    padding: 35px;
    background: rgb(210, 212, 217);
    display: flex;
    flex-direction: column;
    align-content: center;
    box-shadow: 1px 1px 2px #262626;
}
.text {
    font-family: sans-serif;
}
.image {
    margin-top: 25px;
}`

const A = styled.a`
text-decoration: none;`

const Portfolio = () => {
    return (
        <Wrapper>
            <div className="box">
                <A href='https://fredlist.app/' target='_blank' rel="noopener noreferrer">
                    <h2>fredlist.app</h2>
                </A>
                <div className="image">
                    <A href='https://fredlist.app/' target='_blank' rel="noopener noreferrer">
                        <img src={list} alt="screenshot of fredlist.app" />
                    </A>
                </div>
                <div className="text">
                    <p>A simple list app designed to demonstrate skills and technologies learned while participating in an immersive 13-week web development program at DevMountain.</p>
                </div>
            </div>
            <div className="box">
                <A href='https://fridaynightlite.app/' target='_blank' rel="noopener noreferrer">
                    <h2>fridaynightlite.app</h2>
                </A>
                <div className="image">
                    <A href='https://fridaynightlite.app/' target='_blank' rel="noopener noreferrer">
                        <img src={fnl} alt="screenshot of fridaynightlite.app" />
                    </A>
                </div>
                <div className="text">
                    <p>A clone of ESPN's game cast functionality intended for use by high school football teams. A group project designed and built over two weeks.</p>
                </div>
            </div>
        </Wrapper>
    )
}

export default Portfolio