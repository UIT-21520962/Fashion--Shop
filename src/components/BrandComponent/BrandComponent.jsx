import { Button } from 'antd';
import React from 'react'

const BrandComponent = ({imgUrl}) => {
   return (
    <Button style={{height: '117px',
        width: '212px',
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        cursor: 'pointer',
        backgroundColor: '#efeff5',
        border: '0px'
        }}>
    </Button>
  )
}

export default BrandComponent