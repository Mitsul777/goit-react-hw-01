import css from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <div className={css.list}>
            <img src={avatar} alt="avatar" width={48} className={css.avatar} />
            <span className={css.font14}>{name}</span>
            <div className={isOnline ? css.online : css.offline}>
                <span className={css.font10}>{isOnline ? 'Online' : 'Offline'}</span>
            </div>
        </div>
    );
};

export default FriendListItem;
