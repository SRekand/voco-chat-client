import Message from "./Message";
import UserName from "./UserName";

function Group({onMessageChange, onAuthorChange, message}) {
    return (
        <div class="messageComp">
            <UserName onAuthorChange={onAuthorChange}></UserName>
            <Message message={message} onMessageChange={onMessageChange}></Message>
        </div>
    );
}
export default Group;