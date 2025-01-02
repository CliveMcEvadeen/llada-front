import React from 'react';
import styles from './LeftSection.module.css';

const ChatItem = ({ message, timestamp }) => {
  return (
    <div className={styles.chatItem}>
      <div className={styles.chatMessage}>{message}</div>
      <div className={styles.chatTimestamp}>{timestamp}</div>
    </div>
  );
};

export default ChatItem;
