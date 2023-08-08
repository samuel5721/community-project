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
      (e.target.value <= 0) ? 1 : e.target.value
      );
  }

  const updatePostsPerPage = (e) => {
    e.preventDefault();
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
        <form className={styles.setPostsForm} onSubmit={updatePostsPerPage}>
          <select className={styles.setPosts_select} value={inputPostsPerPage} onChange={setPostsFormChange}>
            <option value={10}>10개</option>
            <option value={15} selected>15개</option>
            <option value={20}>20개</option>
            <option value={30}>30개</option>
            <option value={50}>50개</option>
          </select>
        </form>
        {(loading) ? <p>loading...</p> :
          <PostList posts={posts} postsPerPageProp={inputPostsPerPage}/>
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