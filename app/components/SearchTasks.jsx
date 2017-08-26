const React = require('react');
const actions = require('actions');
const {connect} = require('react-redux'); // this is the connecting point to react-redux "Provider" seen in app.jsx

const SearchTasks = React.createClass({
  // this will pass the search text for the task to our parent component
  searchTasks: function(){
    let searchValue = this.refs.searchInput.value;
    let showCompletedTasks = this.refs.showCompleted.checked;
    this.props.dispatch(actions.setSearchText(searchValue));
    this.props.dispatch(actions.toggleCompletedTasks(this.refs.showCompleted.checked));

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

export default module.exports = connect()(SearchTasks);
