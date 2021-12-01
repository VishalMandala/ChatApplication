import { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    //e here is event
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const authObject = { 'Project-ID' : "ee20feed-5b5f-4108-8472-c6f11e6219c3", 'User-Name': username, 'User-Secret': password };

        try{
            // username / password => chatEngine -> to give messages
            await axios.get('https://api.chatengine.io/chats', { headers : authObject });

            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload();
            // If it works out -> Logged In
        }
        catch(error){
            // error -> Try with new username and password
            setError('Oops, Incorrect credentials.')
        }
        //preventDefault helps us not to reload the page.
        
    }

    return (
        <div className = "form">
            <h1 className = "title">Chat Application</h1>
            <form onSubmit = {handleSubmit}>
                <input type = "text" value = {username} onChange = {(e) => setUsername(e.target.value)} className = "input" placeholder = "Username" required />
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} className = "input" placeholder = "Password" required />
                <div align = "center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className ="error">{ error }</h2>
            </form>
        </div>
    )
}

export default LoginForm