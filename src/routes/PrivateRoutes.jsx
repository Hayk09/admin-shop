import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
// import { getToken } from '../hooks/Auth'


const PrivateRoutes = () => {
    // const token = useGetToken()
   const auth =   window.localStorage.getItem('tokenAdmin')
  
    // const auth = {'token': true}
  return (
    auth? <Outlet /> : <Navigate  to ='/login' />
  )
}

export default PrivateRoutes