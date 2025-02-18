import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import RouterApp from './routes/RouterApp'
import { useAuthStore } from './store/useAuthStore'
import {Loader} from "lucide-react"
import { useThemeStore } from './store/useThemeStore'

const App = () => {
  const {authUser,checkAuth,isCheckingAuth,onlineUsers} = useAuthStore()
  const {theme} = useThemeStore()

  console.log(onlineUsers)

  useEffect(() => {
    checkAuth()
  },[checkAuth])

  console.log({authUser})
  if(isCheckingAuth && !authUser){
    return(
      <div className='flex items-center justify-center h-screen'>
        <Loader className="size-10 animate-spin"/>
      </div>
    )
  }

  return (
    <div data-theme={theme}>
      <Navbar/>
      <RouterApp/>
    </div>
  )
}

export default App