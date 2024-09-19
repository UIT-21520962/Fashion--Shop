import React, { useState } from 'react'
import { WrapperCard, WrapperOriginalPrice, WrapperSalePrice, WrapperSmallImg, WrapperTitle } from './style'
import { Button } from 'antd'

const CardComponent = ({product}) => {
  const [currentImg, setCurrentImg] = useState(product.imgUrl1)
  const handleSmallImgClick = (newImg) => {
    setCurrentImg(newImg)
  }
  return (
    <WrapperCard>
      <Button style={{display: 'flex', height: '14.625rem', border: '0px', justifyContent: 'center'}}>
        <img src={currentImg} alt="" style={{width: '12rem', display: 'flex', height: '14.625rem'}} />
      </Button>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
          <WrapperTitle>{product.name}</WrapperTitle>
        <div>
          <WrapperSalePrice>{product.salePrice} đ  </WrapperSalePrice>
          <WrapperOriginalPrice>{product.price} đ</WrapperOriginalPrice>
        </div>
        <div>
          {Object.keys(product).map((key, index) => {
            if (key.startsWith('imgUrl') && product[key]) {
              return (
                <WrapperSmallImg key={index} onClick={() => handleSmallImgClick(product[key])}>
                  <img
                    src={product[key]}
                    alt=""
                    style={{ height: '34px', width: '34px', borderRadius: '17px' }}
                  />
                </WrapperSmallImg>
              );
            }
            return null;
          })}
        </div>

      </div>
    </WrapperCard>
  )
}

export default CardComponent