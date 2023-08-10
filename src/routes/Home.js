import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import AD from '../components/AD';
import Footer from '../components/Footer';

import PostList from '../components/PostList';

import styles from './Home.module.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [refinedPosts, setRefinedPosts] = useState([]);

  const [inputPostsPerPage, setInputPostsPerPage] = useState(15); //페이지 당 포스트 개수(입력)
  const [searchText, setSearchText] = useState("");

  const getPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();
    setPosts(json.reverse());
    setRefinedPosts(json.reverse());
    setLoading(false);
  }

  /** setPostsForm 값이 변경되도록 함. 1보다 아래면 1로 고정   */
  const postsFormChanged = (e) => {
    setInputPostsPerPage( (e.target.value <= 0) ? 1 : e.target.value );
  }
  
  /** search 내용 변경  */
  const searchTextChange = (e) => {
    setSearchText(e.target.value);
    if(e.target.value === "") {
      setRefinedPosts(posts);
    }
  }

  /** 검색 실행 */
  const searchSubmit = async () => {
    console.log(posts.filter(e => e.title.includes(searchText)));
    setRefinedPosts(posts.filter(e => e.title.includes(searchText)));
  }

  //posts 변경 시 이를 refined에 적용
  useEffect(() => {
    setRefinedPosts(posts);
  }, [posts]);

  useEffect(() => {
    getPosts();
    setInputPostsPerPage(30); //페이지 당 포스트 개수 기본값
  }, []);
  

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
        {/** 검색 form */}
        <div className={styles.SearchForm}>
          <input type='text' value={searchText} onChange={searchTextChange} placeholder='여기서 포스트 검색'></input>
          <button className={styles.form_btn} onClick={searchSubmit}>검색</button>
        </div>
        {/** 페이지당 포스트 지정 form */}
        <form className={styles.setPostsForm} >
          <select className={styles.setPosts_select} value={inputPostsPerPage} onChange={postsFormChanged}>
            <option value={10}>10개</option>
            <option value={15} selected>15개</option>
            <option value={20}>20개</option>
            <option value={30}>30개</option>
            <option value={50}>50개</option>
          </select>
        </form>
        {/** postList 실행 */}
        {(loading) ? <p>loading...</p> :
          <PostList refinedPosts={refinedPosts} postsPerPageProp={inputPostsPerPage}/>
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