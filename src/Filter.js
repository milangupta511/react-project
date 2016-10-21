import React from 'react';
import FilterItems from './FilterItems'

class Filter extends React.Component{

  render(){
    var filters=this.props.tabs.map(tab =>{
      return(<FilterItems key={tab.id}
        name={tab.name}
        mostUpvoted={this.props.mostUpvoted}
        mostRecent={this.props.mostRecent}
        id={tab.id}
        showStarred={this.props.showStarred}/>);
    });
    return(
      <div className="filter">
        <ul className="filter-options clearfix">
          {filters}
        </ul>
      </div>
    );

   }
}

export default Filter;
