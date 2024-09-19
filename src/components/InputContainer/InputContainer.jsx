import React from 'react'

const InputContainer = ({placeholder, type, onTextChange, value, width, onBlur, index}) => {
  return (
    <div style={{ position: 'relative', display: 'flex',alignItems: 'center', marginTop: '10px'}}>
        <input
            type={type}
            placeholder={placeholder}
            style={{
                height: '33px',
                width: width ? width : '553px',
                backgroundColor: '#F6F6F6',
                borderRadius: '6px',
                border: '0.001px solid gray',
                marginBottom: '10px',
            }}
            value={value}
            onChange={index ? (e) => onTextChange && onTextChange(index, e.target.value) : (e) => onTextChange && onTextChange(e.target.value)}
            onBlur={onBlur}
        />
    </div>  )
}

export default InputContainer