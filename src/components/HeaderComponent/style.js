import styled from "styled-components";

export const WrapperHeader = styled.div`
  height: 4.5rem; /* Sử dụng em hoặc rem thay vì px */
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  background-Color: #000;
`;

export const WrapperIcon = styled.div`
  background-color: #fafafa33;
  margin-left: 1em; /* Sử dụng em hoặc rem thay vì px */
  width: 36px; /* Sử dụng em hoặc rem thay vì px */
  height: 36px; /* Sử dụng em hoặc rem thay vì px */
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 0.6em; /* Sử dụng em hoặc rem thay vì px */
`;

export const WrapperLabelSmall = styled.span`
  color: white;
  font-size: 0.625em; /* Sử dụng em hoặc rem thay vì px */
  line-height: 1rem; /* Sử dụng em hoặc rem thay vì px */
  margin-bottom: 0.125em; /* Sử dụng em hoặc rem thay vì px */
  margin-left: 0.8375em; /* Sử dụng em hoặc rem thay vì px */
`;

export const WrapperLabelBig = styled.button`
  font-size: 0.75em; /* Sử dụng em hoặc rem thay vì px */
  background-color: #000;
  color: white;
  font-weight: 800;
  letter-spacing: 0.06em; /* Sử dụng em hoặc rem thay vì px */
  border: solid #000;
  cursor: pointer;
`;
export const WrapperLeftHeader = styled.div`
  flex-direction: column;
  float: left;
  margin-right: 78rem;

`;

export const WrapperRightHeader = styled.div`
  flex-direction: column;
  float: right;
`;
export const WrapperProductCategory = styled.div`
  color: white;
  height: 3.125em; /* Sử dụng em hoặc rem thay vì px */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875em; /* Sử dụng em hoặc rem thay vì px */
  font-weight: 600;
  line-height: 1.25em; /* Sử dụng em hoặc rem thay vì px */
  text-transform: uppercase;
  cursor: pointer;
  background-color: inherit;
  border: solid #4d4d4d;
  margin-right: 3.5rem;
  position: relative;
  /* Hiệu ứng khi di chuột qua */
  transition: background-color 0.3s ease; /* Thời gian và kiểu chuyển đổi có thể thay đổi */

  /* Tạo đường kẻ màu vàng phía dưới */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px; /* Độ rộng và cao của đường kẻ */
    background-color: yellow; /* Màu sắc của đường kẻ */
    transition: transform 0.3s ease; /* Hiệu ứng chuyển đổi khi hover */
    transform: scaleX(0); /* Độ rộng ban đầu là 0, sẽ mở rộng khi hover */
    transform-origin: center; /* Mở rộng từ trung tâm */
  }

  &:hover::after {
    transform: scaleX(1); /* Mở rộng đường kẻ khi hover */
  }
`;

export const ProductCategoryContainer=styled.div`
  background-Color: #4d4d4d;
  pointer-Events: auto; 
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;  
`
export const WrapperOrderTextBig=styled.span`
    font-size: 20px;
    line-height: 32px;
    font-style: normal;
    font-weight: 600;
    color: #010101;
    text-transform: uppercase;
    padding-bottom: 0;
    border: 0;
    padding-left: 40px;
`

export const InputContainer=styled.div`
    width: 646px;
    height: 38px;
    border-radius: 10px;
    background-color: white;
    
`
