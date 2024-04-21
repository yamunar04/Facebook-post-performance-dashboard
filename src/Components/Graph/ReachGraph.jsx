import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import postData from '../../test.json';

const ReachGraph = ({ selectedPostId }) => {
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
      type: 'line'
    },
    title: {
      text: 'Post Reach Over Time'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e %b'
      },
      title: {
        text: 'Date'
      }
    },
    yAxis: {
      title: {
        text: 'Reach'
      }
    },
    series: [{
      name: 'Reach',
      data: selectedPost?.reach?.data.map(item => [new Date(item.timestamp).getTime(), item.value]) || []
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

export default ReachGraph;
