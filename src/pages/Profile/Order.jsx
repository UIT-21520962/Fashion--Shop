import React from 'react'
import Profile from './Profile'
import { WrapperInfoText, WrapperLabel, WrapperOrderTrack } from './style'

const Order = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center',marginTop: '130px'}}>
      <div style={{ width: '74rem',marginBottom: '50px', display: 'flex'}}>
        <Profile section={'order'}></Profile>
        <div style={{marginLeft: '20px', marginTop: '48px', display: 'flex', flexDirection: 'column'}}>
            <WrapperLabel style={{marginBottom: '20px'}}>LỊCH SỬ ĐƠN HÀNG</WrapperLabel>
            <div style={{height: '52px', backgroundColor: '#ededed', borderRadius: '10px', marginBottom: '20px', display: 'flex', alignItems:'center'}}>
                <WrapperOrderTrack style={{cursor: 'pointer'}}>Tất cả</WrapperOrderTrack>
                <WrapperOrderTrack style={{cursor: 'pointer'}}>Đang xử lý</WrapperOrderTrack>
                <WrapperOrderTrack style={{cursor: 'pointer'}}>Đang giao hàng</WrapperOrderTrack>
                <WrapperOrderTrack style={{cursor: 'pointer'}}>Đã giao thành công</WrapperOrderTrack>
                <WrapperOrderTrack style={{cursor: 'pointer'}}>Đã hủy</WrapperOrderTrack>

            </div>
            <WrapperInfoText>Bạn không có đơn hàng nào.</WrapperInfoText>
        </div>
      </div>
    </div>  )
}

export default Order