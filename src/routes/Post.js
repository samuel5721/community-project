import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';

function Post() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);
    const { id } = useParams();
  
    const getPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
      const json = await response.json();
      setPost(json);
      setLoading(false);
    }
  
    useEffect(() => {
      getPost();
    }, []);

  return (
  <div className="Post">
    <section>
        <h1>{post.title}</h1>
        <p>{post.userId}</p>
        <p>{post.body}</p>
    </section>
  </div>
  );
}

export default Post;