import React from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>LADDA</div>
    </div>
  );
};

export default TopBar;
