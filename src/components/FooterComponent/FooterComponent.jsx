import React from 'react'
import { WrapperFooter, WrapperBigTextB2, WrapperSmallTextB2, WrapperInput, WrapperButton, WrapperText31, WrapperText32, WrapperFooter3, WrapperFooter2, WrapperFooter3Text, WrapperFooter3TextTitle } from './style';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons'
import { Input } from 'antd';

const FooterComponent = () => {
  const navigate=useNavigate();
  const handleToppage = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <WrapperFooter>
            <WrapperFooter2>
                <div style={{width: '1240px', height: '58px', display: 'flex'}}>
                    <div>
                        <WrapperBigTextB2>ĐỪNG BỎ LỠ THÔNG TIN</WrapperBigTextB2>
                        <WrapperSmallTextB2>Đăng kí nhận bản tin để không bỏ lỡ thông tin khuyến mãi, luôn nhận được chương trình ưu đãi đặc biệt.</WrapperSmallTextB2>
                    </div>
                    <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', position: 'relative'}}>
                        <WrapperInput>
                            <MailOutlined style={{position: 'absolute', color: '#000', marginLeft: '10px', zIndex: 1, fontSize: '30px'}}/>
                                <Input
                                    type="email"
                                    placeholder="Nhập email của bạn"
                                    style={
                                    { 
                                        color: '#000',
                                        backgroundColor: '#FFFFFF',
                                        height: '100%',
                                        width: '100%',
                                        borderRadius: '10px',
                                        border: 'none',
                                        marginLeft: '52px'
                                    }
                                    }
                                />
                        </WrapperInput>
                        <WrapperButton>Đăng ký</WrapperButton>
                    </div>  
                </div>
            </WrapperFooter2>
            <WrapperFooter3>
                <div style={{display: 'flex' ,flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column', flex: 3, marginLeft: '117px'}}>
                        <img src="https://hoang-phuc.com/media/wysiwyg/logo_2_1.jpg" alt="" style={{width: '30%', cursor: 'pointer'}} onClick={() => handleToppage()}/>
                        <WrapperText31>CTY CỔ PHẦN - ĐẦU TƯ HOÀNG PHÚC QUỐC TẾ </WrapperText31>    
                        <span style={{fontSize: '11px', marginTop: '8px', marginBottom: '15px'}}>ĐKKD SỐ 0314718634 DO SỞ KHĐT TP.HCM CẤP NGÀY 06/11/2017</span>   
                        <WrapperText32>Địa chỉ: 137 Nguyễn Trãi, P.Bến Thành, Q.1, Tp.Hồ Chí Minh</WrapperText32>   
                        <WrapperText32>Email: cskh@hoangphuc.com</WrapperText32>  
                        <WrapperText32>Tổng đài: 1900 6941</WrapperText32>  
                        <div style={{display: 'flex', marginTop: '50px', alignItems: 'end'}}>
                            <img src="https://hoang-phuc.com/media/.renditions/wysiwyg/image_21.png" alt="" style={{width: '25%'}}/>
                            <div style={{marginLeft: '40px'}}>
                                <WrapperFooter3Text>Chấp nhận thanh toán</WrapperFooter3Text>
                                <div style={{display: 'flex', height: '45%',  marginLeft: '10px', marginBottom: '8px'}}>
                                    <img src="https://hoang-phuc.com/media/.renditions/wysiwyg/image_22.png" alt=""/>
                                    <img src="https://hoang-phuc.com/media/.renditions/wysiwyg/image_23.png" alt="" style={{marginLeft: '10px'}}/>
                                    <img src="https://hoang-phuc.com/media/.renditions/wysiwyg/image_24.png" alt="" style={{marginLeft: '10px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '50px'}}>
                        <WrapperFooter3TextTitle>VỀ CHÚNG TÔI</WrapperFooter3TextTitle>
                        <WrapperText32>Giới thiệu</WrapperText32>
                        <WrapperText32>Liên hệ</WrapperText32>
                        <WrapperText32>Tuyển dụng</WrapperText32>
                        <WrapperText32>Danh sách cửa hàng </WrapperText32>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', flex: 2, marginLeft: '50px'}}>
                        <WrapperFooter3TextTitle>HỖ TRỢ</WrapperFooter3TextTitle>
                        <WrapperText32>Chính sách đổi sản phẩm</WrapperText32>
                        <WrapperText32>Chính sách giải quyết khiếu nại</WrapperText32>
                        <WrapperText32>Chính sách bảo mật</WrapperText32>
                        <WrapperText32>Trung tâm dịch vụ bảo hành</WrapperText32>
                        <WrapperText32>Điều khoản và điều kiện</WrapperText32>
                        <WrapperText32>Chính sách vận chuyển và giao nhận</WrapperText32>
                        <WrapperText32>Chính sách đồng kiểm</WrapperText32>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', flex: 1, marginLeft: '50px'}}>
                        <WrapperFooter3TextTitle>TỔNG ĐÀI CSKH</WrapperFooter3TextTitle>
                        <WrapperText32>Các ngày trong tuần từ 8:00 - 21:00</WrapperText32>
                        <WrapperText32>Các ngày trong tuần từ 8:00 - 21:00</WrapperText32>

                    </div>
                </div>
            </WrapperFooter3>
        </WrapperFooter>
    </div>
  )
}

export default FooterComponent