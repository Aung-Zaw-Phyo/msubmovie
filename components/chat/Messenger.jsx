"use client"
import React from 'react'
import { FacebookProvider, CustomChat, Like } from 'react-facebook';

const Messenger = () => {
    return (
        <FacebookProvider appId="1437743630195019" chatSupport>
            <CustomChat pageId="61553349502870" minimized={false}/>
        </FacebookProvider>  
    );
}

export default Messenger