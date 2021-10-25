import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import colorPicker from "./ColorPicker";

const {
  statistics,
  statTitle,
  statList,
  statListItem,
  statListLabel,
  statListPercentage,
} = styles;

const Statistics = ({ title, stats }) => {
  return (
    <section className={statistics}>
      {title && <h2 className={statTitle}>{title}</h2>}

      <ul className={statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={statListItem}
            style={{ backgroundColor: colorPicker() }}
          >
            <span className={statListLabel}>{label}</span>
            <span className={statListPercentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
