import React, { useState } from 'react'
import { CategoryContainer, WrapperCategoryText, WrapperIcon,  WrapperTextSmall } from './style'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../Redux/slice/userSlice'

const Profile = ({section}) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(section);
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const symbol = '>';
  const borderStyle = (section) => (activeSection === section ? '3px solid black' : '');
  const cursorStyle = (section) => (activeSection === section ? '' : 'pointer');

  const naviteGateToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const navigateToAccount = () => {
    navigate('/profile/account');
    window.scrollTo(0, 0);
  };

  const navigateToAccountEdit = () => {
    navigate('/profile/account/edit');
    window.scrollTo(0, 0);
  };

  const navigateToAccountAddress = () => {
    navigate('/profile/account/address');
    window.scrollTo(0, 0);
  };

  const navigateToAccountOrder = () => {
    navigate('/profile/account/order');
    window.scrollTo(0, 0);
  };

  const navigateToAccountLikeProduct = () => {
    navigate('/profile/account/like-product');
    window.scrollTo(0, 0);
  };

  const navigateToAccountRefund = () => {
    navigate('/profile/account/refund');
    window.scrollTo(0, 0);
  };

  const dispatch = useDispatch()
  const handleLogout = () => {
    localStorage.removeItem('access_token')
    dispatch(resetUser())
    navigate('/')
    window.scrollTo(0,0)
  }

  return (
      <div>
        <WrapperTextSmall><span style={{cursor: 'pointer'}} onClick={naviteGateToHome}>Trang chủ {symbol}</span>  <span>Tài khoản của tôi</span></WrapperTextSmall>
        <div style={{display: 'flex', marginTop: '30px'}}>
          <div>
            <CategoryContainer>
              <div onClick={navigateToAccount} style={{cursor: cursorStyle('account'), borderRight: borderStyle('account')}}>
                <WrapperIcon>
                  <img src="https://cdn0.iconfinder.com/data/icons/e-commerce-207/1024/settings-512.png" alt="" style={{width: '100%'}}/>
                </WrapperIcon>
                <WrapperCategoryText>TÀI KHOẢN CỦA TÔI</WrapperCategoryText>
              </div>
              <div onClick={navigateToAccountEdit} style={{cursor: cursorStyle('info'), borderRight: borderStyle('info')}}>
                <WrapperIcon>
                  <img src="https://static-00.iconduck.com/assets.00/person-icon-512x512-5lhrcpms.png" alt="" style={{width: '100%'}}/>
                </WrapperIcon>
                <WrapperCategoryText>THÔNG TIN CÁ NHÂN</WrapperCategoryText>
              </div>
              <div onClick={navigateToAccountAddress} style={{cursor: cursorStyle('address'), borderRight: borderStyle('address')}}>
                <WrapperIcon>
                  <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="" style={{width: '100%'}}/>
                </WrapperIcon>
                <WrapperCategoryText>SỔ ĐỊA CHỈ</WrapperCategoryText>
              </div>
              <div onClick={navigateToAccountOrder} style={{cursor: cursorStyle('order'), borderRight: borderStyle('order')}}>
                <WrapperIcon>
                  <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/order-512.png" alt="" style={{width: '100%'}}/>
                </WrapperIcon>
                <WrapperCategoryText>ĐƠN HÀNG</WrapperCategoryText>
              </div>
              <div onClick={navigateToAccountLikeProduct} style={{cursor: cursorStyle('likeProduct'), borderRight: borderStyle('likeProduct')}}>
                <WrapperIcon>
                  <img src="https://cdn-icons-png.flaticon.com/256/1077/1077035.png" alt="" style={{width: '100%'}}/>
                </WrapperIcon>
                <WrapperCategoryText>SẢN PHẨM YÊU THÍCH</WrapperCategoryText>
              </div>
              <div onClick={navigateToAccountRefund} style={{cursor: cursorStyle('refund'), borderRight: borderStyle('refund')}}>
                <WrapperIcon>
                  <img src="https://cdn-icons-png.flaticon.com/512/4947/4947544.png" alt="" style={{width: '100%'}}/>
                </WrapperIcon>
                <WrapperCategoryText>ĐỔI HÀNG</WrapperCategoryText>
              </div>
              <div style={{cursor: 'pointer'}}>
                <WrapperIcon>
                  <img src="https://cdn.icon-icons.com/icons2/2943/PNG/512/logout_icon_184025.png" alt="" style={{width: '100%'}}/>
                </WrapperIcon>
                <WrapperCategoryText onClick={handleLogout}>ĐĂNG XUẤT</WrapperCategoryText>
              </div>
            </CategoryContainer>
          </div>
        </div>
      </div>
  )
}

export default Profile