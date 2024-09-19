import React from 'react'
import CardComponent from '../CardComponent/CardComponent';
import { WrapperText } from './style';

const HotdealComponent = ({imgUrl, Product}) => {
  return (
    <div style={{marginTop: '20px'}}>
      <div>
        <img src={imgUrl} alt="" style={{width: '100%'}} />
      </div>
      <div style={{display: 'flex',  justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: '5px'}}>
        { Product.map((product, index) => (
              <React.Fragment key={index}>
                <CardComponent product={product}></CardComponent>
                {index !== 0 && (index + 1) % 5 === 0 && <br />}
              </React.Fragment>        ))}
      </div>  
      <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'arial', fontWeight: 'bold', marginTop: '15px', marginBottom: '30px'}}>
        <WrapperText>XEM TẤT CẢ</WrapperText>
      </div>
    </div>
  )
}

export default HotdealComponent