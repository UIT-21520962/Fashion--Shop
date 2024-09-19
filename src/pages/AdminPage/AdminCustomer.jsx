import React, { useState } from 'react'
import Header from './Header'
import AdminPage from './AdminPage'
import { WrapperRight, WrapperText1, WrapperTextProduct } from './style'
import InputContainer from '../../components/InputContainer/InputContainer'
import { WrapperButton } from '../LoginPage/style'

const AdminCustomer = () => {
  const [isClickNavbar, setIsClickNavbar] = useState(true)
  const onClickNavbar = () => {
    setIsClickNavbar(!isClickNavbar)
  }

  const [key, setKey] = useState('')
  const [condition, setCondition] = useState('name')
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{width: '92rem'}}>
            <Header></Header>        
            <div style={{display: 'flex'}}>        
            {isClickNavbar && (<AdminPage section={'customer'}></AdminPage>)}
            <WrapperRight>
              <div style={{height: '20px', width: '20px', marginLeft: '20px', cursor: 'pointer'}} onClick={onClickNavbar}>
                    <img src="https://cdn.icon-icons.com/icons2/2090/PNG/512/hide_sidebar_horizontal_icon_128227.png" alt="" style={{width: '100%'}}/>
                </div>
                <WrapperText1>Khách hàng</WrapperText1>
                <div  style={{marginLeft: '20px', display: 'flex'}}>
                  <InputContainer placeholder={'Nội dung tìm kiếm'} onTextChange={setKey}></InputContainer>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '28px', marginLeft: '15px'}}>
                    <WrapperButton style={{width: '150px'}} >Tìm kiếm</WrapperButton>
                  </div>
                </div>
                <div style={{ height: '500px', overflowY: 'auto', marginLeft: '10px' }}>
                  <div style={{ display: 'flex' }}>
                    <WrapperTextProduct>Tên khách hàng</WrapperTextProduct>
                    <WrapperTextProduct>Địa chỉ</WrapperTextProduct>
                    <WrapperTextProduct>Số điện thoại</WrapperTextProduct>
                    <WrapperTextProduct>Email</WrapperTextProduct>
                    <WrapperTextProduct>Đơn hàng chưa hoàn thành</WrapperTextProduct>
                    <WrapperTextProduct>Đơn hàng đã hoàn thành</WrapperTextProduct>

                  </div>
                </div>
            </WrapperRight>
            </div>
        </div>
    </div>  )
}

export default AdminCustomer