import React from 'react';
import PropTypes from 'prop-types';

const StatisticItem = ({ stat: { id, label, percentage } }) => (
  <li className="item-2" key={id}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatisticItem.prototypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
