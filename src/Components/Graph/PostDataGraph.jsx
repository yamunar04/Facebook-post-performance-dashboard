import React, { useState, useEffect } from 'react';
import postData from '../../test.json';
import './Graph.css';
import Actions from './Actions';
import AgeGraph from './AgeAndActions';
import ReachGraph from './ReachGraph';
import { LikeOutlined, CommentOutlined, AreaChartOutlined, ShareAltOutlined } from '@ant-design/icons';


const PostDataGraph = () => {
    const [selectedPostId, setSelectedPostId] = useState('1');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(Object.values(postData));
    }, []);

    const selectedPost = posts.find(post => post.postID === Number(selectedPostId));

    const handlePostChange = (e) => {
        setSelectedPostId(e.target.value);
    };

    return (
        <>
            <div>
                <div className='select-postId'>
                    <label htmlFor="postId" className='post-label'>Post ID:</label>
                    <select id="postId" value={selectedPostId} onChange={handlePostChange}>
                        <option value="">Select a Post ID</option>
                        {posts.map(post => (
                            <option key={post.postID} value={post.postID}>Post {post.postID}</option>
                        ))}
                    </select>
                </div>

                {selectedPost && (
                    <div className='display-count'>
                        <span className='like-section'>Likes: <span><LikeOutlined /></span><p>{selectedPost.actions.like}</p></span>
                        <span className='comment-section'>Comments: <span><CommentOutlined /></span><p>{selectedPost.comments}</p></span>
                        <span className='reach-section'>Reach: <span><AreaChartOutlined /></span><p>{selectedPost.reach.total}</p></span>
                        <span className='share-section'>Shares: <span><ShareAltOutlined /></span><p>{selectedPost.shares}</p></span>
                    </div>
                )}
            </div>
            <div className='graph-section'>
                <div className='upper-graph'>
                    <div className='upper-graph-1'>
                        <Actions className='upper-graph-section1' selectedPostId={selectedPostId} />
                    </div>
                    <div className='upper-graph-2'>
                        <AgeGraph className='upper-graph-section2' selectedPostId={selectedPostId} />
                    </div>

                </div>
                <div className='lower-graph'>
                    <ReachGraph selectedPostId={selectedPostId} />
                </div>

            </div>
        </>

    );
};

export default PostDataGraph;
