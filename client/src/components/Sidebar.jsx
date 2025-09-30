import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

function Sidebar() {

  const {user, chats, theme, setTheme, setSelectedChats} = useAppContext()
  const {search, setSearch} = useState('')

  return (
    <div className='h-screen min-w-72 p-5 flex flex-col dark:bg-gradient-to-b from-[#242124] to-black dark:text-white border-r border-[#80609F] backdrop-blur-3xl'>
      {/* Logo */}
      <div>
        <img src="" alt="" />
        <h1>CHATIFY</h1>
      </div>
      
      <button className='w-full mt-10 flex py-2 bg-gradient-to-r from-[#A456F7] to-[#3d61F6]'>
        <span className='mr-2 text-xl'>+</span> New Chat
      </button>
    </div>
  )
}

export default Sidebar