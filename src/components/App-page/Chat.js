import React from 'react'
import ChatDetails from './ChatDetails'
import ChatListing from './ChatListing'
import ChatPage from './ChatPage'

const chat = () => {
    return (
        <div className = 'chat'>
            <ChatListing />
            <ChatPage />
            <ChatDetails />
        </div>
    )
}

export default chat
