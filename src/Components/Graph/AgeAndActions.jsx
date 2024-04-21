import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import postData from '../../test.json';

const AgeGraph = ({ selectedPostId }) => {
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
      text: 'Age Group Distribution'
    },
    xAxis: {
      categories: Object.keys(selectedPost?.actions?.age || {}),
      title: {
        text: 'Age Group'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Count'
      }
    },
    series: [{
      name: 'Men',
      data: Object.keys(selectedPost?.actions?.age || {}).map(key => selectedPost.actions.age[key].men)
    }, {
      name: 'Women',
      data: Object.keys(selectedPost?.actions?.age || {}).map(key => selectedPost.actions.age[key].women)
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

export default AgeGraph;
