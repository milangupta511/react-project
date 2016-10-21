import React from 'react';
import StoryItem from './StoryItem';

class StoryList extends React.Component{
  // constructor(props){
  //   super(props);
  //
  // }

  render(){
    var storyItems=this.props.articles.map(article => {
      return <StoryItem key={article.storyId}
                        increaseCount={this.props.increaseCount}
                        decreaseCount={this.props.decreaseCount}
                        markStarred={this.props.markStarred}
                        removeStarred={this.props.removeStarred}
                        {...article}/>
    })
    return(
    <div className="story-container">
      <ul>
        {storyItems}
      </ul>
    </div>);
  }
}
export default StoryList;
