import React, {Component} from 'react';
import PostList from './PostList'


class ViewControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
}

  render(){
    return (
      <PostList />
    )
  }



}


export default ViewControl;