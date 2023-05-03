import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './componet/Button'
import * as CSS from './style'

const Header = ({Visible,page,LoginVisible}) => {

  const [login, setLogin] = useState('login')

  useEffect(()=>{
    if(Cookies.get('token') !==undefined){
      setLogin('logout')
    }
  },[])

  const onClickLoginButtonHandler = () => {
    Cookies.remove('token')
  }

  return (
    <CSS.Header>
      <Link to={page}>
      {!Visible && <Button>이전으로</Button>}
      {!Visible && <Button></Button>}
      </Link>
      <CSS.Title>항해99 대나무 숲</CSS.Title>
        <Link to='/login'>
      {!LoginVisible && <Button onClick={onClickLoginButtonHandler}>{login}</Button>}
        </Link>
    </CSS.Header>
  )
}

export default Header