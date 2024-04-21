import React, { useState } from 'react';
import './GenerateData.css';

const ReactionForm = ({ onSubmit }) => {
    const [postId, setPostId] = useState('');
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ postId, likeCount, commentCount });
        setPostId('');
        setLikeCount(0);
        setCommentCount(0);
    };

    return (
        <div className='form-section'>
            <form onSubmit={handleSubmit} >
                <label htmlFor="postId">Enter Post ID:</label>
                <input
                    type="text"
                    id="postId"
                    value={postId}
                    onChange={(e) => setPostId(e.target.value)}
                    required
                /><br></br>
                <label htmlFor="likeCount">Like Count:</label>
                <input
                    type="number"
                    id="likeCount"
                    value={likeCount}
                    onChange={(e) => setLikeCount(parseInt(e.target.value))}
                    required
                /><br></br>
                <label htmlFor="commentCount">Comment Count:</label>
                <input
                    type="number"
                    id="commentCount"
                    value={commentCount}
                    onChange={(e) => setCommentCount(parseInt(e.target.value))}
                    required
                /><br></br>
                <button type="submit" className='form-button'>Submit</button>
            </form>
        </div>

    );
};

export default ReactionForm;