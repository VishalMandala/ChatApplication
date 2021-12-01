import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />


    return (
        <ChatEngine
            height="100vh"
            projectID="ee20feed-5b5f-4108-8472-c6f11e6219c3"

            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            
            renderChatFeed ={(chatAppProps) => <ChatFeed { ... chatAppProps} />}
        />
    );
}

export default App;