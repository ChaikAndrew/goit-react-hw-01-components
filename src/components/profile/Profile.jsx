import PropTypes from 'prop-types';
import defaultUser from '../pictures/defaultUser.png';
import styles from './Profile.module.css';
export default function Profile({
  avatar = defaultUser,
  username = 'User Name',
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.list}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={styles.list}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={styles.list}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
