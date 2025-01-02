import React from 'react';
import styles from './Sidebar.module.css';
import SidebarButton from './SidebarButton/SidebarButton';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarButton />
      <div className={styles.buttonSpacer}>
        <SidebarButton />
      </div>
      <SidebarButton />
    </div>
  );
};

export default Sidebar;
