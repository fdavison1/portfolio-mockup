import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'
// import Portfolio from './Portfolio'
import phone from '../assets/phone.jpg'

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
    font-size: 2.75rem;

}
.splash {
    background: url(${phone});
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
}
.overlay {
    flex-direction: column;
    display: flex;
    position: relative;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(112,120,136, 0.3);
    align-items: center;
    justify-content: center;
}
.container {
    height: calc(100vh - 100px);
    width: 100vw;
    background: #fff;
    /* position: sticky; */
    /* bottom: 0; */
}`

const Main = () => {
    return (
        <Wrapper>
            <div name='top' className="splash">
            <div className="overlay">
                <h1>Fred Davison</h1>
                <h2>full-stack web developer</h2>
            </div>
            </div>


            <div className='container'>
                < Header />
                

                {/* routes */}
           

            </div>
            <Footer />
        </Wrapper>
    )
}

export default Main