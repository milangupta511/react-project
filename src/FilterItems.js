import React from 'react';

class FilterItems extends React.Component{
constructor(props){
  super(props);
  this.mostUpvoted=this.props.mostUpvoted.bind(this);
  this.mostRecent=this.props.mostRecent.bind(this);
  this.sort=this.sort.bind(this);
  this.showStarred=this.props.showStarred.bind(this);
}
sort(){
  var id=this.props.id;
  if(id===1){
    this.mostUpvoted();
  }
  else if(id===2){
    this.mostRecent();
  }
  else if(id===3){
    this.showStarred();
  }
}
  render(){

    return(
      <li onClick={this.sort}>{this.props.name}</li>
    );

   }
}

export default FilterItems;
