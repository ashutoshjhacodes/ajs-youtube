import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img className='h-7' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&usqp=CAU '/>
        <span className='font-bold px-3'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;