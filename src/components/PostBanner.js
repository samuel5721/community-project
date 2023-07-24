import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';


import styles from './PostBanner.module.css';

function PostBanner({ id, userId, title}) {
    const navigate = useNavigate();
    
    if(id === 0) {
        return <div key={id} className={styles.IndexBannerContainer}>
        <div className={styles.Num}>번호</div>
        <div className={styles.IndexTitle}>제목</div>
        <div className={styles.UserId}>글쓴이</div>
        </div>
    }
    
    
    return <span onClick={() => {navigate(`/post/${id}`); window.location.reload();}}className={styles.BannerContainer}>
        <div className={styles.Num}>{id}</div>
        <div className={styles.Title}>{title}</div>
        <div className={styles.UserId}>{userId}</div>
        </span>

}

PostBanner.propTypes = {
    id : PropTypes.number.isRequired,
    userId : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired
}

export default PostBanner;