import PropTypes from "prop-types";
import FriendListItem from "./friendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const { item, friendList } = styles;

const FriendList = ({ friends }) => {
  return (
    <ul className={friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};

export default FriendList;
