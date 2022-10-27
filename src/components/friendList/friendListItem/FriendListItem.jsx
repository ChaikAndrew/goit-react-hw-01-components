import styles from './FriendListItem.module.css';
import { FcApprove, FcBadDecision } from 'react-icons/fc';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.itemList}>
      <span className="status">
        {isOnline ? (
          <FcApprove className={styles.onlineIcon} />
        ) : (
          <FcBadDecision className={styles.offlineIcon} />
        )}
        {/* <div className={isOnline ? styles.online : styles.offline}></div> */}
      </span>

      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
