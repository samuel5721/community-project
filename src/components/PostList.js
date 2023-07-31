import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

import PostBanner from './PostBanner';


import styles from './PostList.module.css';

function PostList({ posts }) {
  const [postsPerPage, setPostsPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const setPagination = () => {
    let result = [];
    for(let i = 0; i<Math.ceil(posts.length / postsPerPage); i++) {
      if(currentPage === i) {
        result.push(<div className={styles.selected}>{i+1}</div>)
      } else {
        result.push(<div className={styles.unselected}>{i+1}</div>)
      }
    }
    return result;
  }
    
  return <div>
    <PostBanner 
          id={0}
          userId={0}
          title=''
        />
        {
          posts.map(post => {
            return <PostBanner
              key={Number(post.id)}
              id={Number(post.id)}
              userId={post.userId}
              title={post.title}
            />
          })
        }
        <div className={styles.Pagination}>
          {setPagination()}
        </div>
  </div>

}

PostList.propTypes = {
  posts:PropTypes.array.isRequired,
}

export default PostList;