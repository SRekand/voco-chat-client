import MsgBox from "./MsgBox";

function ChatApp({messages}) {
    return (
      <div class="chatApp">
          {messages.map((mes)=> {
              return <MsgBox username={mes.author} message={mes.message}></MsgBox>
          })}
      </div>
    );
}

export default ChatApp;