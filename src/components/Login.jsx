import Cookies from 'js-cookie'
import React, { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogin } from '../axios/LoginAPI'
import useInput from '../hooks/useInput'
import Header from './Header'
import * as CSS from './style'


const Login = () => {

  const [id,onChangeIdHandler] = useInput('');
  const [password,onChangePasswordHandler] = useInput('');
  const [warningMessage,setWarningMessage] =useState('')

  const idRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  //회원가입 API
  const expiresInSeconds = new Date(new Date().getTime()+ 10*60*1000)
  const mutation = useMutation(handleLogin,{
    onSuccess: (data) =>{
      if(data.token){
        Cookies.set('token',data.token,{ expires: expiresInSeconds })
        navigate('/')
      }else{
        setWarningMessage(data.message)
      }
    }
})

  const newLoginPost = {
    id,
    password,
  }

  const onClickLoginHandler = (e) =>{
    if(id.length<1){
      idRef.current.focus();
      setWarningMessage('이메일을 입력해주세요.')
      return;
    }
    if(password.length<1){
      passwordRef.current.focus();
      setWarningMessage('비밀번호를 입력해주세요.')
      return;
    }

    mutation.mutate(newLoginPost)
  }

  return (
    <>
      <Header page={-1} LoginVisible={true} />
      <CSS.Main>
      <CSS.Login>Login</CSS.Login>
      <CSS.Content>
      이메일
      <CSS.InputTitle 
      name='id'
      ref={idRef}
      size='15px' 
      type='login' 
      width='300px' 
      placeholder='USER ID'
      value={id}
      onChange={onChangeIdHandler}
      />
      비밀번호    
      <CSS.InputTitle 
      name='password'
      ref={passwordRef}
      size='15px' 
      type='login' 
      placeholder='PASSWORD'
      value={password}
      onChange={onChangePasswordHandler}
      />
      <CSS.WarningMessage>{warningMessage}</CSS.WarningMessage>
      </CSS.Content>
      <CSS.Button size='M' type='blue' onClick={onClickLoginHandler}>login</CSS.Button>
      <Link to='/signUp'>
      <CSS.Button size='M' type='red'>SignUp</CSS.Button>
      </Link>
    </CSS.Main>
    </>
  )
}

export default Login