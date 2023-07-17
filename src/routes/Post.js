import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';

import styles from './Post.module.css';

function Post() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    const { id } = useParams();
  
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
      const json = await response.json();
      setPost(json[0]);
      setLoading(false);
    }
  
    useEffect(() => {
      getPost();
    }, []);

  return (
  <div className="Post">
    <section>
      {(loading) ? <p>loading...</p> : 
      <div>
        <p className={styles.Title}>{post.title}</p>
        <p className={styles.UserId}>글쓴이 : {post.userId}</p>
        <hr />
        <p className={styles.Content}>{post.body}</p>
      </div>
      }
    </section>
  </div>
  );
}

export default Post;