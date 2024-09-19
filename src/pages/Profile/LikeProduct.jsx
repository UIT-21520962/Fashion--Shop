import React from 'react'
import Profile from './Profile'
import { WrapperIcon, WrapperInfoText, WrapperLabel, WrapperLabelSmall, WrapperTextSmall } from './style'
import { WrapperButton } from '../LoginPage/style'

const LikeProduct = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',marginTop: '130px'}}>
      <div style={{ width: '74rem',marginBottom: '50px', display: 'flex'}}>
        <Profile section={'order'}></Profile>
        <div style={{marginLeft: '20px', marginTop: '48px', display: 'flex', flexDirection: 'column', width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <WrapperLabel>SẢN PHẨM YÊU THÍCH</WrapperLabel>
                <div style={{display: 'flex', cursor: 'pointer'}}>
                    <span style={{fontSize: '12px', color: 'blue', marginTop: '5px'}}>Tạo danh sách mới</span>
                    <WrapperIcon>
                       <img src="https://cdn-icons-png.flaticon.com/512/992/992482.png" alt="" style={{width: '100%', marginLeft: '85px', marginBottom: '5px'}}/>
                    </WrapperIcon>
                </div>
            </div>
            <WrapperButton style={{width: '100%', marginBottom: '20px'}}>Danh sách yêu thích của tôi</WrapperButton>
            <WrapperLabelSmall>Danh sách yêu thích của tôi </WrapperLabelSmall>
            <WrapperTextSmall style={{marginTop: '20px', marginBottom: '20px'}}>0 sản phẩm</WrapperTextSmall>
            <WrapperInfoText>Bạn không có sản phẩm nào trong danh sách yêu thích Danh sách yêu thích của tôi</WrapperInfoText>
        </div>
      </div>
    </div>   )
}

export default LikeProduct