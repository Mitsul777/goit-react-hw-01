import css from "./Profile.module.css"
const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.card}>
            <div className={css.info}>
                <img className={css.img}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.fontBold}>{name}</p>
                <p className={css.fontGrey}>@{tag}</p>
                <p className={css.fontGrey}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.listItem}>
                    <span className={css.fontBold}>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={css.listItem}>
                    <span className={css.fontBold}>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.listItem}>
                    <span className={css.fontBold}> Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile