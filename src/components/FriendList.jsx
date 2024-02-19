import FriendListItem from './FriendListItem.jsx';

const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ id, name, avatar, isOnline }) => (
                <li key={id}>
                    <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;


