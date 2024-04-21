import React, { useState } from 'react';
import ReactionForm from './ReactionForm';
import ReactionGraph from './ReactionData';

const GenerateGraph = () => {
  const [posts, setPosts] = useState([]);

  const handleSubmit = (postId) => {
    const updatedPosts = [...posts, postId];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div>
      <ReactionForm onSubmit={handleSubmit} />
      <ReactionGraph />
    </div>
  );
};

export default GenerateGraph;
