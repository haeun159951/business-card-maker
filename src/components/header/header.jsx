import React from 'react';
import { memo } from 'react/cjs/react.development';
import styles from './header.module.css';

const header = memo(({ onLogout }) => {
  console.log('Header');
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src='/images/logo.png' alt='' />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
});

export default header;
