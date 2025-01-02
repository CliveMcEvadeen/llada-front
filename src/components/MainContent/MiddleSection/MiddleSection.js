import React from 'react';
import styles from './MiddleSection.module.css';
import Conversation from './Conversation/Conversation';
import InputBox from './InputBox/InputBox';

const MiddleSection = ({ messages, onSendMessage }) => {
  return (
    <div className={styles.section}>
      <div className={styles.card}>
        <Conversation messages={messages} />
      </div>
      <InputBox onSendMessage={onSendMessage} />
    </div>
  );
};

export default MiddleSection;
