import './App.css';
import ChatApp from "./Components/ChatApp";
import SendButton from "./Components/SendButton";
import Group from "./Components/Group";


function App() {
  return (
    <body>
        <div class="wrapper">
            <ChatApp></ChatApp>
            <Group></Group>
            <SendButton></SendButton>
        </div>
    </body>
  );
}

export default App;