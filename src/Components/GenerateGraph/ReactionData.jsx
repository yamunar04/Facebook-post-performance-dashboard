import React, { useState, useEffect } from 'react';
import './GenerateData.css';

const ReactionGraph = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(data);
  }, []);

  return (
    <div className='display-section'>
      <h3>Display Stored Data</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <p>Post ID: <strong>{post.postId}</strong></p> 
            <p> Like Count: <strong>{post.likeCount}</strong></p> 
            <p> Comment Count: <strong>{post.commentCount}</strong></p> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactionGraph;


