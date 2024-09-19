import React, { useEffect, useState } from 'react'
import { LoginBlockContainer, LoginContainer, LoginLabel, LoginTitle, LoginType, LoginTypeTitle,WrapperButton } from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import InputContainer from '../../components/InputContainer/InputContainer'
import * as userService from '../../services/userService'
import { useMutationHook } from '../../hooks/useMutationHook'
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux"
import { updateUser } from '../../Redux/slice/userSlice'
const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isLoginSMS, setIsLoginSMS] = useState(true)
  const [isLoginPass, setIsLoginPass] = useState(false) 
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const disPatch = useDispatch()
  const handleUsernameChange = (text) => {
    setUsername(text)
  }
  const handlePassChange = (text) => {
    setPassword(text)
  }
  
  const mutation = useMutationHook(data => userService.loginUser(data))

  const {data, isSuccess} = mutation

  useEffect(() => {
    if (data?.access_token) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
        window.scrollTo(0,0)
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailUser(decoded?.id, data?.access_token)
        }
      }
    }
  }, [data?.access_token])
  const handleGetDetailUser = async (id, token) => {
    const storage = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storage)
    const res = await userService.getDetailUser(id, token)
    disPatch(updateUser({ ...res?.data, access_token: token,refresh_token: refreshToken }))
  }

  const onClickLoginSMS = () => {
        setIsLoginSMS(true);
        setIsLoginPass(false);
    }
  const onClickLoginPass = () => {
        setIsLoginSMS(false);
        setIsLoginPass(true);
    }

  const handleNavigateRegister = () => {
    navigate('/register');
    window.scroll(0,0);
  }

  const onClickLogin = async () => {
    mutation.mutate({
        username: username, 
        password
    })
  }

  return (
    <LoginContainer>
        <LoginTitle>ĐĂNG NHẬP</LoginTitle>
        <div style={{display: 'flex'}}> 
          <span style={{marginRight: '5px'}}>Bạn chưa có tài khoản?</span>
          <span style={{color: '#3e72d6', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => handleNavigateRegister()}>Đăng ký ngay</span>
        </div>
        <LoginBlockContainer>
            <div style={{display: 'flex'}}>
              <LoginType>
                    <LoginTypeTitle onClick={onClickLoginSMS} borderBottom={isLoginSMS ? '2px solid gray' : '0px'}>Đăng nhập bằng OTP</LoginTypeTitle> 
              </LoginType>
              <LoginType>
                    <LoginTypeTitle onClick={onClickLoginPass} borderBottom={isLoginPass ? '2px solid gray' : '0px'}>Đăng nhập bằng mật khẩu</LoginTypeTitle>
              </LoginType>
            </div>
            {isLoginSMS && (
                <div style={{marginTop: '15px', marginLeft: '15px', display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                    <LoginLabel>Số điện thoại <span style={{color: 'red'}}>*</span></LoginLabel>
                    <div style={{ display: 'flex'}}>
                        <div style={{ position: 'relative', display: 'flex',alignItems: 'center' }}>
                           <InputContainer placeholder={'Nhập số điện thoại của bạn'} onTextChange={handleUsernameChange}/>
                            <button
                                style={{
                                    position: 'absolute',
                                    width: '150px',
                                    borderRadius: '6px',
                                    color: 'gray',
                                    border: 'none',
                                    cursor: 'pointer',
                                    right: '5px',
                                    backgroundColor: '#f6f6f6',
                                    textDecoration: 'none', 
                                    transition: 'text-decoration 0.2s',
                                }}
                            >
                                Gửi mã xác nhận
                            </button>
                        </div>
                    </div>
                    <LoginLabel>Mã xác nhận <span style={{color: 'red'}}>*</span></LoginLabel>
                    <InputContainer placeholder={'Nhập mã xác nhận'} onTextChange={handlePassChange}/>
                    <WrapperButton> 
                        ĐĂNG NHẬP
                    </WrapperButton>
                </div>
            )}
            {isLoginPass && (
                <div style={{marginTop: '15px', marginLeft: '15px', display: 'flex', flexDirection: 'column', marginBottom: '20px'}}>
                    <LoginLabel>Số điện thoại/Email <span style={{color: 'red'}}>*</span></LoginLabel>
                    <InputContainer placeholder={'Nhập số điện thoại/email của bạn'} type={'text'} onTextChange={handleUsernameChange}/>
                    <LoginLabel>Mật khẩu <span style={{color: 'red'}}>*</span></LoginLabel>
                    <InputContainer placeholder={'Nhập mật khẩu của bạn'} type={'password'} onTextChange={handlePassChange}/>
                    {data?.status === 'ERROR' && <span style={{color: 'red', fontSize: '12px'}}>{data?.message}</span>}
                    <WrapperButton onClick={onClickLogin}> 
                        ĐĂNG NHẬP
                    </WrapperButton>
                </div>
            )}
        </LoginBlockContainer>
    </LoginContainer>  )
}

export default LoginPage