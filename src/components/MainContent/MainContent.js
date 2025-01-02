import React from 'react';
import styles from './MainContent.module.css';
import LeftSection from './LeftSection/LeftSection';
import MiddleSection from './MiddleSection/MiddleSection';
import RightSection from './RightSection/RightSection';

const MainContent = ({ messages, onSendMessage, darkMode }) => {
  return (
    <div className={styles.content}>
      <LeftSection darkMode={darkMode} />
      <MiddleSection messages={messages} onSendMessage={onSendMessage} />
      <RightSection />
    </div>
  );
};

export default MainContent;
