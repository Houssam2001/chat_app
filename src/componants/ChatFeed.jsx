import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

const ChatFeed = ({props}) => {
    const {chats, activeChat, userName, messages} = props
    const chat = chats && chats[activeChat]
    const renderMessages = () => {
        const keys = Object.keys(messages)
        return keys.map((key, i) => {
            const message = messages[key]
            const lastMessage = i === 0 ? null : keys[i - 1]
            const isMyMessage = userName === message.sender.username
            return
            (
                <div key={`msg_${i}`} style={{width: '100%'}}>
                    <div className={'message-block'}>
                        {
                            isMyMessage
                                ? <MyMessage message={message}/>
                                : <TheirMessage message={message} lastmessage={messages[lastMessage]}/>
                        }

                    </div>
                    <div className={"read-receipt"} style={{marginRight: isMyMessage ? '18px' : '0px'}}>
                        receipt-mm
                    </div>

                </div>
            );
        })
    }
    if (!chat) return '...loading'
    return (
        <div className={'chat-feed'}>
            <div className={'chat-title-container'}>
                <div className={"chat-title"}>{chat.title}</div>
                <div className={'chat-subtitle'}>
                    {chat.poeple.map((person) => `${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className={'message-form-container'}>
                <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>)
}
export default ChatFeed
