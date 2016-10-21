import React from 'react';
import StoryList from './StoryList';
import Filter from './Filter';
import articles from './data/articles'
import tabs from './data/filterTabs'
class DesignerNewsContainer extends React.Component{
  constructor(props){
    super(props);
    this.increaseCount=this.increaseCount.bind(this);
    this.decreaseCount=this.decreaseCount.bind(this);
    this.mostUpvoted=this.mostUpvoted.bind(this);
    this.mostRecent=this.mostRecent.bind(this);
    this.showStarred=this.showStarred.bind(this);
    this.markStarred=this.markStarred.bind(this);
    this.removeStarred=this.removeStarred.bind(this);

    this.state = {
      articleList: articles
  }
}
increaseCount(id){
  var articleList = this.state.articleList.slice(0).map(article => Object.assign({}, article));
  var article=articleList.find(article => article.storyId===id);

  article.upvotes++;
  article.upvoted=true;
  this.setState({
    articleList:articleList
  });
}
decreaseCount(id){
  console.log(id);
  var articleList = this.state.articleList.slice(0).map(article => Object.assign({}, article));
  var article=articleList.find(article => article.storyId===id);

  article.upvotes--;
  article.upvoted=false;
  this.setState({
    articleList:articleList
  });

}
mostUpvoted(){
  var articleList = this.state.articleList.slice(0).map(article => Object.assign({}, article));
  articleList.sort(Comparator);
  function Comparator(a,b){
    return b.upvotes-a.upvotes
  }
  this.setState({
    articleList:articleList
  });

}
mostRecent(){
  var articleList = this.state.articleList.slice(0).map(article => Object.assign({}, article));
  articleList.sort(Comparator);
  function Comparator(a,b){
    return a.hoursAgo-b.hoursAgo
  }
  this.setState({
    articleList:articleList
  });
}
showStarred(){

  var articleList = this.state.articleList.slice(0).map(article => Object.assign({}, article));
  var articleList=articleList.filter(function(element,index,array){

    return !!element.isStarred;
  })
  console.log(articleList);
  this.setState({
    articleList:articleList
  });
}
markStarred(id){
  var articleList = this.state.articleList.slice(0).map(article => Object.assign({}, article));
  var article=articleList.find(article => article.storyId===id);

  console.log('marked'+id);
  article.isStarred=true;
  this.setState({
    articleList:articleList
  });
}
removeStarred(id){
  var articleList = this.state.articleList.slice(0).map(article => Object.assign({}, article));
  var article=articleList.find(article => article.storyId===id);

console.log('removed'+id)
  article.isStarred=false;
  this.setState({
    articleList:articleList
  });
}

  render(){
    return(
    <div className="container">
      <Filter
        mostUpvoted={this.mostUpvoted}
        mostRecent={this.mostRecent}
        showStarred={this.showStarred}
      tabs={tabs}
      />
      <StoryList articles={this.state.articleList}
        increaseCount={this.increaseCount}
        decreaseCount={this.decreaseCount}
        markStarred={this.markStarred}
        removeStarred={this.removeStarred}
        />
    </div>
  );
  }
}

export default DesignerNewsContainer;
