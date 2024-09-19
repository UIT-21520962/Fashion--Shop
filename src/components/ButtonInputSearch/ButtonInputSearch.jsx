import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton } = props;

  // Sử dụng state để theo dõi giá trị của trường input
  const [inputValue, setInputValue] = useState('');

  // Hàm xử lý sự thay đổi giá trị trong trường input
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', width: '30rem', height: '2.25rem' }}>
      <Input
        size={size}
        placeholder={placeholder}
        style={{ fontSize: '0.75rem', marginRight: '0.625rem', color: 'black' }}
        value={inputValue}
        onChange={handleInputChange} 
      />
      {inputValue && (
        <Button
          size={size}
          icon={<SearchOutlined />}
          style={{ backgroundColor: 'yellow', height: '100%', fontWeight: 'bold' }}
        >
          {textButton}
        </Button>
      )}
    </div>
  );
};

export default ButtonInputSearch;
