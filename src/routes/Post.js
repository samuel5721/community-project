import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';

import Header from '../components/Header';
import AD from '../components/AD';
import Footer from '../components/Footer';

import PostList from '../components/PostList';
import SubPost from '../components/SubPost';

import styles from './Post.module.css';

function Post() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    const [prePost, setPrePost] = useState([]);
    const [nextPost, setNextPost] = useState([]);
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
  
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const json = await response.json();

      setPosts(json.reverse());

      for(let e of json) {
        if(e.id === Number(id)-1) setPrePost(e);
        if(e.id === Number(id)) setPost(e);
        if(e.id === Number(id)+1) setNextPost(e);
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
        <div>
            <SubPost 
              id={Number(prePost?.id)}
              text='이전 포스트'
              title={prePost?.title}
              isLeftAlign={true}
            />
          <SubPost 
              id={Number(nextPost?.id)}
              text='다음 포스트'
              title={nextPost?.title}
              isLeftAlign={false}
            />
        </div>
        <div style={{height:150}}></div>
        {(loading) ? <p>loading...</p> :
        <PostList posts={posts}/>
        }
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