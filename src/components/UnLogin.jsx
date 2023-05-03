import React from 'react'
import Header from '../components/Header'
import * as CSS from '../components/style'


const UnLogin = () => {
  
  return (
    <CSS.HomeMain>
      <Header page={-1}/>
      <CSS.HomeContainer>
        로그인 후 내용확인이 가능합니다.
      </CSS.HomeContainer>
    </CSS.HomeMain>
  )
}

export default UnLogin

