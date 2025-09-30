import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

function Sidebar() {

  const {user, chats, theme, setTheme, setSelectedChats} = useAppContext()
  const {search, setSearch} = useState('')

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar