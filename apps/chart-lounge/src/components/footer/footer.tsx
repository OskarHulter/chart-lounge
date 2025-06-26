import React from 'react';
import styles from './index.module.scss';
import ExamplePopover from '@/components/popover/example-popover';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        &copy; {new Date().getFullYear()} Chart Lounge. All rights reserved.
      </span>
      <ExamplePopover />
    </footer>
  );
}
