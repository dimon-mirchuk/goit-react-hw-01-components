import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const { item, online, offline, userAvatar, userName } = styles;

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={item}>
      <span className={isOnline ? online : offline}></span>
      <img className={userAvatar} src={avatar} alt={name} width="48" />
      <p className={userName}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
