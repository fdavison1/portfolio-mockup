import React from 'react'
import styled from 'styled-components'
import html from '../assets/HTML5_Badge.svg'
import css from '../assets/css3.png'

const Wrapper = styled.div`
position: relative;
top: 50px;
background: white;
height: 100%;
padding-bottom: 150px;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
img {
    height: 150px;
    margin-bottom: 20px;
}
h4 {
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
    margin: 20px 0;
}
.box-container {
    max-width: 1100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.box {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 250px;
    width: 250px;
    margin: 10px;
    border-radius: 5px;
    background: rgb(210, 212, 217);
    box-shadow: 1px 1px 2px #262626;
}`

const Skills = () => {
    return (
        <Wrapper>

        {/* <Title2>skills</Title2> */}
        <div className='box-container'>
          <div className='box'>
             <h4>HTML</h4>
             <img src={html} alt="HTML logo" />
           </div>
           <div className='box'>
             <h4>CSS</h4>
             <img src={css} alt="CSS logo" />
           </div>
           <div className='box'>
             <h4>Javascript</h4>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript logo" />
           </div>
           <div className='box'>
             <h4>React</h4>
             <img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt="react logo" />
           </div>
           <div className='box'>
             <h4>Redux</h4>
             <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" alt="Redux logo"/>

           </div>
           <div className='box'>
             <h4>PostgreSQL</h4>
             <img src="https://portworx.com/wp-content/uploads/2018/05/postgresql-logo.png" alt="PostgreSQL" />
           </div>
           <div className='box'>
             <h4>MongoDB</h4>
             <img src="https://miro.medium.com/max/552/1*NRCOyVBY6Jiqr4Q9A1zoaQ.png" alt="MongoDB logo" />
           </div>
           <div className='box'>
             <h4>Jest / Enzyme</h4>
             <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/940/full/jestlogo.png" alt="Jest logo" />
           </div>
         </div>


        </Wrapper>
    )
}

export default Skills
