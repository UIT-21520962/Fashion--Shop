import React, { useEffect, useState } from 'react'
import Header from './Header'
import AdminPage from './AdminPage'
import { WrapperRight } from './style'

const AdminOrder = () => {
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
            {isClickNavbar && (<AdminPage section={'order'}></AdminPage>)}
            <WrapperRight>
               
            </WrapperRight>
            </div>
        </div>
    </div>  )
}
export default AdminOrder