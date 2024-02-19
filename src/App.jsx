
import Profile from "./components/Profile.jsx"; // Зверніть увагу на коректний імпорт
import userData from "./userData.json";
import FriendList from "./components/FriendList.jsx";
import friends from "./friends.json"

export const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends}/>
        </>
    );
};
