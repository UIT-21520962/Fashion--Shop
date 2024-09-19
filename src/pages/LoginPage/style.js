
import { styled } from 'styled-components';

export const LoginContainer=styled.div`
    padding-top: 150px;
    display: flex;
    align-Items: center;
    flex-direction: column;
    padding-bottom: 50px;
    background-color: #f6f6f6;
`
export const LoginTitle=styled.span`
    font-size: 20px;
    color: #010101;
    margin-bottom: 0;
    line-height: 32px;
    text-transform: uppercase;
`

export const LoginType=styled.div`
    height: 100%;
    width: 100%;
    align-Items: center;
    display: flex;
    justify-content: center;
`

export const LoginBlockContainer=styled.div`
    width: 593px;
    border-radius: 10px;
    margin-top: 20px;
    background-color: white;
`
export const LoginTypeTitle=styled.span`
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    border: 0;
    float: left;
    background: rgba(0,0,0,0);
    color: #4d4d4d;
    border-radius: 0;
    cursor: pointer;
    border-bottom: ${(props) => props.borderBottom}; 
`

export const LoginLabel=styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-top: 10px;
`
export const WrapperButton=styled.div`
    width: 558.6px;
    height: 46px;
    background-color: #000;
    border-radius: 6px;
    margin-top: 30px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: bold;
`

