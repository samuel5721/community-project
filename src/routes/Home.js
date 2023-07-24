import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import AD from './AD';

import PostBanner from '../components/PostBanner';

import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    setPosts(json);
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);
  

  return (
    <div className="Home">
      <header>
        <Header />
      </header>
      <main>
      <aside>
        <AD />
      </aside>
      
      <section className={styles.Article}>
      <h3 className={styles.Title}>자유게시판</h3>
        <form className={styles.SearchForm}>
          <input type='text' value={null} placeholder='여기서 포스트 검색'></input>
          <button onClick={null}>검색</button>
        </form>
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

export default Home;