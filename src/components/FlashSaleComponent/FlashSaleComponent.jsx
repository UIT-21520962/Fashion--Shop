import React, { useState } from 'react';
import {
  WrapperDaySale,
  WrapperTextFlashSale,
  WrapperTextFlashSaleDay,
  WrapperTextFlashSaleDayTime,
} from './style';
import FlashSaleProduct from '../../Data/FlashSaleProduct';
import CardComponent from './../CardComponent/CardComponent';
import CountdownClock from './CountdownClock';


const FlashSaleComponent = () => {
  const [saleStates, setSaleStates] = useState(
    FlashSaleProduct.map((product) => ({
      backgroundColor: '',
      textColor: '',
      day: product['day'],
    }))
  );

  const [selectedDaySale, setSelectedDaySale] = useState('20/11/2023')


  const handleDaySaleClick = (index) => {
    const newSaleStates = saleStates.map((state, i) => {
      if (i === index) {
        return { backgroundColor: 'red', textColor: 'white', day: state.day };
      } else {
        return { backgroundColor: '', textColor: '', day: state.day };
      }
    });
    const selectedDay = newSaleStates[index].day;
    setSaleStates(newSaleStates);
    setSelectedDaySale(selectedDay)
  };

  return (
    <div>
      <div>
        <img src="https://hoang-phuc.com/media/wysiwyg/Artboard_2.png" alt="" style={{ width: '100%' }} />
      </div>
      <div
      style={{
        display: 'flex',
        backgroundImage:
          'url(https://hoang-phuc.com/media/wysiwyg/fs2809/bg_ektopn.png)',
        marginTop: '40px',
      }}
    >
      <img
        src="https://hoang-phuc.com/media/wysiwyg/fs2809/icon_desktop.png"
        alt=""
        style={{ height: '80px', width: 'auto', margin: '10px 30px' }}
      />
      <div>
        <WrapperTextFlashSale>SẮP DIỄN RA</WrapperTextFlashSale>
        <div style={{ display: 'flex'}}>
          <CountdownClock></CountdownClock>
        </div>
      </div>
      <div style={{ marginLeft: '300px', display: 'flex' }}>
        {FlashSaleProduct.map((sale, index) => {
          const { backgroundColor, textColor } = saleStates[index];
          return (
            <WrapperDaySale
              key={index}
              onClick={() => handleDaySaleClick(index)}
              style={{ backgroundColor, color: textColor }}
            >
              <WrapperTextFlashSaleDay>SẮP DIỄN RA</WrapperTextFlashSaleDay>
              <WrapperTextFlashSaleDayTime>{sale['day']}</WrapperTextFlashSaleDayTime>
            </WrapperDaySale>
          );
        })}
      </div>
      </div>
     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: '5px'}}>
        {
          FlashSaleProduct.map((product) => (
            product['day'] === selectedDaySale ? (
              product['product'].map((product, index) => (
                  <React.Fragment key={index}>
                    <CardComponent product={product}></CardComponent>
                    {index !== 0 && (index + 1) % 5 === 0 && <br />}
                  </React.Fragment>))
            ) : null
          ))
        }
      </div>
    </div>
  );
};

export default FlashSaleComponent;
