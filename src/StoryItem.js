import React from 'react';
import UpvoteArticle from './UpvoteArticle';
import StarArticle from './StarArticle';
class StoryItem extends React.Component{
  render(){
    return(
      <li className="story-item">
        <UpvoteArticle upvotes={this.props.upvotes}
          increaseCount={this.props.increaseCount}
          decreaseCount={this.props.decreaseCount}
        id={this.props.storyId}
        isUpvoted={this.props.upvoted}/>
        <div className="article">
          <div className="article-head">
            <a href="#">{this.props.title}</a>
          </div>
          <span className="article-source"><a href="#">({this.props.source})</a></span>
          <div className="article-info">
            <span className="comment-count">{this.props.commentsCount} comments</span>|
            <span className="time-from-current">{this.props.hoursAgo} hour ago</span>
            from
            <span className="article-author">{this.props.author}</span>
            <span className="profile">{this.props.profile}</span>
          </div>
        </div>
        <StarArticle markStarred={this.props.markStarred}
          removeStarred={this.props.removeStarred}
          isStarred={this.props.isStarred}
          id={this.props.storyId}
          />
      </li>

    );


  }
}
export default StoryItem;
