import React from 'react'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import slider4 from '../../assets/images/slider4.webp'
import slider5 from '../../assets/images/slider5.webp'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import BrandComponent from '../../components/BrandComponent/BrandComponent'
import BrandLabel from './../../Data/BrandLabel';
import BrandComponent2x from './../../components/BrandComponent/BrandComponent2x';
import BrandComponent3x from './../../components/BrandComponent/BrandComponent3x';
import FlashSaleComponent from '../../components/FlashSaleComponent/FlashSaleComponent'
import HotdealProduct from './../../Data/HotdealProduct';
import OtherSaleComponent from './../../components/OtherSaleComponent/OtherSaleComponent';
import BestSeller from './../../Data/BestSeller';
import ClearanceSale from './../../Data/ClearanceSale';
import SpecialOffer from './../../Data/SpecialOffer';
import HomepageFooterComponent from './../../components/HomepageFooterComponent/HomepageFooterComponent';
import { WrapperFooter } from '../../components/FooterComponent/style'
import { WrapperLeftHeader, WrapperRightHeader } from './../../components/HeaderComponent/style';
const BrandLabel2xdata = [
    {
        name: "Label 1",
        imageUrl: "https://hoang-phuc.com/media/wysiwyg/25092023-2/kappa.png"
    },
    {
        name: "Label 2",
        imageUrl: "https://hoang-phuc.com/media/wysiwyg/banner26092023/ecko.png"
    },
];

const BrandLabel3xdata = [
    {
        name: "Label 1",
        imageUrl: "https://media.istockphoto.com/id/694450136/photo/take-a-moment-to-enjoy-the-streets-of-the-city.jpg?s=612x612&w=0&k=20&c=oKOF7fkNFleU3tPbKmEiUOB4q1jujsgoG_pMUwfgBUY="
    },
    {
        name: "Label 2",
        imageUrl: "https://img.freepik.com/premium-photo/beautiful-young-women-summer-fashion-concept_564719-215.jpg"
    },
    {
        name: "Label 3",
        imageUrl: "https://media.istockphoto.com/id/537307742/photo/cute-stylish-children.jpg?s=612x612&w=0&k=20&c=WU-V7DTbtBAYlmknXRaPR3werEx2CjsUgxUjosi3svU="
    }
];
const HomePage = () => {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{paddingTop: '9.25rem', display: 'flex', flexDirection: 'column',marginLeft: '140px', marginRight: '140px', alignItems: 'center'}}>
            <div style={{position: 'absolute', width: '74rem'}}>
              <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5]} />
            </div>
            <div style={{diplay: 'flex', pointerEvents: 'none',  position: 'fixed'}}>
                <WrapperLeftHeader>
                    <img src="https://hoang-phuc.com/media/wysiwyg/banner26092023/80x270.png" alt="" />
                </WrapperLeftHeader>
                <WrapperRightHeader>
                    <img src="https://hoang-phuc.com/media/wysiwyg/banner10032023/80x270_copy.png" alt="" />
                </WrapperRightHeader>
            </div>
            <div style={{flexDirection: 'column', backgroundColor: '#efeff5', marginTop: '20rem',width: '74rem', justifyContent: 'center'}}>
              <div style={{ marginTop: '1.5625rem', display: 'flex', justifyContent: 'space-between'}}>
                {
                  BrandLabel.map((brand, index) => (
                    <BrandComponent key={index} imgUrl={brand.imageUrl} />
                  ))
                }
              </div>
              <div style={{ marginTop: '1.5625rem', display: 'flex', justifyContent: 'space-between' }}>
                {
                  BrandLabel2xdata.map((brand, index) => (
                    <BrandComponent2x key={index} imgUrl={brand.imageUrl} />
                  ))
                }
              </div>
              <div style={{ marginTop: '1.5625rem', display: 'flex', justifyContent: 'space-between' }}>
                {
                  BrandLabel3xdata.map((brand, index) => (
                    <BrandComponent3x key={index} imgUrl={brand.imageUrl} />
                  ))
                }
              </div>
              <div style={{ marginTop: '0.625rem', marginLeft: '0.3125rem', marginRight: '0.3125rem' }}>
                <FlashSaleComponent />
                <OtherSaleComponent Product={HotdealProduct} imgUrl='https://hoang-phuc.com/media/wysiwyg/Artboard_3.png'/>
                <OtherSaleComponent Product={BestSeller} imgUrl='https://hoang-phuc.com/media/wysiwyg/Artboard_4.png' />
                <OtherSaleComponent Product={ClearanceSale} imgUrl='https://hoang-phuc.com/media/wysiwyg/Artboard_5.png' />
                <OtherSaleComponent Product={SpecialOffer} imgUrl='https://hoang-phuc.com/media/wysiwyg/Artboard_6.png' />
              </div>
            </div>
        </div>
        <WrapperFooter> 
          <HomepageFooterComponent />
        </WrapperFooter>
      </div>
    </div>
  )
}


export default HomePage