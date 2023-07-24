import React, { useEffect, useState } from 'react';
import { Params, useParams, Link } from 'react-router-dom';

import styles from './Header.module.css'

function Header() {
    
  return (
  <header>
    <nav className={styles.SignForm}>
      <p className={styles.SignForm_p}>로그인</p>
      <p className={styles.SignForm_p}>회원가입</p>
    </nav>
    <hr className={styles.Header_hr}/>
    <Link to={`/`}>
      <h1 className={styles.Title}>아티</h1>
    </Link>
    
    <h2 className={styles.SubTitle}>대한민국 최대 IT 커뮤니티</h2>
    <nav>
      <ul className={styles.Menu_ul}>
        <li className={styles.Menu_li}>🖥️아티</li>
        <li className={styles.Menu_li}>|</li>
        <li className={styles.Menu_li}>자유게시판</li>
        <li className={styles.Menu_li}>IT게시판</li>
        <li className={styles.Menu_li}>창업게시판</li>
        <li className={styles.Menu_li}>Q&A</li>
        <li className={styles.Menu_li}>|</li>
        <li className={styles.Menu_li}>아티뉴스</li>
        <li className={styles.Menu_li}>시사상식</li>
        <li className={styles.Menu_li}>공모전</li>
        <li className={styles.Menu_li}>오늘의 SW</li>
        <li className={styles.Menu_li}>|</li>
        <li className={styles.Menu_li}>건의사항</li>
        </ul>
    </nav>
  </header>
  );
}

export default Header;