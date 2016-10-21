import React from 'react';

class StarArticle extends React.Component{
  constructor(props){
    super(props);
    this.markStarred=this.markStarred.bind(this);
    this.removeStarred=this.removeStarred.bind(this);
  }
  markStarred(){
    this.props.markStarred(this.props.id);
  }
  removeStarred(){
    this.props.removeStarred(this.props.id);
  }
  render(){
    return(
      <span className="star-article"
        onClick={this.props.isStarred?this.removeStarred:this.markStarred}> * </span>
    );
  }
}

export default StarArticle;
