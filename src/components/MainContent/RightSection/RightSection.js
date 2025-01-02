import React from 'react';
import styles from './RightSection.module.css';
import Card from '../Card/Card';
import ProgressBar from './ProgressBar';

const systemLogs = [
  { timestamp: '12:34:45', message: 'System started successfully' },
  { timestamp: '12:35:10', message: 'Agent 1 connected' },
  { timestamp: '12:36:22', message: 'New conversation started' },
  { timestamp: '12:37:45', message: 'System check completed' },
  { timestamp: '12:38:10', message: 'Agent 2 connected' }
];

const RightSection = () => {
  return (
    <div className={styles.section}>
      <Card title="System Logs">
        <div className={styles.logsContainer}>
          {systemLogs.map((log, index) => (
            <div key={index} className={styles.logEntry}>
              <span className={styles.timestamp}>{log.timestamp}</span>
              <span className={styles.message}>{log.message}</span>
            </div>
          ))}
        </div>
      </Card>
      
      <Card title="System Analytics">
        <div className={styles.analyticsContainer}>
          <ProgressBar percentage={75} label="CPU Usage" />
          <ProgressBar percentage={60} label="Memory Usage" />
          <ProgressBar percentage={90} label="Disk Usage" />
        </div>
      </Card>
    </div>
  );
};

export default RightSection;
