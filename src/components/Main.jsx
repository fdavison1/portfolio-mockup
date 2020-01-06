import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
import routes from '../routes'
import react from '../assets/react.svg'

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1 {
    color: #262626;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    padding: 0;
    margin: 10px;
    line-height: 5rem;
    font-size: 5rem;
}
h2{
    color: #262626;
    font-family:  sans-serif;
    font-weight: 200;
    padding: 0;
    margin: 0;
    font-size: 3rem;

}
.splash {
    background: url(${react});
    background-size: 50px 50px;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    margin: 0;
    display: flex;
    align-items: center;
    background-position: center center;
}
.overlay {
    flex-direction: column;
    display: flex;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: 2;
    color: #262626;
}
.overlay h1 {
    position: relative;
    top: -150px;
    z-index: 2;
}
.overlay h2 {
    position: relative;
    top: 150px;
    font-weight: bold;
}
.container {
    height: calc(100vh - 100px);
    width: 100vw;
    background: #fff;
}
.routes {
    height: 100%;
}`

const Main = () => {
    return (
        <Wrapper>
            <div name='top' className="splash">
            </div>
            <div className="overlay">
                <h1>Fred Davison</h1>
            </div>
            <div className="overlay">
                <h2>full-stack web developer</h2>
            </div>


            <div className='container'>
                < Header />
                
                <div className="routes">
                {routes}
                </div>
           

            </div>
            <Footer />
        </Wrapper>
    )
}

export default Main