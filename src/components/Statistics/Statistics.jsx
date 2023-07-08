import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.box}>
    <p className={css.text}>Good: {good}</p>
    <p className={css.text}>Neutral: {neutral}</p>
    <p className={css.text}>Bad: {bad}</p>
    <p className={css.text}>Total: {total}</p>
    <p className={css.text}>Positive feedback: {positivePercentage} %</p>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
