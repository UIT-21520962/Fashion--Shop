import React from 'react'
import Profile from './Profile';
import { WrapperInfoText, WrapperLabel } from './style';

const refund = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',marginTop: '130px'}}>
      <div style={{ width: '74rem',marginBottom: '50px', display: 'flex'}}>
        <Profile section={'refund'}></Profile>
        <div style={{marginLeft: '20px', marginTop: '48px', display: 'flex', flexDirection: 'column'}}>
            <WrapperLabel style={{marginBottom: '20px'}}>ĐỔI HÀNG</WrapperLabel>

            <WrapperInfoText>Bạn không có đơn đổi hàng nào.</WrapperInfoText>
        </div>
      </div>
    </div>  )
}

export default refund