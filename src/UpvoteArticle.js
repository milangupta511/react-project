import React from 'react';

class UpvoteArticle extends React.Component{
  constructor(props){
    super();
    this.increaseCount=this.increaseCount.bind(this);
    this.decreaseCount=this.decreaseCount.bind(this);
  }
  increaseCount(){
    this.props.increaseCount(this.props.id);
    console.log(this.props)
  }
  decreaseCount(){
    this.props.decreaseCount(this.props.id);
  }
  render(){
    return(
      <div className="upvote-article"
        onClick={this.props.isUpvoted?this.decreaseCount:this.increaseCount}>
        <span className="upvote-btn"><svg aria-label="up-arrow" className="upvote-up-arrow" height="7" id="svg-up-arrow" role="img" version="1.1" viewBox="0 0 11 7" width="11"><path d="m.202 5.715c-.367.417-.217.755.329.755h9.438c.549 0 .702-.33.338-.742l-4.41-4.985c-.363-.41-.947-.412-1.322.013l-4.373 4.96"></path></svg></span>
        <span className="upvote-count">{this.props.upvotes}</span>
      </div>
    );
  }
}

export default UpvoteArticle;
