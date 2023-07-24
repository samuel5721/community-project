import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';

import Header from './Header';
import AD from './AD';

import PostBanner from '../components/PostBanner';
import styles from './Post.module.css';

function Post() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
  
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const json = await response.json();

      setPosts(json);

      for(let e of json) {
        if(e.id === Number(id)) {
          setPost(e);
          break;
        }
      }
      setLoading(false);
  }
  
  useEffect(() => {
    getPost();
  }, []);

  return (
  <div className="Post">
    <header>
      <Header />
    </header>
    <main>
    <aside>
      <AD />
    </aside>
    <section>
      
      {(loading) ? <p>loading...</p> : 
      <div className={styles.Content}>
        <p className={styles.Title}>{post.title}</p>
        <p className={styles.UserId}>글쓴이 : {post.userId}</p>
        <hr />
        <p className={styles.Body}>{post.body}</p>
      </div>
      }
      <div>
            <PostBanner 
              id={0}
              userId={0}
              title=''
            />
            {loading ? <p>loading...</p> : 
            posts.map(post => {
              return <PostBanner
                key={Number(post.id)}
                id={Number(post.id)}
                userId={post.userId}
                title={post.title}
              />
            })}
          </div>
    </section>
    <aside>
        <AD />
      </aside>
    </main>
    
  </div>
  );
}

export default Post;