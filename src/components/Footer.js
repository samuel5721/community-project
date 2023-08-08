import React, { useEffect, useState } from 'react';

import styles from './Footer.module.css'

function Footer() {
    
  return (
  <div>
    <nav>
      <ul className={styles.Wrap_ul}>
        <li className={styles.Wrap_li}><strong>개인정보처리방침</strong></li>
        <li className={styles.Wrap_li}>|</li>
        <li className={styles.Wrap_li}>이용약관</li>
        <li className={styles.Wrap_li}>|</li>
        <li className={styles.Wrap_li}>청소년보호정책</li>
        <li className={styles.Wrap_li}>|</li>
        <li className={styles.Wrap_li}>광고&제휴 문의</li>
        </ul>
        <p className={styles.Wrap_p}>Copyright ©아티 All rights reserved.</p>
    </nav>
  </div>
  );
}

export default Footer;