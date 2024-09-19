import { Col, Image } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
    height: 64px;
    width: 64px;
    border: 1px solid black;
    border-radius: 20px;
`
export const WrapperStyleColImage = styled(Col)`
    flex-basics: unset;
    display: flex;
`
export const WrapperStyleNameProduct = styled.h1`
    padding: 0 0 0 100px;
    color: #010101;
    font-weight: 600;
    margin-bottom: 4px;
    font-size: 20px;
    line-height: 32px;
`
export const WrapperSalePrice=styled.span`
    font-weight: 600;
    line-height: 24px;
    color: #f11a27;
    font-size: 16px;
`
export const WrapperOriginalPrice=styled.span`
    font-weight: 500;
    line-height: 24px;
    font-size: 12px;
    color: #666;
`
