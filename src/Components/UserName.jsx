function UserName({onAuthorChange}) {
    return (
        <div className="UserName">
            <input type="text" name="username" className="user" placeholder="Username" onChange={(e) => onAuthorChange(e.target.value)}/>
        </div>
    );
}
export default UserName;