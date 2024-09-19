import React, { useEffect, useState } from 'react'
import { WrapperCheckText, WrapperContainer } from './style';
import { LoginBlockContainer, LoginLabel, LoginTitle, WrapperButton } from '../LoginPage/style';
import { useNavigate } from 'react-router-dom';
import InputContainer from '../../components/InputContainer/InputContainer';
import { useMutationHook } from '../../hooks/useMutationHook';
import * as userService from '../../services/userService'


const checkMarkImage = require('../../assets/images/check-mark.png');
const checkMarkImageOK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/800px-Eo_circle_green_checkmark.svg.png'
const RegisterPage = () => {
  const navigate=useNavigate()
  
  const is8Digit = (password) => {
    return password.length >=8;
  };
  const isUpper = (password) => {
    return /[A-Z]/.test(password);
  };
  const isNumber = (password) => {
    return /\d/.test(password);
  };

  const handleNavigateLogin = () => {
    navigate('/login');
    window.scroll(0,0);
  }

  const [fullName, setFullname] = useState('')
  const handleFullnameChange = (text) => {
    setFullname(text)
  } 

  const [phoneNumber, setPhoneNumber] = useState('')
  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text)
  } 

  const [emailCheckbox, setEmailCheckbox] = useState(false)
  const tickEmail = () => {
    setEmailCheckbox(!emailCheckbox)
  }

  const [email, setEmail] = useState("")
  const handleEmailChange = (text) => {
    setEmail(text)
  } 

  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('');
  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setMessage('Độ dài tối thiểu của trường này là 8 ký tự. Khoảng trống đầu và cuối sẽ bị xóa.');
    } else if (!isNumber(newPassword)) {
      setMessage('Mật khẩu phải chứa ít nhất một ký tự số.');
    } else if (!isUpper(newPassword)) {
      setMessage('Mật khẩu phải chứa ít nhất một ký tự viết hoa.');
    } else {
      setMessage(null);
    }
  };

  const [confirmPassword, setConfirmPassword] = useState('')
  const handleConfirmPasswordChange = (confirmPassword) => {
    setConfirmPassword(confirmPassword)
  }

  const [receiveNew, setReceiveNew] = useState("false")
  const handleReceiveNewChange = () => {
    if (receiveNew==="true") {
      setReceiveNew("false")
    } else {
      setReceiveNew("true")
  }
  }

  const [agree, setAgree] = useState(false)
  const handleAgreeChange = () => {
    setAgree(!agree)
  }

  const [signUpMessage, setSignUpMessage] = useState('')

  const mutation = useMutationHook(data => userService.userSignup(data))
  const { data } = mutation
  const onClickSignUp = async () => {
    setReceiveNew(receiveNew.toString())
    if (agree && message === null && fullName !== '' && phoneNumber !== ''  && password !== '' && confirmPassword !== '') {
      if (password === confirmPassword) {
        
        mutation.mutate({
          fullName,
          phoneNumber,
          password,
          re_password: confirmPassword,
          receiveNew,
          email,
        });
      } 
      else {
        setSignUpMessage('Mật khẩu và xác nhận mật khẩu phải trùng khớp.');
      }
    } else {
      let missingFields = [];
      if (!agree) {
        missingFields.push('Bạn phải đồng ý với các Điều khoản sử dụng và Chính sách bảo mật.');
      }
      if (message !== null) {
        missingFields.push(message);
      }
      if (fullName === '') {
        missingFields.push('Hãy nhập họ và tên.');
      }
      if (phoneNumber === '') {
        missingFields.push('Hãy nhập số điện thoại.');
      }
      if (!emailCheckbox && email === '') {
        missingFields.push('Hãy nhập địa chỉ email.');
      }
      if (password === '') {
        missingFields.push('Hãy nhập mật khẩu.');
      }
      if (confirmPassword === '') {
        missingFields.push('Hãy nhập xác nhận mật khẩu.');
      }
      
      setSignUpMessage(missingFields.join(' '));
    }
  }

  useEffect(() => {
    if (data?.message==="SUCCESS") {
      window.alert('Success')
      navigate('/login')
    }
  },[])
  return (
    <WrapperContainer>
      <LoginTitle>ĐĂNG KÝ</LoginTitle>
      <div style={{display: 'flex'}}> 
        <span style={{marginRight: '5px'}}>Bạn đã có tài khoản?</span>
        <span style={{color: '#3e72d6', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => handleNavigateLogin()}>Đăng nhập</span>
      </div>
      <LoginBlockContainer>
        <div style={{marginTop: '15px', marginLeft: '15px', marginBottom: '15px'}}>
          <LoginLabel>Họ và tên <span style={{color: 'red'}}>*</span></LoginLabel>
          <InputContainer onTextChange={handleFullnameChange} placeholder={'Nhập họ và tên của bạn'}/>
          <LoginLabel>Số điện thoại <span style={{color: 'red'}}>*</span></LoginLabel>
          <InputContainer onTextChange={handlePhoneNumberChange} placeholder={'Nhập số điện thoại của bạn'}/>
          <LoginLabel>Email</LoginLabel>
          <InputContainer onTextChange={handleEmailChange} placeholder={'Nhập Email của bạn'} type={'email'}/>
          <div style={{display: 'flex'}}>
            <input 
                checked={emailCheckbox}
                type='checkbox' 
                style={{height: '15px', width:'15px', marginTop: '11px', marginRight: '10px'}}
                onChange={tickEmail}
                />
            <LoginLabel>Tôi không có địa chỉ email</LoginLabel>
          </div>
          {emailCheckbox && (<div style={{fontSize: '14px', color: 'red'}}>Bạn sẽ không nhận được thông tin các chương trình khuyến mãi của Hoàng Phúc qua email.</div>)}
          <LoginLabel>Mật khẩu <span style={{color: 'red'}}>*</span></LoginLabel>
          <InputContainer placeholder={'Nhập mật khẩu của bạn'} type={'password'}
              onTextChange={(newPassword) => handlePasswordChange(newPassword)}
          />
          <div style={{display: 'flex'}}>
            <img src={is8Digit(password) ? checkMarkImageOK : checkMarkImage} alt="Check Mark"  style={{height: '15px',  marginTop: '3px', marginRight: '3px'}}/>          
            <WrapperCheckText>Có độ dài từ 8 ký tự trở lên.</WrapperCheckText>
            <img src={isUpper(password) ? checkMarkImageOK : checkMarkImage} alt="Check Mark"  style={{height: '15px',  marginTop: '3px', marginRight: '3px'}}/>          
            <WrapperCheckText>Có ít nhất 1 chữ cái viết hoa.</WrapperCheckText>
            <img src={isNumber(password) ? checkMarkImageOK : checkMarkImage} alt="Check Mark"  style={{height: '15px',  marginTop: '3px', marginRight: '3px'}}/>          
            <WrapperCheckText>Có ít nhất 1 chữ số.</WrapperCheckText>
          </div>
          <div style={{fontSize: '12px', color: 'red'}}>{message}</div>
          <LoginLabel>Nhắc lại mật khẩu<span style={{color: 'red'}}>*</span></LoginLabel>
          <InputContainer placeholder={'Nhập mật khẩu của bạn'} type={'password'}
              onTextChange={handleConfirmPasswordChange}
          />
          <div style={{display: 'flex'}}>
            <input 
                checked={receiveNew === "true" ? true : false}
                type='checkbox' 
                style={{height: '15px', width:'15px', marginTop: '11px', marginRight: '10px'}}
                onChange={handleReceiveNewChange}
                />
            <LoginLabel>Đăng ký nhận thông tin mới nhất và ưu đãi độc quyền từ Hoàng Phúc.</LoginLabel>
          </div>
          <div style={{display: 'flex'}}>
            <input 
                checked={agree}
                type='checkbox' 
                style={{height: '15px', width:'15px', marginTop: '11px', marginRight: '10px'}}
                onChange={handleAgreeChange}
                />
            <LoginLabel>Tôi đồng ý với các <span style={{color: '#3E72D6'}}>Điều khoản sử dụng</span> và <span style={{color: '#3E72D6'}}>Chính sách bảo mật</span> của Hoàng Phúc.</LoginLabel>
          </div>
          <div style={{fontSize: '12px', color: 'red'}}>{signUpMessage}</div>
          <div style={{fontSize: '12px', color: 'red'}}>{data?.message}</div>

          <WrapperButton onClick={onClickSignUp}>ĐĂNG KÝ</WrapperButton>
        </div>
      </LoginBlockContainer>
    </WrapperContainer>
  )
}

export default RegisterPage