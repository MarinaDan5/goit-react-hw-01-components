import React from 'react';
import PropTypes from 'prop-types';
import FriendsListItem from './StaticsItem';
import './statistics.css';

function Statistics({ title = 'Upload stats', stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(stat => (
          <FriendsListItem stat={stat} key={stat.id} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
Statistics.defaultProps = {
  title: '',
};

export default Statistics;
