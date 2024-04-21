import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import postData from '../../test.json';

const Actions = ({ selectedPostId }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    setPosts(Object.values(postData));
  }, []);

  useEffect(() => {
    setSelectedPost(posts.find(post => post.postID === Number(selectedPostId)));
  }, [selectedPostId, posts]);

  const options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Reactions Count'
    },
    xAxis: {
      categories: Object.keys(selectedPost?.actions || {})
        .filter(key => key !== 'total' && key !== 'men' && key !== 'women' && key !== 'age'),
      title: {
        text: 'Reactions'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Count'
      }
    },
    series: [{
      name: 'Count',
      data: Object.keys(selectedPost?.actions || {})
        .filter(key => key !== 'total' && key !== 'men' && key !== 'women' && key !== 'age')
        .map(key => selectedPost.actions[key])
    }]
  };
  
  return (
    <div>
      {selectedPost && (
        <div>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      )}
    </div>
  );
};

export default Actions;
