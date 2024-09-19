import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes/index'
import DefaulComponent from './components/DefaultComponent/DefaultComponent'
import { isJsonString } from './utils'
import * as userService from './services/userService'
import { useDispatch, useSelector  } from "react-redux"
import { jwtDecode } from "jwt-decode";
import { updateUser, resetUser } from './Redux/slice/userSlice'

function App () {

  const disPatch = useDispatch() 
  const user = useSelector((state) => state.user)
  useEffect(() => {
    const { storageData, decoded } = handleDecoded()
    const currentTime = new Date()
    let storageRefreshToken = localStorage.getItem('refresh_token')
    // const refreshToken = JSON.parse(storageRefreshToken)
    // const decodedRefreshToken =  jwtDecode(refreshToken)
    if (decoded?.id && currentTime.getTime()/1000 < decoded?.exp) {
       handleGetDetailUser(decoded?.id, storageData)
     } 
    
  }, [])

  const handleDecoded = () => {
    let storageData = user?.access_token || localStorage.getItem('access_token')
    let decoded = {}
    if (storageData && isJsonString(storageData) && !user?.access_token) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    return { decoded, storageData }
  }


  userService.axiosJWT.interceptors.request.use(async (config) => {
    // Do something before request is sent
    const currentTime = new Date()
    const { decoded } = handleDecoded()
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const decodedRefreshToken =  jwtDecode(refreshToken)
    if (decoded?.exp < currentTime.getTime() / 1000) {
      if(decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
      
        const data = await userService.refreshToken(refreshToken)
        config.headers['token'] = `Bearer ${data.access_token}`
      }else {
        disPatch(resetUser())
      }
    }
    return config;
  }, (err) => {
    return Promise.reject(err)
  })

  const handleGetDetailUser = async (id, token) => {
    let storageRefreshToken = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storageRefreshToken)
    const res = await userService.getDetailUser(id, token)
    disPatch(updateUser({ ...res?.data, access_token: token, refresh_token: refreshToken}))
  }


  return (
    <div>
        <Router>
          <Routes>
              {routes.map((routes)=> {
                const Page=routes.page
                const Layout= routes.isShowHeader  ? DefaulComponent : Fragment
                return (
                  <Route key = {routes.path} path={routes.path} element={
                  <Layout>
                    <Page /> 
                  </Layout>
                  }/> 
                  )
              })}
          </Routes>
        </Router>
    </div>
)
}
export default App