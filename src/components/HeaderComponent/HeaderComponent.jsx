import React, { useState } from 'react'
import { WrapperHeader, WrapperIcon, WrapperLabelBig, WrapperLabelSmall, WrapperProductCategory, ProductCategoryContainer, WrapperOrderTextBig, InputContainer } from './style'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch'
import { OrderedListOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import Categories from '../../Data/ProductCategory'
import CategoryDetails from './CategoryDetails';
import { useSelector } from 'react-redux';


const HeaderComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user)
  
  const navigateToLogin = () => {
    navigate('/login');
    window.scrollTo(0, 0);
  };
  const navigateToTopPage = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  const navigateToOrderPage = () => {
    navigate('/order')
    window.scrollTo(0, 0);

  };
  const navigateToProfile = () => {
    navigate('/profile/account')
    window.scrollTo(0,0)
  };

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [OnCategory, setOnCagory] = useState('')

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
    setOnCagory(category)
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
    
  const [searchInput, setSearchInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSearch = () => {
    if (searchInput.trim() === '') {
      setErrorMessage('Vui lòng nhập mã đơn hàng');
    } else {
      // Thực hiện tìm kiếm hoặc hành động khác ở đây
      setErrorMessage(''); // Xóa thông báo lỗi nếu có
    }
  };

  const isLoggedIn = localStorage.getItem('access_token')
  const navigateToOrderProfile = () => {
    navigate('/profile/account/order')  
    window.scrollTo(0,0)
  }

  const [isClickedOrder, setIsClicked] = useState(false)
  const onClickOrder = () => {
        if (isLoggedIn) {
            navigateToOrderProfile()
        } else { 
            setIsClicked(!isClickedOrder);  
            setErrorMessage('');
        }
    };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column',  width: '100%',position: 'fixed', zIndex: 15}}>
            <WrapperHeader>
                <div style={{pointerEvents: 'auto'}} onClick={navigateToTopPage}>
                    <img src="https://hoang-phuc.com/media/logo/websites/1/logo_1.png" alt="" style={{marginRight: '10px' ,width: '10.31rem',heigh: 'auto', cursor: 'pointer'}}/>
                </div>
                <div style={{pointerEvents: 'auto'}}>
                    <ButtonInputSearch 
                        placeholder='Tìm kiếm sản phẩm'
                        allowClear
                        textButton='TÌM KIẾM'
                    />
                </div>
                <div style={{pointerEvents: 'auto'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <WrapperIcon>
                            <UserOutlined style={{color: 'white', fontSize: '20px'}}/>
                        </WrapperIcon>
                        <div>
                            <WrapperLabelSmall>Tài khoản</WrapperLabelSmall>
                            <div>
                                {user?.fullName ? 
                                <WrapperLabelBig onClick={navigateToProfile}>{user?.fullName}</WrapperLabelBig>
                                :
                                <WrapperLabelBig onClick={navigateToLogin}>Đăng nhập</WrapperLabelBig>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{pointerEvents: 'auto'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <WrapperIcon>
                            <ShoppingCartOutlined style={{color: 'white', fontSize: '20px'}}/>
                        </WrapperIcon>
                        <div>
                            <WrapperLabelSmall>Giỏ hàng</WrapperLabelSmall>
                            <div>
                                <WrapperLabelBig onClick={navigateToOrderPage}>0 Sản phẩm</WrapperLabelBig>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{pointerEvents: 'auto'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <WrapperIcon>
                            <OrderedListOutlined style={{color: 'white', fontSize: '20px'}}/>
                        </WrapperIcon>
                        <div>
                            <WrapperLabelSmall>Theo dõi đơn hàng</WrapperLabelSmall>
                            <div onClick={onClickOrder}>
                                <WrapperLabelBig>Tra cứu đơn hàng</WrapperLabelBig>
                            </div>
                        </div>
                    </div>
                </div>
            </WrapperHeader>
            <ProductCategoryContainer>
                {Categories.map((category, index) => (
                        <WrapperProductCategory
                        key={index}
                        onMouseEnter={() => handleMouseEnter(category)}
                        >
                        {category.Category}
                        </WrapperProductCategory>
                    ))}
            </ProductCategoryContainer>
        </div>
        <div style={{flexDirection: 'column', display: 'flex', marginTop: '570px',position: 'fixed', zIndex: 17, marginLeft: '1350px'}}>
            <div style={{backgroundColor: 'inherit', border: '0px solid', cursor: 'pointer', height: '60px',pointerEvents: 'auto'}}
                onClick={() => window.open('https://zalo.vn')}
                >
                <img src="https://d1mf3ex7u8qau8.hoang-phuc.com/svg/zalo.svg" alt="Zalo" />
            </div>
            <div style={{backgroundColor: 'inherit', border: '0px solid', cursor: 'pointer', height: '60px',pointerEvents: 'auto'}}
                onClick={() => window.open('https://messenger.com')}
                >
                <img src="https://d1mf3ex7u8qau8.hoang-phuc.com/svg/messenger.svg" alt="Messenger" />
            </div>
        </div>
        {isClickedOrder && !isLoggedIn && (
            <div style={{height: '250px', width: '718px', backgroundColor: 'white', position: 'fixed', zIndex: 25, marginTop: '150px', borderRadius: '10px'}}>
                <div style={{height: '64px', display: 'flex', alignItems: 'center'}}>
                    <WrapperOrderTextBig>TRA CỨU ĐƠN HÀNG</WrapperOrderTextBig>
                    <img 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAM1BMVEX///8AAADj4+PU1NTX19cjIyPa2toVFRXf398aGhr8/PyTk5OFhYUNDQ0eHh7t7e2ampqA+nCnAAAB+0lEQVR4nO2a27aDIAxExVu1au3/f+1p61KbHIqAwfAw+9nYdDIEBIoCAAAAAAAAAABIx32OjZzvQikMpowLLM0gk8FojKljAutX4CiRwfB6kWmq8MCqeUcK6PA0H/o2NLDrl8jn2QwGsxLoh3ILPKnDuL3ITEG1qKY98owf7rsGgX5YfLDpED82Z0OYvGtRTjQyurF8F3Sh8wvrWFhkW1moiaCm96pF1ZOgJqqpnHpdVNougkWNLJ7zlcxaBz2qpU/7W9gFHWAHYzPo4YAcqA4Phw7tg2oglMH/8v4U1/vBcDo6Ln7N3TV9qhdw4o5XiRP5YIX9wZvlD3Y3L6niORzuol3ZTktlvjGZK6pBE7zE8aGiA472ataVH8I+WGGN71tqXqYkGjh/yJGcND/kdpZIGqvpDowqjWXoJZidD3JgDahlPrA1LWl4G07ble2wXk1J6sQdXnxqjWtgC5MN12JGGuaHS32wwtvhhws1eGPxw2U+WGEtMdHsnHkK+oXQt6P+oNRvTfoNWn+a0p+s9Zcs+gs3/eWr/iJe/1NG/4NO/7NW/+Nef4tDf6NHf7srctNP0A/6W5/6G8D62+D6hwH6RyL6B0P6x2P6h4QZHJVmcGCcwbF5kcPlgf0KRfDwFrtCkcNFkhyu0+RwqSiHq1UAAAAAAAAAAICNP1q9EEVjkiyzAAAAAElFTkSuQmCC" alt="" 
                        style={{height: '20px', width: '20px', borderRadius: '5px', marginLeft: '430px', cursor: 'pointer'}}
                        onClick={onClickOrder}
                    />
                </div> 
                <WrapperOrderTextBig style={{fontSize: '13px', textTransform: 'none'}}>Mã đơn hàng <span style={{color: 'red'}}>*</span></WrapperOrderTextBig>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <InputContainer>
                        <input
                            placeholder='Vui lòng nhập mã đơn hàng cần tra cứu'
                            style={{width: '100%', height: '100%',  borderRadius: '10px', borderColor: '#e6ebe7', border: '2px solid #e6ebe7'}}
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                    </InputContainer>
                </div>  
                {errorMessage && (<span style={{marginLeft: '37px', fontSize: '12px', color: 'red'}}>{errorMessage}</span>)}
                <hr style={{border: '1px solid #e6ebe7', marginTop: '20px'}} />
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '17px'}}>
                    <InputContainer style={{display: 'flex', justifyContent: 'center', backgroundColor: '#000', alignItems: 'center', cursor: 'pointer'}}>
                        <span style={{color: 'white', fontWeight: 'bold', width: '100%', height: '100%', justifyContent: 'center', alignItems:'center', display: 'flex'}} onClick={handleSearch}>TÌM KIẾM</span>
                    </InputContainer>   
                </div>
            </div>
        )}
        <div style={{backgroundColor: 'white', width: '100%', marginTop: '122px',  position: 'fixed', zIndex: 25, display: 'flex', justifyContent: 'center' }}>
            {hoveredCategory === OnCategory && OnCategory.Data && 
                <div
                onMouseLeave={handleMouseLeave}
                >
                <CategoryDetails category={OnCategory} />
                </div>
            }
        </div>
    </div>
  )
}

export default HeaderComponent