import { Button } from 'antd'
import React from 'react'

const BrandComponent2x = ({imgUrl}) => {
  return (
    <Button style={{height: '343px',
        width: '406px',
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '0px',
        margin: '0 5px'
        }}>
    </Button>  )
}

export default BrandComponent2x