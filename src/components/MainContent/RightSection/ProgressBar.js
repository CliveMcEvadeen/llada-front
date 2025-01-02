import React from 'react';
import styles from './RightSection.module.css';

const ProgressBar = ({ percentage, label }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar}>
        <div className={styles.progressBarFill} style={{ transform: `rotate(${percentage * 3.6}deg)` }}></div>
        <div className={styles.progressBarText}>{percentage}%</div>
      </div>
      <div className={styles.progressBarLabel}>{label}</div>
    </div>
  );
};

export default ProgressBar;
