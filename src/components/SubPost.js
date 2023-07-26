import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

import styles from './SubPost.module.css';

function SubPost({ id, text,  title, isLeftAlign}) {
  const navigate = useNavigate();
    
  return(
    (isNaN(id)) ? <></> :
    <div onClick={() => {navigate(`/post/${id}`); window.location.reload();}}
          
          style={{
            float : (isLeftAlign) ? 'left' : 'right',
            textAlign : (isLeftAlign) ? 'left' : 'right'
          }}
          >
  <p className={styles.HeadText}>{text}</p>
  <div className={styles.Container}>
    <p className={styles.TitleText}>{(title?.length<100) ? title : title?.substr(0,100)+'...'}</p>
  </div>
</div>
  )
}

SubPost.propTypes = {
  id : PropTypes.number.isRequired,
  text : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  isLeftAlign : PropTypes.bool.isRequired
}

export default SubPost;