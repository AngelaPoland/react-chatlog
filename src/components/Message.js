import React, { Component } from 'react';
import './Message.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

class Message extends React.Component {
  render() {

    const sender = this.props.sender;
    const body = this.props.body;
    const timestamp = this.props.timestamp;

    return (
      <article className="message">
        <h4>{sender}</h4>
        <p>{body}</p>
        <p><Timestamp time={timestamp}/></p>
      </article>
  )}
}

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default Message;
