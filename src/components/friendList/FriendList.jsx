import { FriendListItem } from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from 'components/friendList/FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
