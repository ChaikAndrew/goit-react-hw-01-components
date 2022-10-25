import { getRandomHexColor } from 'utils/getRandomColor';
import PropTypes from 'prop-types';
import styles from 'components/statistic/Statistic.module.css';
export const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">.{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
