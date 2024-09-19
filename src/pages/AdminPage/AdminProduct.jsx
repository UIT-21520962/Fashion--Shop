import React, { useEffect, useState } from 'react'
import { WrapperRight, WrapperText, WrapperText1, WrapperTextProduct, WrapperTextProductDetail } from './style'
import AdminPage from './AdminPage'
import Header from './Header'
import { useMutationHook } from '../../hooks/useMutationHook'
import * as productService from '../../services/productService'
import { WrapperButton } from './../LoginPage/style';
import InputContainer from './../../components/InputContainer/InputContainer';

const AdminProduct = () => {
  const [isClickNavbar, setIsClickNavbar] = useState(true)
  const onClickNavbar = () => {
    setIsClickNavbar(!isClickNavbar)
  }

  const [key, setKey] = useState('')
  const [condition, setCondition] = useState('name')
  const mutation = useMutationHook(data => productService.getAllProduct(data, condition, key))
  const { data } = mutation

  useEffect(() => {
    mutation.mutate({})
  },[])

  const onClickSearch = () =>{
    mutation.mutate({})
  }
  const [product, setProduct] = useState(null)
  const clickProductDetail = (data) => {
    setIsClickAddProduct(false)
    setProduct(data)
    setIsClickUpdateProduct(false)
  }

  const [isClickAddProduct, setIsClickAddProduct] = useState(false)
  const clickAddProduct = () => {
    setIsClickAddProduct(!isClickAddProduct)
    setIsClickUpdateProduct(false)
    setProduct(null)
    setName('')
    setBrand('')
    setCategory('')
    setDescription('')
    setImgUrls('')
    setPrice('')
    setSalePrice('')
    setSizes('')
    setSex('')
    setSizeDivs([])
    setSizeDivsUrl([])
  }


  const [sizeDivs, setSizeDivs] = useState([]); // Mảng chứa các div

  const onClickAddSize = () => {
    setSizeDivs([...sizeDivs, {}]); // Thêm một phần tử trống vào mảng khi click
  };

  const removeSizeDiv = (index) => {
    const newDivs = [...sizeDivs];
    newDivs.splice(index, 1); // Xóa một phần tử khỏi mảng
    setSizeDivs(newDivs);
  };

  const [sizeDivsUrl, setSizeDivsUrl] = useState([]); // Mảng chứa các div

  const onClickAddSizeUrl = () => {
    setSizeDivsUrl([...sizeDivsUrl, {}]); // Thêm một phần tử trống vào mảng khi click
  };

  const removeSizeDivUrl = (index) => {
    const newDivs = [...sizeDivsUrl];
    newDivs.splice(index, 1); // Xóa một phần tử khỏi mảng
    setSizeDivsUrl(newDivs);
  };

  const mutation1 = useMutationHook(async ({ id, access_token }) => {
    return productService.deleteProduct(id, access_token);
  });

  const onClickDelete = (productID) => {
    const userConfirmed = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    const token = localStorage.getItem('access_token');
    const accessToken = JSON.parse(token)

    if (userConfirmed) {
      mutation1.mutate({ id: productID, access_token: accessToken });
    }
  };

  const data1 = mutation1?.data;

  useEffect(() => {
    if (data1 && data1.message === 'Success') {
      window.alert('Success');
      window.location.reload(); // Tải lại trang
    }
  }, [data1]);

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [description, setDescription] = useState('')
  const [sex, setSex] = useState('')
  const [price, setPrice] = useState(0)
  const [salePrice, setSalePrice] = useState(0)
  

  const [sizes, setSizes] = useState([{}]);
  const [sizesCopy, setSizesCopy] = useState([{}]);

  const [size, setSize] = useState(0)

  const handleSizeChange = (num) => {
    setSizes([...sizes, {size, quantity: num.target.value}])
  };

  
  const handleSizeUpdate = (index, newSize) => {
  const updatedSizes = [...sizes]; 
  updatedSizes[index].size = newSize; 
  setSizes(updatedSizes); 
};
  const handleQuantityUpdate = (index, newQuantity) => {
  const updatedSizes = [...sizes]; 
  updatedSizes[index].quantity = newQuantity; 
  setSizes(updatedSizes); 
};

  const [imgUrls, setImgUrls] = useState([]);
  const [imgUrlsCopy, setImgUrlsCopy] = useState([]);

  const handleImgUrlsUpdate = (index, newUrl) => {
  const updatedImgUrls = [...imgUrls]; 
  updatedImgUrls[index] = newUrl; 
  setImgUrls(updatedImgUrls); 
};

  const addImageUrl = (event) => {
    const url = event.target.value;
    if (url.trim() !== '') {
      setImgUrls([...imgUrls, url]);
    }
  };
  const token = localStorage.getItem('access_token')
  const access_token = JSON.parse(token)
  const mutation2 = useMutationHook (data => productService.createProduct(data, access_token))
  const data2 = mutation2?.data

  useEffect(() => {
    if (data2?.message === "Success") {
      window.alert('Success')
      window.location.reload()
    } else if (data2?.message==="ERR") {
      window.alert(data2?.message)
    }
  },[data2]);

  const clickCreateProduct = () => {
    mutation2.mutate({
      name,
      category,
      brand,
      sex,
      price,
      salePrice,
      imgUrls,
      sizes,
      description
    })
  }

  const [isClickUpdateProduct, setIsClickUpdateProduct] = useState(false)

  const onClickUpdate = () => {
    setIsClickAddProduct(false)
    setIsClickUpdateProduct(true)

    setName(product.name)
    setBrand(product.brand)
    setCategory(product.category)
    setDescription(product.description)
    setImgUrls(product.imgUrls)
    setImgUrlsCopy(product.imgUrls)
    setPrice(product.price)
    setSalePrice(product.salePrice)
    setSizes(product.sizes)
    setSizesCopy(product.sizes)
    setSex(product.sex)
    setSizeDivs([])
    setSizeDivsUrl([])
  };

  const onClickCancel = () => {
    setIsClickUpdateProduct(false)
    setName('')
    setBrand('')
    setCategory('')
    setDescription('')
    setImgUrls('')
    setPrice('')
    setSalePrice('')
    setSizes('')
    setSex('')
    setSizeDivs([])
    setSizeDivsUrl([])
  };

  const mutation3 = useMutationHook(data => {return productService.updateProduct(product._id, data, access_token)})
  const onClickUpdateProduct = () => {
    mutation3.mutate({
      name,
      category,
      brand,
      sex,
      price,
      salePrice,
      sizes,
      imgUrls,
      description
    })
  }

  const data3 = mutation3?.data

  useEffect(() => {
    if (data3?.message === "Success") {
      window.alert('Success')
      window.location.reload()
    } else if (data3?.status==="ERR") {
      window.alert(data3?.message)
    }
  },[data3]);

  useEffect(() => {
    if (!access_token) {
      window.alert('Xin hãy đăng nhập')
    }
  },[access_token])

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{width: '92rem'}}>
            <Header></Header>        
            <div style={{display: 'flex'}}>        
            {isClickNavbar && (<AdminPage section={'product'}></AdminPage>)}
            <WrapperRight>
              <div style={{height: '20px', width: '20px', marginLeft: '20px', cursor: 'pointer'}} onClick={onClickNavbar}>
                  <img src="https://cdn.icon-icons.com/icons2/2090/PNG/512/hide_sidebar_horizontal_icon_128227.png" alt="" style={{width: '100%'}}/>
              </div>
              <WrapperText1>Sản phẩm</WrapperText1>
              <div  style={{marginLeft: '20px', display: 'flex'}}>
                <InputContainer placeholder={'Nội dung tìm kiếm'} onTextChange={setKey}></InputContainer>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '28px', marginLeft: '15px'}}>
                  <WrapperButton style={{width: '150px'}} onClick={onClickSearch}>Tìm kiếm</WrapperButton>
                </div>
              </div>
              <WrapperButton style={{width: '150px', marginLeft: '20px', marginBottom: '10px'}} onClick={clickAddProduct}>Thêm sản phẩm</WrapperButton>
              <div style={{ height: '500px', overflowY: 'auto', marginLeft: '10px' }}>
                <div style={{ display: 'flex' }}>
                  <WrapperTextProduct style={{ flex: 3 }}>Tên sản phẩm</WrapperTextProduct>
                  <WrapperTextProduct>Nhóm hàng</WrapperTextProduct>
                  <WrapperTextProduct>Thương hiệu</WrapperTextProduct>
                  <WrapperTextProduct>Giới tính</WrapperTextProduct>
                  <WrapperTextProduct>Giá</WrapperTextProduct>
                  <WrapperTextProduct>Giá sale</WrapperTextProduct>
                  <WrapperTextProduct>Size và số lượng</WrapperTextProduct>

                </div>
                {data && data.data && data.data.map((product, index) => (
                  <div key={index} style={{ display: 'flex' }}>
                    <WrapperTextProductDetail style={{ flex: 3, cursor: 'pointer' }} onClick = {() => clickProductDetail(product)}>{product.name}</WrapperTextProductDetail>
                    <WrapperTextProductDetail>{product.category}</WrapperTextProductDetail>
                    <WrapperTextProductDetail>{product.brand}</WrapperTextProductDetail>
                    <WrapperTextProductDetail>{product.sex}</WrapperTextProductDetail>
                    <WrapperTextProductDetail>{product.price}</WrapperTextProductDetail>
                    <WrapperTextProductDetail>{product.salePrice}</WrapperTextProductDetail>
                    <WrapperTextProductDetail>
                      {product.sizes.map((sizeInfo, index) => (
                          <div key={index}>
                              Size: {sizeInfo.size}, Số lượng: {sizeInfo.quantity}
                          </div>
                      ))}
                    </WrapperTextProductDetail>
                  </div>
                ))}
              </div>
          {product !== null && (
                <div style={{position: 'absolute', width: '700px', backgroundColor: 'white', marginLeft: '500px', borderRadius: '10px', padding: '10px'}}>
                  <div style={{position: 'absolute', marginLeft: '680px', cursor: 'pointer'}}
                    onClick={() => setProduct(null)}
                    >
                    x
                  </div>
                  <div style={{display:'flex'}}>
                    <WrapperButton style={{width: '150px', margin: '10px'}} onClick={() => onClickUpdate(product._id)}>Sửa sản phẩm</WrapperButton>
                    <WrapperButton style={{width: '150px', margin: '10px'}} onClick={() => onClickDelete(product._id)}>Xóa sản phẩm</WrapperButton>
                  </div>

                  {isClickUpdateProduct ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <WrapperTextProduct>Tên sản phẩm:</WrapperTextProduct>
                      <InputContainer type={'text'} value={name} onTextChange={(text) => setName(text)}></InputContainer>
                    </div>
                  ) : (                  
                      <WrapperTextProduct>Tên sản phẩm: <span style={{fontWeight: '400'}}>{product.name}</span></WrapperTextProduct>
                  )}

                  {isClickUpdateProduct ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <WrapperTextProduct>Nhóm hàng: </WrapperTextProduct>
                      <InputContainer type={'text'} value={category} onTextChange={(text) => setCategory(text)}></InputContainer>
                    </div>
                  ) : (                  
                    <WrapperTextProduct>Nhóm hàng: <span style={{fontWeight: '400'}}>{product.category}</span></WrapperTextProduct>
                  )}

                  {isClickUpdateProduct ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <WrapperTextProduct>Thương hiệu: </WrapperTextProduct>
                      <InputContainer type={'text'} value={brand} onTextChange={(text) => setBrand(text)}></InputContainer>
                    </div>
                  ) : (                  
                    <WrapperTextProduct>Thương hiệu: <span style={{fontWeight: '400'}}>{product.brand}</span></WrapperTextProduct>
                  )}

                  {isClickUpdateProduct ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <WrapperTextProduct>Mô tả: </WrapperTextProduct>
                      <InputContainer type={'text'} value={description} onTextChange={(text) => setDescription(text)}></InputContainer>
                    </div>
                  ) : (                  
                    <WrapperTextProduct>Mô tả: <span style={{fontWeight: '400'}}>{product.description}</span></WrapperTextProduct>
                  )}

                  {isClickUpdateProduct ? (
                    <div style={{display: 'flex', alignItems: 'center', marginRight: '495px'}}>
                      <WrapperTextProduct>Giới tính: </WrapperTextProduct>
                        <select onChange={(event) => setSex(event.target.value)}>
                          <option value={sex}></option>
                          <option value="Nam">Nam</option>
                          <option value="Nu">Nữ</option>
                          <option value="Unisex">Unisex</option>
                          <option value="Khac">Khác</option>
                        </select>                    
                    </div>
                  ) : (                  
                    <WrapperTextProduct>Giới tính: <span style={{fontWeight: '400'}}>{product.sex}</span></WrapperTextProduct>
                  )}

                  {isClickUpdateProduct ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <WrapperTextProduct>Giá: </WrapperTextProduct>
                      <InputContainer type={'text'} value={price} onTextChange={(text) => setPrice(text)}></InputContainer>
                    </div>
                  ) : (                  
                    <WrapperTextProduct>Giá: <span style={{fontWeight: '400'}}>{product.price}</span></WrapperTextProduct>
                  )}

                  {isClickUpdateProduct ? (
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <WrapperTextProduct>Giá sale: </WrapperTextProduct>
                      <InputContainer type={'text'} value={salePrice} onTextChange={(text) => setSalePrice(text)}></InputContainer>
                    </div>
                  ) : (                  
                    <WrapperTextProduct>Giá sale: <span style={{fontWeight: '400'}}>{product.salePrice}</span></WrapperTextProduct>
                  )}
                  {isClickUpdateProduct ? (
                    <div>
                  <WrapperTextProduct>Size và số lượng: </WrapperTextProduct>
                      <span style={{fontWeight: '400'}}>{sizesCopy.map((sizeInfo, index) => (
                        <div key={index}>
                          <div style={{marginLeft: '10px', display: 'flex', width: '160px',  alignItems: 'center', justifyContent: 'space-between', marginRight: '10px'}}> 
                            <input placeholder={sizeInfo.size} width={'70px'} 
                              onChange={(e) => handleSizeUpdate(index, e.target.value)}
                              style={{height: '30px', width: '60px', borderRadius: '5px', marginRight: '10px', marginBottom: '5px', border: '0.1px solid gray'}}
                              ></input>
                            <input placeholder={sizeInfo.quantity} width={'70px'} type="number" 
                              onChange={(e) => handleQuantityUpdate(index, e.target.value)}
                              style={{height: '30px', width: '60px', borderRadius: '5px', marginRight: '10px', marginBottom: '5px', border: '0.1px solid gray'}}
                              ></input>
                          </div>                        
                        </div>
                        ))}
                      </span>
                          <div style={{marginLeft: '10px'}}>
                              <img src="https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790881-6add_84227.png" alt=""
                                      style={{width: '20px', height: '20px', cursor: 'pointer', marginRight: '10px'}}
                                      onClick={onClickAddSize}
                                  />  
                              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828945.png" alt=""
                                  style={{width: '20px', height: '20px', cursor: 'pointer'}}
                                  onClick={removeSizeDiv}
                              />
                          </div>
                          {sizeDivs.map((sizeDiv, index) => (
                            <div key={index}>
                              <div style={{marginLeft: '10px', display: 'flex', width: '160px',  alignItems: 'center', justifyContent: 'space-between', marginRight: '10px'}}> 
                                  <input placeholder={'Nhập size'} width={'70px'} 
                                    onChange={(e) => setSize(e.target.value)}
                                    style={{height: '30px', width: '60px', borderRadius: '5px', marginRight: '10px', marginBottom: '5px', border: '0.1px solid gray'}}
                                    ></input>
                                  <input placeholder={'Nhập số lượng'} width={'70px'} type="number" 
                                    onBlur={(e) => handleSizeChange(e)}
                                    style={{height: '30px', width: '60px', borderRadius: '5px', marginRight: '10px', marginBottom: '5px', border: '0.1px solid gray'}}
                                    ></input>
                              </div>
                            </div>
                          ))}
                      </div>
                  ) : ( 
                  <WrapperTextProduct>Size và số lượng 
                      <span style={{fontWeight: '400'}}>{product.sizes.map((sizeInfo, index) => (
                        <div key={index}>
                            Size: {sizeInfo.size}, Số lượng: {sizeInfo.quantity}
                        </div>
                        ))}
                    </span>
                  </WrapperTextProduct>)}
                
                  {isClickUpdateProduct ? (
                    <div>
                      <WrapperTextProduct>Hình ảnh</WrapperTextProduct>
                        {imgUrlsCopy.map((img, index) => (
                          <div key={index}>
                            <div style={{marginLeft: '10px', display: 'flex', width: '170px', alignItems: 'center'}}>   
                              <div style={{marginRight: '10px'}}>
                                <input placeholder={img} width={'70px'} type="text" 
                                  onBlur={addImageUrl}
                                  style={{height: '30px', width: '685px', borderRadius: '5px', marginRight: '10px', marginBottom: '5px', border: '0.1px solid gray'}}
                                  ></input>  
                                </div>
                            </div>
                          </div>
                        ))}
                          <div style={{marginLeft: '10px'}}>
                            <img src="https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790881-6add_84227.png" alt=""
                                style={{width: '20px', height: '20px', cursor: 'pointer', marginRight: '10px'}}
                                onClick={onClickAddSizeUrl}
                            />
                            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828945.png" alt=""
                                style={{width: '20px', height: '20px', cursor: 'pointer'}}
                                onClick={removeSizeDivUrl}
                            />
                          </div>
                            {sizeDivsUrl.map((sizeDiv, index) => (
                              <div key={index}>
                                <div style={{marginLeft: '10px', display: 'flex', width: '170px', alignItems: 'center'}}>   
                                  <div style={{marginRight: '10px'}}>
                                      <input placeholder={'Nhập Url hình ảnh'} width={'70px'} type="text" 
                                        onChange={(e) => handleImgUrlsUpdate(index, e.target.value)}
                                        style={{height: '30px', width: '685px', borderRadius: '5px', marginRight: '10px', marginBottom: '5px', border: '0.1px solid gray'}}
                                        ></input>                              </div>
                                </div>
                              </div>
                            ))}
                    </div>
                  ) : (  
                    <div>                
                      <WrapperTextProduct>Hình ảnh</WrapperTextProduct>
                        {product.imgUrls.map((img, index) => (
                          <img key={index} src={img} style={{width: '100px', margin: '10px'}}/>
                        ))}
                    </div>
                  )}
                   
                  <div style={{display:'flex'}}>
                    <WrapperButton style={{width: '150px', margin: '10px'}} onClick={onClickUpdateProduct}>Cập nhập</WrapperButton>
                    <WrapperButton style={{width: '150px', margin: '10px'}} onClick={onClickCancel}>Hủy</WrapperButton>
                  </div>
                </div>
              )}

          {isClickAddProduct && (
                <div style={{position: 'absolute', width: '700px', backgroundColor: 'white', marginLeft: '500px', borderRadius: '10px', padding: '10px'}}>
                  <div style={{position: 'absolute', marginLeft: '680px', cursor: 'pointer'}}
                    onClick={() => setIsClickAddProduct(false)}
                    >
                    x
                  </div>

                  <div style={{display: 'flex', alignItems: 'center', width: '500px'}}>
                    <WrapperTextProduct style={{flex: 'none'}}>Tên sản phẩm: </WrapperTextProduct>
                    <div style={{width: '100%'}}> 
                      <InputContainer placeholder={'Nhập tên sản phẩm'} width={'100%'} onTextChange={setName}></InputContainer>
                    </div>  
                  </div>

                  <div style={{display: 'flex', alignItems: 'center', width: '500px'}}>
                    <WrapperTextProduct style={{flex: 'none'}}>Nhóm hàng: </WrapperTextProduct>
                    <div style={{width: '100%'}}> 
                      <InputContainer placeholder={'Nhập nhóm hàng'} width={'100%'} onTextChange={setCategory}></InputContainer>
                    </div>             
                  </div>

                  <div style={{display: 'flex', alignItems: 'center', width: '500px'}}>
                    <WrapperTextProduct style={{flex: 'none'}}>Thương hiệu: </WrapperTextProduct>
                    <div style={{width: '100%'}}> 
                      <InputContainer placeholder={'Nhập thương hiệu'} width={'100%'} onTextChange={setBrand}></InputContainer>
                    </div> 
                  </div>

                  <div style={{display: 'flex', alignItems: 'center', width: '500px'}}>
                    <WrapperTextProduct style={{flex: 'none'}}>Mô tả: </WrapperTextProduct>
                    <div style={{width: '100%'}}> 
                      <InputContainer placeholder={'Nhập mô tả sản phẩm'} width={'100%'} onTextChange={setDescription}></InputContainer>
                    </div> 
                  </div>

                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <WrapperTextProduct style={{flex: 'none'}}>Giới tính: </WrapperTextProduct>
                    <select onChange={(event) => setSex(event.target.value)}>
                      <option value=""></option>
                      <option value="Nam">Nam</option>
                      <option value="Nu">Nữ</option>
                      <option value="Unisex">Unisex</option>
                      <option value="Khac">Khác</option>
                    </select>
                  </div>

                  <div style={{display: 'flex', alignItems: 'center', width: '500px'}}>
                    <WrapperTextProduct style={{flex: 'none'}}>Giá: </WrapperTextProduct>
                    <div style={{width: '100%'}}> 
                      <InputContainer placeholder={'Nhập giá sản phẩm'} width={'100%'} type="number" onTextChange={setPrice}></InputContainer>
                    </div> 
                  </div>    

                  <div style={{display: 'flex', alignItems: 'center', width: '500px'}}>
                    <WrapperTextProduct style={{flex: 'none'}}>Giá sale: </WrapperTextProduct>
                    <div style={{width: '100%'}}> 
                      <InputContainer placeholder={'Nhập giá sale sản phẩm'} width={'100%'} type="number" onTextChange={setSalePrice}></InputContainer>
                    </div>
                  </div>                  

                  <WrapperTextProduct>Size và số lượng</WrapperTextProduct>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <div style={{marginLeft: '10px', display: 'flex', width: '160px',  alignItems: 'center', justifyContent: 'space-between', marginRight: '10px'}}> 
                        <InputContainer placeholder={'size'} width={'70px'}
                          onTextChange={setSize}
                          ></InputContainer>
                        <InputContainer placeholder={'số lượng'} width={'70px'} type="number"
                          onBlur={handleSizeChange}
                          ></InputContainer>
                      </div>
                        <img src="https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790881-6add_84227.png" alt=""
                            style={{width: '20px', height: '20px', cursor: 'pointer', marginRight: '10px'}}
                            onClick={onClickAddSize}
                        />  
                        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828945.png" alt=""
                            style={{width: '20px', height: '20px', cursor: 'pointer'}}
                            onClick={removeSizeDiv}
                        />
                    </div>
                    {sizeDivs.map((sizeDiv, index) => (
                      <div key={index}>
                        <div style={{marginLeft: '10px', display: 'flex', width: '160px',  alignItems: 'center', justifyContent: 'space-between', marginRight: '10px'}}> 
                            <InputContainer placeholder={'size'} width={'70px'}
                              onTextChange={setSize}
                              ></InputContainer>
                            <InputContainer placeholder={'số lượng'} width={'70px'} type="number"
                              onBlur={handleSizeChange}
                              ></InputContainer>
                          </div>
                      </div>
                    ))}
                  <div style={{width: '500px'}}>
                  <WrapperTextProduct>Hình ảnh: </WrapperTextProduct>
                    <div style={{marginLeft: '10px', display: 'flex', width: '220px', alignItems: 'center'}}>   
                      <div style={{marginRight: '10px'}}>
                        <InputContainer placeholder={'Nhập url hình ảnh'} width={'100%'} onBlur={addImageUrl}></InputContainer>
                      </div>
                      <img src="https://cdn.icon-icons.com/icons2/1244/PNG/512/1492790881-6add_84227.png" alt=""
                          style={{width: '20px', height: '20px', cursor: 'pointer', marginRight: '10px'}}
                          onClick={onClickAddSizeUrl}
                      />
                      <img src="https://cdn-icons-png.flaticon.com/512/1828/1828945.png" alt=""
                          style={{width: '20px', height: '20px', cursor: 'pointer'}}
                          onClick={removeSizeDivUrl}
                      />
                    </div> 

                    {sizeDivsUrl.map((sizeDiv, index) => (
                      <div key={index}>
                        <div style={{marginLeft: '10px', display: 'flex', width: '170px', alignItems: 'center'}}>   
                          <div style={{marginRight: '10px'}}>
                            <InputContainer placeholder={'Nhập url hình ảnh'} width={'100%'} onBlur={addImageUrl}></InputContainer>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                  <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                    <WrapperButton style={{width: '200px'}} onClick={clickCreateProduct}>Đồng ý</WrapperButton>
                  </div>
                </div>
              )}

            </WrapperRight>
            </div>
        </div>
    </div>  )
}

export default AdminProduct