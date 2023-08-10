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
    const [prePost, setPrePost] = useState([]); //앞에 있는 서브 포스트
    const [nextPost, setNextPost] = useState([]); //뒤에 있는 서브 포스트
    const [posts, setPosts] = useState([]);
    const { id } = useParams();
  
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const json = await response.json();

      setPosts(json.reverse());

      //로딩할 포스트를 찾았을 때, 앞뒤 포스트도 같이 정의함
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
        {/** 글머리 */}
        <p className={styles.Title}>{post.title}</p>
        <p className={styles.UserId}>글쓴이 : {post.userId}</p>
        <hr />
        {/** 글내용 */}
        <p className={styles.Body}>{post.body}</p>
      </div>
      }
      <div>
        {/** 서브포스트 */}
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
        {/** 기타 아래의 포스트들 */}
        <div style={{height:150}}></div>
        {(loading) ? <p>loading...</p> :
        <PostList refinedPosts={posts} postsPerPageProp={15}/>
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