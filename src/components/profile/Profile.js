import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const {
  container,
  userAvatar,
  description,
  descriptionName,
  descriptionTag,
  descriptionLocation,
  statsList,
  containBlock,
  statsLabel,
  statsQuantity,
} = styles;

const Profile = ({ name, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={container}>
      <div className={description}>
        <img src={avatar} alt="Аватар пользователя" className={userAvatar} />
        <p className={descriptionName}>{name}</p>
        <p className={descriptionTag}>{tag}</p>
        <p className={descriptionLocation}>{location}</p>
      </div>

      <ul className={statsList}>
        <li className={containBlock}>
          <span className={statsLabel}>Followers</span>
          <span className={statsQuantity}>{followers}</span>
        </li>
        <li className={containBlock}>
          <span className={statsLabel}>Views</span>
          <span className={statsQuantity}>{views}</span>
        </li>
        <li className={containBlock}>
          <span className={statsLabel}>Likes</span>
          <span className={statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
};

export default Profile;
