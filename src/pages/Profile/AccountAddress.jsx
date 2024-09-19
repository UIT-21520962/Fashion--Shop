import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import { WrapperInfoText, WrapperLabel, WrapperLabelSmall, WrapperSmallInfoContainer, WrapperTextSmall } from './style'
import { WrapperButton } from './../LoginPage/style';
import * as userService from '../../services/userService'
import InputContainer from '../../components/InputContainer/InputContainer';
import { useMutationHook } from './../../hooks/useMutationHook';
import { jwtDecode } from "jwt-decode";
import { useSelector } from 'react-redux';


const AccountAddress = () => {

  const [gender, setGender] = useState('')
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [city, setCity] = useState('Hà Nội')
  const [district, setDistrict] = useState('Quận Ba Đình')
  const [ward, setWard] = useState('Phường Phúc Xá')
  const [detail, setDetail] = useState('')
  const [isDefault, setIsDefault] = useState(false)  

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const user = useSelector((state) => state.user)
  const [index, setIndex] = useState(null)

  const [addressList, setAddressList] = useState(user.address_list)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await userService.getProvinces();
        // Đảm bảo response.data là mảng các tỉnh thành
        setProvinces(response);
        setDistricts(provinces.find((province) => province.name === "Thành phố Hà Nội").districts)
        setWards(districts.find((district) => district.name === "Quận Ba Đình").wards)
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
      const selectedProvince = provinces.find((p) => p.name === city);
      if (selectedProvince) {
        setDistricts(selectedProvince.districts);
      }
  }, [city]);

  useEffect(() => {
    const selectedDistrict = districts.find((d) => d.name === district);
    if (selectedDistrict) {
      setWards(selectedDistrict.wards);
    }
  }, [district]);


  const token = localStorage.getItem('access_token')
  const access_token = JSON.parse(token)
  const decoded = jwtDecode(access_token)
  const mutation = useMutationHook(data => userService.updateUser(decoded?.id, access_token, data))
  const { isSuccess } = mutation

  const onClickUpdateButton = () => {
    const newAddressList = [...addressList];
    
    const address = detail + ', ' + ward + ', ' + district + ', ' + city;
    const newAddress = {  fullName: fullName,
      gender: gender,
      phoneNumber: phoneNumber,
      address: address,
      isDefault: isDefault}

    newAddressList[index] = newAddress
    mutation.mutate({
      address_list: newAddressList
    })
  }

  useEffect(() => {
    if (isSuccess) {
      window.alert('Success')
      window.location.reload()
    }
  },[isSuccess])

  const [isClickUpdateAddress, setIsClickUpdateAddress] = useState(false)
  const onClickUpdateAddress = (index) => {
    setIndex(index)
    setIsClickUpdateAddress(!isClickUpdateAddress)
    setFullName(user.address_list[index].fullName)
    setPhoneNumber(user.address_list[index].phoneNumber)
    setCity(user.address_list[index].address.split(',')[3])
    setDistrict(user.address_list[index].address.split(',')[2])
    setWard(user.address_list[index].address.split(',')[1])
    setDetail(user.address_list[index].address.split(',')[0])
    setIsDefault(user.address_list[index].isDefault)
    setGender(user.address_list[index].gender)
  }
  const onClickCancelUpdateAddress = () => {
    setIsClickUpdateAddress(!isClickUpdateAddress)
    setFullName('')
    setPhoneNumber('')
    setCity('Hà Nội')
    setDistrict('Quận Ba Đình')
    setWard('Phường Phúc Xá')
    setDetail('')
  }
  const onClickCancelAddAddress = () => {
    setIsClickAddAddress(!isClickAddAddress)
    setFullName('')
    setPhoneNumber('')
    setCity('Hà Nội')
    setDistrict('Quận Ba Đình')
    setWard('Phường Phúc Xá')
    setDetail('')
  }

  const mutation1 = useMutationHook(data => userService.updateUser(decoded?.id, access_token, data))
  const isAddSuccess = mutation1?.isSuccess

  useEffect(() => {
    if (isAddSuccess) {
      window.alert('Success')
      window.location.reload()
    }
  },[isAddSuccess])

  const [isClickAddAddress, setIsClickAddAddress] = useState(false)
  const onClickAddAddress = () => {
    setIsClickAddAddress(!isClickAddAddress)
  }
  useEffect(() => {
    // Logic khởi tạo addressList
    setAddressList(user.address_list);
  }, [user.address_list]);


  const onClickAddressButton = () => {
    const newAddressList = [...addressList];
    
    const address = detail + ', ' + ward + ', ' + district + ', ' + city;
    const newAddress = {  fullName: fullName,
      gender: gender,
      phoneNumber: phoneNumber,
      address: address,
      isDefault: isDefault}
    // Thêm đối tượng mới vào mảng
    if (isDefault) {
      newAddressList.unshift(newAddress);
    } else {
      newAddressList.push(newAddress);
    }
    // Cập nhật state với mảng mới
    setAddressList(newAddressList);
    mutation1.mutate({
      address_list: newAddressList
    })
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center',marginTop: '130px'}}>
      <div style={{ width: '74rem',marginBottom: '50px', display: 'flex'}}>
        <Profile section={'address'}></Profile>
        <div style={{marginLeft: '20px', marginTop: '48px', display: 'flex', flexDirection: 'column'}}>
            <WrapperLabel style={{marginBottom: '20px'}}>SỔ ĐỊA CHỈ</WrapperLabel>
            {!isClickUpdateAddress && (
              <div>
                {user.address_list ? (
                  <div>
                      {user.address_list.map((address, index) => (
                          <WrapperSmallInfoContainer>
                            {address.isDefault && (
                            <span style={{fontSize: '12px', border: '2px solid #000', width: '15%', textAlign: 'center', borderRadius: '9px'}}>Mặc định</span>
                            )}
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                              <WrapperInfoText>{address.fullName} - {address.phoneNumber}</WrapperInfoText>
                              <WrapperInfoText>Địa chỉ: {address.address}</WrapperInfoText>
                            </div>
                            <div style={{alignItems: 'center', display: 'flex', cursor: 'pointer', marginTop: '10px'}} onClick={() => onClickUpdateAddress(index)}>
                                <span>Chỉnh sửa</span>
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" alt="" style={{width: '20px', height: '20px', marginLeft: '5px'}}/>
                            </div>
                        </WrapperSmallInfoContainer>                      
                      ))}
                  </div>
                ) : (
                <WrapperInfoText>Bạn không có địa chỉ nào.</WrapperInfoText>
                )}
              </div>
            )}
            {isClickUpdateAddress && (
              <div style={{border: '1px solid gray', borderRadius: '10px', padding: '10px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                  <WrapperInfoText>Anh</WrapperInfoText>
                  <input type="checkbox" value={"Anh"} checked={gender === 'Anh'} onChange={() => setGender('Anh')}></input>
                  <WrapperInfoText>Chị</WrapperInfoText>
                  <input type="checkbox" value={"Chị"} checked={gender === 'Chị'} onChange={() => setGender('Chị')}></input>
                </div>
                <WrapperLabelSmall>Họ và tên <span style={{color: 'red'}}>*</span></WrapperLabelSmall>
                <InputContainer type={'text'} value={fullName} onTextChange={setFullName} placeholder={'Nhập họ và tên'}></InputContainer>
                <WrapperLabelSmall>Số điện thoại <span style={{color: 'red'}}>*</span></WrapperLabelSmall>
                <InputContainer type={'text'} value={phoneNumber} onTextChange={setPhoneNumber} placeholder={'Nhập số điện thoại'}></InputContainer>
        
                <div style={{marginTop: '15px'}}>
                  <div>
                    Tỉnh thành:
                    <select onChange={(e) => setCity(e.target.value)} value={city} style={{height: '30px', borderRadius: '5px', margin: '5px'}}>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.name}>
                          {province.name}
                        </option>
                      ))}
                    </select>

                    Quận/Huyện: 
                    <select onChange={(e) => setDistrict(e.target.value)} value={district} style={{height: '30px', borderRadius: '5px', margin: '5px'}}>
                      {districts.map((district) => (
                        <option key={district.code} value={district.name}>
                          {district.name}
                        </option>
                      ))}
                    </select>

                    Phường Xã: 
                    <select onChange={(e) => setWard(e.target.value)} value={ward} style={{height: '30px', borderRadius: '5px', margin: '5px'}}>
                      {wards.map((ward) => (
                        <option key={ward.code} value={ward.name}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <WrapperLabelSmall>Địa chỉ chi tiết <span style={{color: 'red'}}>*</span></WrapperLabelSmall>
                  <InputContainer type={'text'} value={detail} onTextChange={setDetail} placeholder={'Nhập địa chỉ chi tiết'}></InputContainer>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <WrapperLabelSmall>Đặt làm mặc định</WrapperLabelSmall>        
                    <input type="checkbox" checked={isDefault} onChangeCapture={() => setIsDefault(!isDefault)}></input>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', width: '750px'}}>
                    <WrapperButton onClick={onClickCancelUpdateAddress} style={{height: '35px' ,width: '350px', color: '#000', backgroundColor: 'white', border: '2px solid #000'}}>Hủy</WrapperButton>
                    <WrapperButton style={{height: '35px' ,width: '350px', border: '2px solid #000'}} onClick={onClickUpdateButton}>Lưu</WrapperButton>
                  </div>
                </div>
              </div>
            )}

            {isClickAddAddress && (
              <div style={{border: '1px solid gray', borderRadius: '10px', padding: '10px'}}>
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '15px'}}>
                  <WrapperInfoText>Anh</WrapperInfoText>
                  <input type="checkbox" value={"Anh"} checked={gender === 'Anh'} onChange={() => setGender('Anh')}></input>
                  <WrapperInfoText>Chị</WrapperInfoText>
                  <input type="checkbox" value={"Chị"} checked={gender === 'Chị'} onChange={() => setGender('Chị')}></input>
                </div>
                <WrapperLabelSmall>Họ và tên <span style={{color: 'red'}}>*</span></WrapperLabelSmall>
                <InputContainer type={'text'} onTextChange={setFullName} placeholder={'Nhập họ và tên'}></InputContainer>
                <WrapperLabelSmall>Số điện thoại <span style={{color: 'red'}}>*</span></WrapperLabelSmall>
                <InputContainer type={'text'} onTextChange={setPhoneNumber} placeholder={'Nhập số điện thoại'}></InputContainer>
        
                <div style={{marginTop: '15px'}}>
                  <div>
                    Tỉnh thành:
                    <select onChange={(e) => setCity(e.target.value)}  style={{height: '30px', borderRadius: '5px', margin: '5px'}}>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.name}>
                          {province.name}
                        </option>
                      ))}
                    </select>

                    Quận/Huyện: 
                    <select onChange={(e) => setDistrict(e.target.value)}  style={{height: '30px', borderRadius: '5px', margin: '5px'}}>
                      {districts.map((district) => (
                        <option key={district.code} value={district.name}>
                          {district.name}
                        </option>
                      ))}
                    </select>

                    Phường Xã: 
                    <select onChange={(e) => setWard(e.target.value)}  style={{height: '30px', borderRadius: '5px', margin: '5px'}}>
                      {wards.map((ward) => (
                        <option key={ward.code} value={ward.name}>
                          {ward.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <WrapperLabelSmall>Địa chỉ chi tiết <span style={{color: 'red'}}>*</span></WrapperLabelSmall>
                  <InputContainer type={'text'}  onTextChange={setDetail} placeholder={'Nhập địa chỉ chi tiết'}></InputContainer>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <WrapperLabelSmall>Đặt làm mặc định</WrapperLabelSmall>        
                    <input type="checkbox" checked={isDefault} onChangeCapture={() => setIsDefault(!isDefault)}></input>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', width: '750px'}}>
                    <WrapperButton onClick={onClickCancelAddAddress} style={{height: '35px' ,width: '350px', color: '#000', backgroundColor: 'white', border: '2px solid #000'}}>Hủy</WrapperButton>
                    <WrapperButton style={{height: '35px' ,width: '350px', border: '2px solid #000'}} onClick={onClickAddressButton}>Lưu</WrapperButton>
                  </div>
                </div>
              </div>
            )}

            <WrapperButton style={{width: '130px'}} onClick={onClickAddAddress}>Thêm địa chỉ</WrapperButton>

        </div>
      </div>
    </div>
  )
}

export default AccountAddress