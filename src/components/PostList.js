import React from 'react';
import Post from './Post';

function PostList(){
  return (
    <React.Fragment>
      <p>i'm the post list</p>
      <hr />
      <Post />
    </React.Fragment>
  );
}

export default PostList;