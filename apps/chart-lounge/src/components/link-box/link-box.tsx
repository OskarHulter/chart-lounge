import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';

const LinkBox = ({
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
}) => (
  <Link
    className={styles.card}
    href={href ?? 'https://create.t3.gg/en/introduction'}
    target="_blank"
  >
    <h3 className={styles.cardTitle}>{title ?? 'Documentation →'}</h3>
    <div className={styles.cardText}>{children}</div>
  </Link>
);

export { LinkBox };
