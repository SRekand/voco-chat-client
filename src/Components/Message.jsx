function Message({onMessageChange})  {
    return (
        <div className="message">
            <input type="text"className="Msg" placeholder="Message" onChange={(e) => onMessageChange(e.target.value)}></input>
        </div>
    );
};

export default Message;