import React, { useRef, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { handleSignUp } from '../axios/LoginAPI';
import useInput from '../hooks/useInput';
import Header from './Header';
import * as CSS from './style';

const SignUp = () => {
  const [id,onChangeIdHandler] = useInput('');
  const [password,onChangePasswordHandler] = useInput('');
  const [checkPassword,onChangeCheckPasswordHandler] = useInput('');

  const [warningMessage,setWarningMessage] =useState('')

  const idRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  const navigate = useNavigate();
  //회원가입 API
  const mutation = useMutation(handleSignUp,{
    onSuccess: (error) =>{
      if(error){
        setWarningMessage(error.message)
      } else {
      alert('성공')
      navigate('/login')
      }
    }
})


  const newSignUpPost = {
    id,
    password,
  }

  const onClickSignUpHandler = (e) =>{
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
    if(checkPassword.length<1){
      checkPasswordRef.current.focus();
      setWarningMessage('비밀번호 확인해주세요.')
      return;
    }
    if(password !== checkPassword){
      setWarningMessage('비밀번호가 일치하지 않습니다.')
      return;
    }
    mutation.mutate(newSignUpPost)
  }

  return (
    <>
      <Header page={-1} LoginVisible={true}/>
      <CSS.Main>
      <CSS.Login>SignUp</CSS.Login>
      <CSS.Content>
      아이디
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
      비밀번호 확인
      <CSS.InputTitle 
      name='checkPassword'
      ref={checkPasswordRef}
      size='15px' 
      type='login' 
      placeholder='PASSWORD'
      value={checkPassword}
      onChange={onChangeCheckPasswordHandler}
      />
      <CSS.WarningMessage>{warningMessage}</CSS.WarningMessage>

      </CSS.Content>
      <CSS.Button size='M' type='red' onClick={onClickSignUpHandler}>SignUp</CSS.Button>
    </CSS.Main>
    </>
  )
}

export default SignUp