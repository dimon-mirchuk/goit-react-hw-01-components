import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const { transactionHistory, title, titleItem, titleItemText } = styles;

const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionHistory}>
      <thead>
        <tr>
          <th className={title}>Type</th>
          <th className={title}>Amount</th>
          <th className={title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={titleItem}>
            <td className={titleItemText}>{type}</td>
            <td className={titleItemText}>{amount}</td>
            <td className={titleItemText}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
