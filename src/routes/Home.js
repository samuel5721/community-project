import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PostBanner from '../components/PostBanner';

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
        
        <section>
          <form>
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
        
    </div>
  );
}

export default Home;