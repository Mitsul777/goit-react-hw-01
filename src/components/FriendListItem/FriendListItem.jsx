const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <div>
            <span>{name}</span>
            <img src={avatar} alt="avatar" />
            <span>{isOnline ? 'Online' : 'Offline'}</span>
        </div>
    );
};

export default FriendListItem;