function Message({onMessageChange, message})  {

    return (
        <div className="message">
            <input type="text" id="Msg" className="Msg" placeholder="Message" value={message} onChange={(e) => onMessageChange(e.target.value)}></input>
        </div>
    );
};

export default Message;