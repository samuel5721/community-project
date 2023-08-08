import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import AD from '../components/AD';
import Footer from '../components/Footer';

import PostList from '../components/PostList';

import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const [inputPostsPerPage, setInputPostsPerPage] = useState(15);

  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    setPosts(json.reverse());
    setLoading(false);
  }

  const setPostsFormChange = (e) => {
    setInputPostsPerPage(
      (e.target.value < 0) ? 0 : e.target.value
      );
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
          <button className={styles.form_btn} onClick={null}>검색</button>
        </form>
        <form className={styles.setPostsForm}>
          <input className={styles.setPosts_input} type='number' value={inputPostsPerPage} onChange={(event) => { setPostsFormChange(event) }}></input>
          <button className={styles.form_btn} onClick={null}>적용</button>
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