import React from 'react';
import styles from './index.module.css';
import ExamplePopover from '../../popover/example-popover';
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <>
        <span>&copy; {currentYear} Chart Lounge. All rights reserved.</span>
        <ExamplePopover />
      </>
    </footer>
  );
}
