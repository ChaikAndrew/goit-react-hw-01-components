import PropTypes from 'prop-types';
import styles from 'components/Transaction/Transaction.module.css';
export const Transaction = ({ transactions }) => {
  return (
    <table className={styles.transactionTable}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={styles.typeList}>{type}</td>
              <td className={styles.amountList}>{amount}</td>
              <td className={styles.currencyList}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
