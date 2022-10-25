import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.itemList}>
      <span className="status">
        <div className={isOnline ? styles.online : styles.offline}></div>
      </span>

      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
