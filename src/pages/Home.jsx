import React from 'react'
import Header from '../components/Header'
import * as CSS from '../components/style'


const Home = () => {
  
  return (
    <CSS.HomeMain>
      <Header Visible={true}/>
      <CSS.HomeContainer>
        <CSS.HomeTextLink to="/main">대나무숲 산책하기➡️</CSS.HomeTextLink>
        <CSS.Bamboo/>
        <CSS.panda/>

      </CSS.HomeContainer>
    </CSS.HomeMain>
  )
}

export default Home