import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './PostBanner.module.css';

function PostBanner({ id, num, userId, title}) {
    
    if(id === 0) {
        return <div key={id} className={styles.IndexBannerContainer}>
        <div className={styles.Num}>번호</div>
        <div className={styles.IndexTitle}>제목</div>
        <div className={styles.UserId}>글쓴이</div>
        </div>
    }
    
    
    return <Link  to={`/post/${id}`} key={id} className={styles.BannerContainer}>
        <div className={styles.Num}>{num}</div>
        <div className={styles.Title}>{title}</div>
        <div className={styles.UserId}>{userId}</div>
        </Link>

}

PostBanner.propTypes = {
    id : PropTypes.number.isRequired,
    num : PropTypes.number.isRequired,
    userId : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired
}

export default PostBanner;