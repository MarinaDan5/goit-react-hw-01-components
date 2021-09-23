import React from 'react';
import PropTypes from 'prop-types';
import './friendStyle.css';

const FriendsItem = ({ name, avatar, isOnline, id }) => {
  return (
    <li className="item" key={id}>
      <span className="status">
        {isOnline}
        {isOnline ? 'isOnline' : 'isOffline'}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendsItem;
