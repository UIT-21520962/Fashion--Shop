import React from "react";
import ImageProduct from '../../assets/images/product1.webp'
import ImageProductSmall from '../../assets/images/imagesmall.webp'
import ImageProductSmall1 from '../../assets/images/imagesmall1.webp'
import ImageProductSmall2 from '../../assets/images/imagesmall2.webp'
import { Col, Image, Row } from "antd";
import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperSalePrice, WrapperOriginalPrice} from "./style";


const ProductDetailsComponent = () => {
    return(

        <Row style={{ padding:'16px', background: '#fff'}}>
            <Col span={10}>
                <Image style={{padding: '120px 120px'}} src={ImageProduct} alt="image product" preview= {false} />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between', border: '2px', borderColor: "black"}}>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview={true} /></WrapperStyleColImage>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={ImageProductSmall1} alt="image small" preview={true} /></WrapperStyleColImage>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={ImageProductSmall2} alt="image small" preview={true} /></WrapperStyleColImage>
                    <WrapperStyleColImage span={4}><WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview={true} /></WrapperStyleColImage>
                    
                </Row>
            </Col>
            <Col span={14}>
                <WrapperStyleNameProduct>ECKO UNLTD GIÀY SNEAKERS MEN IF22-26708</WrapperStyleNameProduct>
                <div style={{textAlign: 'left', padding: '0 0 0 100px'}}>
                <WrapperSalePrice>799.000 đ  </WrapperSalePrice>
                <WrapperOriginalPrice>1.699.000 đ</WrapperOriginalPrice>
                <WrapperSalePrice>(60%)  </WrapperSalePrice>
                <span style={{padding:'0 0 0 200px'}}><a href="">&#9825; Yêu thích</a></span>
                <p>(Giá niêm yết của sản phẩm đã bao gồm thuế)</p>
                </div>
                <div>

                </div>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent