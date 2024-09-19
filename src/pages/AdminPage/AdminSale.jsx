import React, { useEffect, useState } from 'react'
import { WrapperRight } from './style'
import AdminPage from './AdminPage';
import Header from './Header';

const AdminSale = () => {
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
            {isClickNavbar && (<AdminPage section={'sale'}></AdminPage>)}
            <WrapperRight>
               
            </WrapperRight>
            </div>
        </div>
    </div>  )
}

export default AdminSale