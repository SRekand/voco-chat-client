import Name from "./UserName";
import Message from "./Message";
import Button from "./SendButton";
import UserName from "./UserName";

function Group() {
    return (
        <div class="messageComp">
            <UserName></UserName>
            <Message></Message>
        </div>
    );
}
export default Group;