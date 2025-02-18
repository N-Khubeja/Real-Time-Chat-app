import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SignUpPage from '../pages/SignUpPage'
import LoginPage from '../pages/LoginPage'
import SettingsPage from '../pages/SettingsPage'
import ProfilePage from '../pages/ProfilePage'
import { useAuthStore } from '../store/useAuthStore'
import { Toaster } from 'react-hot-toast'

const RouterApp = () => {
  const {authUser} = useAuthStore()

  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <HomePage/> : <Navigate to={"/login"}/> }/>
        <Route path="/signup" element={!authUser ? <SignUpPage/> : <Navigate to={"/"}/>}/>
        <Route path="/login" element={!authUser ? <LoginPage/> : <Navigate to={"/"} />}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profile" element={authUser ? <ProfilePage/> : <Navigate to={"/login"} /> }/>
    </Routes>

    <Toaster/>
    </>
    
  )
}

export default RouterApp