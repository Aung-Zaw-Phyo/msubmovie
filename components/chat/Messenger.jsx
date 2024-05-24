"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

const Messenger = () => {
    return (
        <FacebookProvider appId="707429610891659" chatSupport>
            <CustomChat pageId="155901237599127" minimized={true}/>
        </FacebookProvider>  
    );
}

export default Messenger