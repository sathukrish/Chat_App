import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style = {{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='f67cf3fb-5361-43f3-b8ee-9b76b133aec7'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;