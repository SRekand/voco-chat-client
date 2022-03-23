
function MsgBox({username, message}) {
    return (
        <div class="MsgBox">
            <p className="author">{username}</p>
            <p>{message}</p>
        </div>
    );
}

export default MsgBox;
