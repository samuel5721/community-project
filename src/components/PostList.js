import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import PostBanner from './PostBanner';

import styles from './PostList.module.css';

function PostList({ posts, postsPerPageProp }) {
  const [postsPerPage, setPostsPerPage] = useState(postsPerPageProp);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagination, setPagination] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]); // 현재 페이지의 게시물들을 저장할 상태

  useEffect(() => {
    // Pagination 설정
    let result = [];
    for(let i = 0; i<Math.ceil(posts.length / postsPerPage); i++) {
      if(currentPage === i) {
        result.push(<div className={styles.selected} key={i}>{i+1}</div>)
      } else {
        result.push(<div className={styles.unselected} onClick={paginationItemClicked} key={i}>{i+1}</div>) // key prop 추가
      }
    }
    setPagination(result);

    // 현재 페이지의 게시물 가져오기
    let postList = [];
    for(let i=currentPage*postsPerPage; i<(currentPage+1)*postsPerPage && i<posts.length; i++) {
      postList.push(posts[i]);
    }
    setCurrentPosts(postList);
  }, [currentPage, postsPerPage]);

  //postsPerPage 가져오기
  useEffect(() => {
    setPostsPerPage(postsPerPageProp);
  }, [postsPerPageProp]);

  const paginationItemClicked = (event) => {
    setCurrentPage(Number(event.target.innerHTML) - 1);
  }
    
  return (
    <div>
      <PostBanner 
          id={0}
          userId={0}
          title=''
      />
      {
        currentPosts.map(post => { // 변경된 부분
          return (
            <PostBanner
              key={Number(post.id)}
              id={Number(post.id)}
              userId={post.userId}
              title={post.title}
            />
          )
        })
      }
      <div className={styles.Pagination}>
        {pagination}
      </div>
    </div>
  );
}

PostList.propTypes = {
  posts:PropTypes.array.isRequired,
  postsPerPageProp:PropTypes.number.isRequired
}

export default PostList;
