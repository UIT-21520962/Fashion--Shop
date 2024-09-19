import React from 'react';

const CategoryDetails = ({ category }) => {
  return (
      <div style={{ paddingTop: '40px', paddingBottom: '20px', width: '74rem', marginLeft: '150px'}}>
          {category.Data.map((data, index) => (
              <div style={{display: 'flex', flexDirection: 'row'}}>  
                <span key={index} style={{ paddingBottom: '40px', fontSize: '16px', fontWeight: 'bold', color: '#000', cursor: 'pointer' }}>{data['SubCategory']}</span>
                <div style={{ display: 'flex', paddingLeft: '60px'}}>
                  {data['Types'].map((type, index) => (
                    <span key={index} style={{ paddingRight: '40px', fontSize: '12px', paddingTop: '4px',cursor: 'pointer' }}>{type}</span>
                  ))}
                </div>
              </div>
          ))}
      </div>
  );
}

export default CategoryDetails;
