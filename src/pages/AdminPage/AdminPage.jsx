import React, { useEffect, useState } from 'react'
import { WrapperLeft, WrapperText } from './style'
import { useNavigate } from 'react-router-dom';

const AdminPage = ({section}) => {
  const [activeSection, setActiveSection] = useState(section);
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const borderStyle = (section) => (activeSection === section ? '5px solid red' : '');
  const cursorStyle = (section) => (activeSection === section ? '' : 'pointer');

  const navigate = useNavigate()
  const navigateToAdminDashBoard = () => {
    navigate('/admin/dashboard')
    window.scrollTo(0,0)
  }
  const navigateToAdminProduct = () => {
    navigate('/admin/product')
    window.scrollTo(0,0)

  }
  const navigateToAdminOrder = () => {
    navigate('/admin/order')
    window.scrollTo(0,0)
  }
  const navigateToAdminCustomer = () => {
    navigate('/admin/customer')
    window.scrollTo(0,0)
  }
  const navigateToAdminStatistic = () => {
    navigate('/admin/statistic')
    window.scrollTo(0,0)
  }
  const navigateToAdminSale = () => {
    navigate('/admin/sale')
    window.scrollTo(0,0)
  }
  const navigateToAdminReview = () => {
    navigate('/admin/review')
    window.scrollTo(0,0)
  }

  return (
        <WrapperLeft>
          <div style={{textAlign: 'center' ,width: '100%' ,cursor: cursorStyle('dashboard'), borderRight: borderStyle('dashboard')}}>
            <WrapperText onClick={navigateToAdminDashBoard}>Trang chủ</WrapperText>
          </div>
          <div style={{textAlign: 'center' ,width: '100%' ,cursor: cursorStyle('product'), borderRight: borderStyle('product')}}>
            <WrapperText onClick={navigateToAdminProduct}>Sản phẩm</WrapperText>
          </div>
          <div style={{textAlign: 'center' ,width: '100%' ,cursor: cursorStyle('order'), borderRight: borderStyle('order')}}>
            <WrapperText onClick={navigateToAdminOrder}>Đơn hàng</WrapperText>
          </div>
          <div  style={{textAlign: 'center' ,width: '100%' ,cursor: cursorStyle('customer'), borderRight: borderStyle('customer')}}>
            <WrapperText onClick={navigateToAdminCustomer} >Khách hàng</WrapperText>
          </div>
          <div  style={{textAlign: 'center' ,width: '100%' ,cursor: cursorStyle('statistic'), borderRight: borderStyle('statistic')}}>
            <WrapperText onClick={navigateToAdminStatistic}>Thống kê</WrapperText>
          </div>
          <div  style={{textAlign: 'center' ,width: '100%' ,cursor: cursorStyle('sale'), borderRight: borderStyle('sale')}}>
            <WrapperText onClick={navigateToAdminSale}>Chương trình giảm giá</WrapperText>
          </div>
          <div  style={{textAlign: 'center' ,width: '100%' ,cursor: cursorStyle('review'), borderRight: borderStyle('review')}}>
            <WrapperText onClick={navigateToAdminReview}>Reviews</WrapperText>
          </div>
        </WrapperLeft>
  )
}

export default AdminPage