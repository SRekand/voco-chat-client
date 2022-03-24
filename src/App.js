import './App.css';
import ChatApp from "./Components/ChatApp";
import SendButton from "./Components/SendButton";
import Group from "./Components/Group";
import {useState} from "react";

function App() {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const submitMessages = () => {
            const post = {
                message: message,
                author: author,
            }
        setMessages((prevState) => [...prevState, post])
        setMessage('');
    }



    return (
        <body>
        <div class="wrapper">
            <ChatApp messages={messages}></ChatApp>
            <Group message={message} setMessageDel={setMessage} onMessageChange={setMessage} onAuthorChange={setAuthor}></Group>
            <SendButton submit={submitMessages}></SendButton>
        </div>
        </body>
    );

  //  document.getElementsByClassName('')

}

export default App;