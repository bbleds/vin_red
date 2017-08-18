const React = require('react');

const SearchTasks = React.createClass({
  // this will pass the search text for the task to our parent component
  searchTasks: function(){

    let searchValue = this.refs.searchInput.value;
    let showCompletedTasks = this.refs.showCompleted.checked;

    return this.props.search(searchValue, showCompletedTasks);

  },
  render: function(){

    return (
      <div className="container__header">
        <div className='input-wrapper'>
          <input type='search' onChange={this.searchTasks} ref="searchInput" placeholder='Search Tasks' />
        </div>
        <div className='checkbox-wrapper'>
          <label><input type='checkbox' ref="showCompleted" onChange={this.searchTasks} /> Show completed tasks</label>
        </div>
      </div>
    )
  }
});

module.exports = SearchTasks;
