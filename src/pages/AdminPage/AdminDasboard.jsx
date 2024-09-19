import React, { useEffect, useState } from 'react'
import AdminPage from './AdminPage'
import { WrapperMediumContainer1, WrapperMediumContainer, WrapperRight, WrapperSmallContainer, WrapperText1, WrapperBigContainer } from './style'
import Header from './Header';

const AdminDasboard = () => {
  const [isClickNavbar, setIsClickNavbar] = useState(true)
  const onClickNavbar = () => {
    setIsClickNavbar(!isClickNavbar)
  }

  const access_token = localStorage.getItem('access_token')
  useEffect(() => {
    if (!access_token) {
      window.alert('Xin hãy đăng nhập')
    }
  },[access_token])
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{width: '92rem'}}>
            <Header></Header>
            <div style={{display: 'flex'}}>        
                {isClickNavbar && (<AdminPage section={'dashboard'}></AdminPage>)}
                <WrapperRight>
                    <div style={{height: '20px', width: '20px', marginLeft: '20px', cursor: 'pointer'}} onClick={onClickNavbar}>
                        <img src="https://cdn.icon-icons.com/icons2/2090/PNG/512/hide_sidebar_horizontal_icon_128227.png" alt="" style={{width: '100%'}}/>
                    </div>
                    <WrapperText1>Trang chủ</WrapperText1>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <WrapperSmallContainer>
                            <img src="https://cdn-icons-png.flaticon.com/512/925/925014.png" alt="" style={{width: '20%', marginLeft: '15px'}}/>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{marginLeft: '20px' }}>Total Sales</span>
                                <WrapperText1>300.123.000 VND</WrapperText1>
                            </div>
                        </WrapperSmallContainer>
                        <WrapperSmallContainer>
                            <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="" style={{width: '20%', marginLeft: '15px'}}/>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{marginLeft: '20px' }}>Total Orders</span>
                                <WrapperText1>1234</WrapperText1>
                            </div>
                        </WrapperSmallContainer>
                        <WrapperSmallContainer>
                            <img src="https://cdn-icons-png.flaticon.com/512/4129/4129528.png" alt="" style={{width: '20%', marginLeft: '15px'}}/>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{marginLeft: '20px' }}>Total Products</span>
                                <WrapperText1>444</WrapperText1>
                            </div>
                        </WrapperSmallContainer>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <WrapperMediumContainer1>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{marginLeft: '20px' }}>Sale statistics</span>
                            </div>
                        </WrapperMediumContainer1>
                        <WrapperMediumContainer>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{marginLeft: '20px' }}>Visistors</span>
                            </div>
                        </WrapperMediumContainer>
                    </div>
                    <div>
                        <WrapperBigContainer>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <span style={{marginLeft: '20px' }}>Latest orders</span>
                            </div>
                        </WrapperBigContainer>
                    </div>
                </WrapperRight>
            </div>
        </div>
    </div>
  )
}

export default AdminDasboard