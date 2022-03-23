import Name from "./UserName";
import Message from "./Message";
import Button from "./SendButton";
import UserName from "./UserName";

function Group({onMessageChange, onAuthorChange}) {
    return (
        <div class="messageComp">
            <UserName onAuthorChange={onAuthorChange}></UserName>
            <Message onMessageChange={onMessageChange}></Message>
        </div>
    );
}
export default Group;