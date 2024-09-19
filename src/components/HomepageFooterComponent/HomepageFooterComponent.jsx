import React from 'react'
import { WrapperBigText, WrapperFooter1, WrapperSmallText } from '../FooterComponent/style'
import { WrapperFooterComponent } from './../FooterComponent/style';

const HomepageFooterComponent = () => {
  return (
    <WrapperFooter1>
        <WrapperFooterComponent>
            <img src="https://hoang-phuc.com/media/wysiwyg/_13.png" alt="" />
            <WrapperBigText>MIỄN PHÍ VẬN CHUYỂN</WrapperBigText>
            <WrapperSmallText>Hoàng Phúc miễn phí vận chuyển cho đơn hàng từ 500.000 đồng.</WrapperSmallText>
        </WrapperFooterComponent>
        <WrapperFooterComponent>
            <img src="https://hoang-phuc.com/media/wysiwyg/_13-1_1.png" alt="" />
            <WrapperBigText>GIAO HÀNG TỪ 2-4 NGÀY</WrapperBigText>
            <WrapperSmallText>Đơn hàng sẽ được giao trong vòng từ 2-4 ngày kể từ khi được xác nhận.</WrapperSmallText>
        </WrapperFooterComponent>
        <WrapperFooterComponent>
            <img src="https://hoang-phuc.com/media/wysiwyg/_13-2.png" alt="" />
            <WrapperBigText>THỦ TỤC ĐỔI HÀNG DỄ DÀNG</WrapperBigText>
            <WrapperSmallText>Đơn hàng đã giao được đổi trả miễn phí trong 30 ngày theo quy định của cửa hàng.</WrapperSmallText>
        </WrapperFooterComponent>
    </WrapperFooter1>
  )
}

export default HomepageFooterComponent