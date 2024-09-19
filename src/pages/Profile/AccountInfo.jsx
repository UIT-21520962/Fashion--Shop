import React from 'react'
import { WrapperInfoText, WrapperLabel, WrapperSmallInfoContainer } from './style'
import { useSelector } from 'react-redux';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';

const AccountInfo = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate()


  const onClickChangePass = () => {
    navigate('/profile/account/edit')
    window.scrollTo(0,0)
  }

  
  const onClickChangeAddress = () => {
    navigate('/profile/account/address')
    window.scrollTo(0,0)
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center',marginTop: '130px'}}>
      <div style={{ width: '74rem',marginBottom: '50px', display: 'flex'}}>
        <Profile section={'account'}></Profile>
        <div style={{marginLeft: '20px', marginTop: '48px'}}>
            <WrapperLabel>TÀI KHOẢN CỦA TÔI</WrapperLabel>
            <div style={{display: 'flex'}}>
                <WrapperSmallInfoContainer>
                    <span style={{fontWeight: '600', marginBottom: '8px'}}>Thông tin cá nhân</span>
                    <WrapperInfoText>{user.fullName} - {user.phoneNumber}</WrapperInfoText>
                    <WrapperInfoText>Email: {user.email}</WrapperInfoText>
                    <div style={{marginTop: '40px', display: 'flex', justifyContent: 'space-between', position: 'relative'}}>
                        <span style={{color: 'blue', fontWeight: '600', textDecoration: 'underline', cursor: 'pointer'}} onClick={onClickChangePass}>Đổi mật khẩu</span>
                        <div style={{alignItems: 'center', display: 'flex', cursor: 'pointer'}} onClick={onClickChangePass}>
                            <span>Chỉnh sửa</span>
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" style={{width: '20px', height: '20px', marginLeft: '5px'}}/>
                        </div>
                    </div>
                </WrapperSmallInfoContainer>
                <WrapperSmallInfoContainer>
                    <span style={{fontWeight: '600', marginBottom: '8px'}}>Thông tin giao hàng</span>
                    {user.address_list ? (
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <WrapperInfoText>{user.address_list[0].fullName} - {user.address_list[0].phoneNumber}</WrapperInfoText>
                        <WrapperInfoText>Địa chỉ: {user.address_list[0].address}</WrapperInfoText>

                      </div>
                    ) : (                    
                          <WrapperInfoText>Bạn không có thiết lập địa chỉ vận chuyển mặc định.</WrapperInfoText>
                    )}


                    <div style={{alignItems: 'center', display: 'flex', cursor: 'pointer', marginTop: '10px'}} onClick={onClickChangeAddress}>
                        <span>Chỉnh sửa</span>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" style={{width: '20px', height: '20px', marginLeft: '5px'}}/>
                    </div>
                </WrapperSmallInfoContainer>
            </div>                  
        </div>
      </div>
    </div>  )
}

export default AccountInfo