import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from "./componants/ChatFeed";
const App=()=> {
    return (
        <ChatEngine
            height='100vh'
            userName='Houssam'
            userSecret='KWu!5tF4UWZ8UgM'
            projectID='7eef4325-50c3-4421-9dc7-f44de46b29f2'
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App
