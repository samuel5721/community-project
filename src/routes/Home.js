import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import AD from '../components/AD';
import Footer from '../components/Footer';

import PostList from '../components/PostList';

import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    setPosts(json.reverse());
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
        {(loading) ? <p>loading...</p> :
        <PostList posts={posts}/>
        }
      </section>
      <aside>
        <AD />
      </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;