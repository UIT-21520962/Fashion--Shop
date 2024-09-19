import React, { useState } from 'react'
import { WraperTextCheckBox, WrapperAvatar, WrapperBigInfoContainer, WrapperPolicyCheck, WrapperLabel, WrapperLabelSmall } from './style'
import InputContainer from '../../components/InputContainer/InputContainer'
import { useSelector } from 'react-redux'
import { WrapperCheckText } from '../RegisterPage/style';
import { WrapperButton } from '../LoginPage/style';
import Profile from './Profile';


const checkMarkImage = require('../../assets/images/check-mark.png');
const checkMarkImageOK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/800px-Eo_circle_green_checkmark.svg.png'

const AccountEdit = () => {
    const user = useSelector((state) => state.user);

    const [isCheckedGender, setCheckGender] = useState('');

    const ClickCheckGender = (gender) => {
        setCheckGender(gender)
    };



    const name = user?.fullName
    const phone = user?.phoneNumber
    const mail = user?.email
    const [fullName, setFullName] = useState(name)
    const [phoneNumber, setPhoneNumber] = useState(phone)
    const [email, setEmail] = useState(mail)
    const handleNameChange = (newFullName) => {
        setFullName(newFullName);
    };

    const handlePhoneChange = (newPhone) => {
        setPhoneNumber(newPhone)
    }

    const handleEmailChange = (newEmail) => {
        setEmail(newEmail)
    }

    const [currentPassword, setCurrentPassword] = useState('')
    const handleCurrentPassword = (text) => {
        setCurrentPassword(text)
    }
    const [message, setMessage] = useState('');

    const [newPassword, setNewPassword] = useState('')
    const handleNewPassword = (text) => {
        setNewPassword(text)
        if (newPassword.length < 8) {
            setMessage('Độ dài tối thiểu của trường này là 8 ký tự. Khoảng trống đầu và cuối sẽ bị xóa.');
            } else if (!isNumber(newPassword)) {
            setMessage('Mật khẩu phải chứa ít nhất một ký tự số.');
            } else if (!isUpper(newPassword)) {
            setMessage('Mật khẩu phải chứa ít nhất một ký tự viết hoa.');
            } else {
            setMessage('');
            }
    }

    const is8Digit = (password) => {
        return password.length >=8;
    };
    const isUpper = (password) => {
        return /[A-Z]/.test(password);
    };
    const isNumber = (password) => {
        return /\d/.test(password);
    };

    const [confirmPassword, setConfirmPassword] = useState('')
    const handleConfirmPassword = (text) => {
        setConfirmPassword(text)
    }    

    const [height, setHeight] = useState(0); // Giá trị mặc định

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const [weight, setWeight] = useState(0); // Giá trị mặc định

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const [bodyStyle, setBodyStyle] = useState('')

    const ClickBodyStyle = (style) => {
        setBodyStyle(style)
    }

    const [isChangeEmail, setIsChangeEmail] = useState(false)
    const tickChangeEmail = () => {
        setIsChangeEmail(!isChangeEmail)
    } 

    const [isChangePass, setIsChangePass] = useState(false)
    const tickChangePass = () => {
        setIsChangePass(!isChangePass)
    }

    const [isInvoice, setIsInvoice] = useState(false)
    const tickInvoice = () => {
        setIsInvoice(!isInvoice)
    }

    const [isAcceptPolicy, setIsAcceptPolicy] = useState(false)
    const tickAcceptPolicy = () => {
        setIsAcceptPolicy(!isAcceptPolicy)
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center',marginTop: '130px'}}>
      <div style={{ width: '74rem',marginBottom: '50px', display: 'flex'}}>
        <Profile section={'info'}></Profile>
        <div style={{width: '792px', marginLeft: '20px', marginTop: '48px'}}>
            <WrapperLabel>THÔNG TIN</WrapperLabel>
            <WrapperBigInfoContainer>
                <div style={{ display: 'flex' , alignItems: 'center'}}>
                <span style={{ fontWeight: '600', marginBottom: '8px', fontSize: '16px' }}>Thông tin cá nhân</span>
                <input
                    type="checkbox"
                    checked={isCheckedGender==='Anh'}
                    onChange={() => ClickCheckGender('Anh')}
                    style={{marginLeft: '40px', marginTop: '6px'}}
                />
                <span>Anh</span>

                <input
                    type="checkbox"
                    checked={isCheckedGender==='Chi'}
                    onChange={() => ClickCheckGender('Chi')}
                    style={{marginLeft: '40px', marginTop: '6px'}}
                />
                <span>Chị</span>
                </div>
                <div style={{display: 'flex', marginTop: '30px'}}>
                <div style={{marginRight: '30px'}}>
                    <WrapperAvatar>
                    <img src="https://cdn.vectorstock.com/i/preview-1x/62/38/avatar-13-vector-42526238.jpg" alt="" style={{width: '100%'}}/>
                    </WrapperAvatar>
                    <img src="https://icons-for-free.com/iconfiles/png/512/camera+photo+upload+icon-1320184663794870720.png" alt="" style={{position: 'absolute', height: '50px', width: '50px', top: '390px', marginLeft: '80px', cursor: 'pointer'}}/>
                </div>
                <div>
                    <WrapperLabelSmall>Họ và tên <span style={{color: 'red'}}>*</span></WrapperLabelSmall>
                    <InputContainer type={'text'} value={fullName} onTextChange={handleNameChange} placeholder={'Nhập họ và tên'}></InputContainer>
                    <WrapperLabelSmall>Số điện thoại</WrapperLabelSmall>
                    <InputContainer type={'text'} value={phoneNumber} onTextChange={handlePhoneChange} placeholder={'Nhập số điện thoại'}></InputContainer>
                </div>
                </div>
                <WrapperLabelSmall style={{marginTop: '40px'}}>Thông số của bạn</WrapperLabelSmall>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}> 
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{fontSize: '12px'}}>Chiều cao</span>
                    <span style={{fontSize: '12px'}}>{height} cm</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="200"
                    value={height}
                    onChange={handleHeightChange}
                    style={{height: '3px', marginTop: '10px'}}
                />  
                </div>
                <div style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}> 
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <span style={{fontSize: '12px'}}>Cân nặng</span>
                    <span style={{fontSize: '12px'}}>{weight} kg</span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="150"
                    value={weight}
                    onChange={handleWeightChange}
                    style={{height: '3px', marginTop: '10px'}}
                />  
                </div>
                <WrapperLabelSmall style={{marginTop: '40px'}}>Dáng người của bạn</WrapperLabelSmall>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'row',  width: '60%', justifyContent: 'space-between', marginTop: '15px'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="https://hoang-phuc.com/static/version1698733991/frontend/Hpi/default/vi_VN/Magenest_CustomerAvatar/images/thin.svg" alt="" style={{height: '120px'}} />
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '40px'}}>
                        <input
                            type="checkbox"
                            checked={bodyStyle==='Gay'}
                            onChange={() => ClickBodyStyle('Gay')}
                            style={{marginLeft: '40px', marginTop: '6px'}}
                        />
                        <span>Gầy</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="https://hoang-phuc.com/static/version1698733991/frontend/Hpi/default/vi_VN/Magenest_CustomerAvatar/images/normal.svg" alt="" style={{height: '120px'}}/>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '40px'}}>
                        <input
                            type="checkbox"
                            checked={bodyStyle==='BinhThuong'}
                            onChange={() => ClickBodyStyle('BinhThuong')}
                            style={{marginLeft: '40px', marginTop: '6px'}}
                        />
                        <span>Bình thường</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <img src="https://hoang-phuc.com/static/version1698733991/frontend/Hpi/default/vi_VN/Magenest_CustomerAvatar/images/fat.svg" alt="" style={{height: '120px'}}/>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: '40px'}}>
                        <input
                            type="checkbox"
                            checked={bodyStyle==='Map'}
                            onChange={() => ClickBodyStyle('Map')}
                            style={{marginLeft: '40px', marginTop: '6px'}}
                        />
                        <span>Mập</span>
                        </div>
                    </div>
                </div>
                </div>
                <div style={{marginTop: '20px'}}>
                <input
                    type="checkbox"
                    checked={isChangeEmail}
                    onChange={tickChangeEmail}
                    style={{marginTop: '6px', height: '15px', width: '15px'}}
                />
                <WraperTextCheckBox>Thay đổi Email</WraperTextCheckBox>
                <input
                    type="checkbox"
                    checked={isChangePass}
                    onChange={tickChangePass}
                    style={{marginLeft: '40px', marginTop: '6px', height: '15px', width: '15px'}}
                />
                <WraperTextCheckBox>Thay đổi mật khẩu</WraperTextCheckBox>
                <input
                    type="checkbox"
                    checked={isInvoice}
                    onChange={tickInvoice}
                    style={{marginLeft: '40px', marginTop: '6px', height: '15px', width: '15px'}}
                />
                <WraperTextCheckBox>Xuất hóa đơn công ty</WraperTextCheckBox>
                </div>
                {isChangeEmail && (
                    <div style={{marginTop: '10px'}}>
                        <WrapperLabel>Email<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer value={email} onTextChange={handleEmailChange} placeholder={'Nhập email'}></InputContainer>
                        <WrapperLabel>Mật khẩu hiện tại<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer type='password' onTextChange={handleCurrentPassword} placeholder={'Nhập mật khẩu hiện tại'}></InputContainer>
                    </div>
                )}

                {isChangePass && (
                    <div style={{marginTop: '10px'}}>
                        {!isChangeEmail && (
                            <div>
                                <WrapperLabel>Mật khẩu hiện tại<span style={{color: 'red'}}>*</span></WrapperLabel>
                                <InputContainer type='password' onTextChange={handleCurrentPassword} placeholder={'Nhập mật khẩu hiện tại'}></InputContainer>
                            </div>
                        )}
                        <WrapperLabel>Mật khẩu mới<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer type='password' onTextChange={handleNewPassword} placeholder={'Nhập mật khẩu mới'}></InputContainer>
                        <div style={{display: 'flex'}}>
                            <img src={is8Digit(newPassword) ? checkMarkImageOK : checkMarkImage} alt="Check Mark"  style={{height: '15px',  marginTop: '3px', marginRight: '3px'}}/>          
                            <WrapperCheckText>Có độ dài từ 8 ký tự trở lên.</WrapperCheckText>
                            <img src={isUpper(newPassword) ? checkMarkImageOK : checkMarkImage} alt="Check Mark"  style={{height: '15px',  marginTop: '3px', marginRight: '3px'}}/>          
                            <WrapperCheckText>Có ít nhất 1 chữ cái viết hoa.</WrapperCheckText>
                            <img src={isNumber(newPassword) ? checkMarkImageOK : checkMarkImage} alt="Check Mark"  style={{height: '15px',  marginTop: '3px', marginRight: '3px'}}/>          
                            <WrapperCheckText>Có ít nhất 1 chữ số.</WrapperCheckText>
                        </div>
                        <div style={{color: 'red'}}>{message}</div>
                        <WrapperLabel>Xác nhận mật khẩu mới<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer type='password' onTextChange={handleConfirmPassword} placeholder={'Xác nhận mật khẩu mới'}></InputContainer>
                    </div>
                )}
                {isInvoice && (
                    <div>
                        <WrapperLabel>Tên công ty<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer placeholder={'Nhập đầy đủ tên công ty'}></InputContainer>
                        <WrapperLabel>Mã số thuế<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer placeholder={'Nhập mã số thuế công ty'}></InputContainer>
                        <WrapperLabel>Địa chỉ công ty<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer placeholder={'Nhập địa chỉ công ty'}></InputContainer>
                        <WrapperLabel>Email nhận hóa đơn<span style={{color: 'red'}}>*</span></WrapperLabel>
                        <InputContainer placeholder={'Nhập email'}></InputContainer>

                    </div>
                )}
                <div style={{marginTop: '15px', marginBottom: '15px', display: 'flex'}}>   
                    <input
                        type="checkbox"
                        checked={isAcceptPolicy}
                        onChange={tickAcceptPolicy}
                        style={{marginBottom: '22px', marginheight: '20px', width: '20px'}}
                    />
                    <WrapperPolicyCheck>Bằng cung cấp thông tin , là bạn đã đồng ý với chính sách bảo mật thông tin cá nhân của chúng tôi. Vui lòng xem bảo mật thông tin tại <span style={{color: 'blue'}}>https://hoang-phuc.com/chinh-sach-bao-mat.html</span></WrapperPolicyCheck>
                </div>
            </WrapperBigInfoContainer>  
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <WrapperButton style={{backgroundColor: 'white', border: '1px solid #000', width: '49%', color: '#000'}}>HỦY</WrapperButton>     
                <WrapperButton style={{width: '49%'}}>LƯU</WrapperButton>               

            </div>
        </div>  
      </div>
    </div>
)
}

export default AccountEdit