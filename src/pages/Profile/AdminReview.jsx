import React, { useState } from 'react'
import Header from '../AdminPage/Header'
import { WrapperRight } from '../AdminPage/style'
import AdminPage from '../AdminPage/AdminPage'

const AdminReview = () => {
  const [isClickNavbar, setIsClickNavbar] = useState(true)
  const onClickNavbar = () => {
    setIsClickNavbar(!isClickNavbar)
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{width: '92rem'}}>
            <Header></Header>        
            <div style={{display: 'flex'}}>        
            {isClickNavbar && (<AdminPage section={'review'}></AdminPage>)}
            <WrapperRight>
               
            </WrapperRight>
            </div>
        </div>
    </div>  )
}

export default AdminReview