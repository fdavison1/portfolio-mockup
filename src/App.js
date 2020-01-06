import React from 'react';
import styled from 'styled-components'
import './App.css'
import Main from './components/Main'

const Wrapper = styled.div`
text-align: center;
`

const App = () => {
  return (
    <Wrapper>
        <Main />
    </Wrapper>
  )
}

export default App;