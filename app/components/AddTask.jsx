const React = require('react');

const AddTask = React.createClass({
  // this will pass the task to our parent component
  addTask: function(e){
    e.preventDefault();
    let value = this.refs.taskInput.value;

    // check that we actually have a value
    let valid = (!value.trim()) ? false: true;

    // pass value to parent component and clear input
    return (valid) ? (this.props.addTask(value), this.refs.taskInput.value="") : this.refs.taskInput.focus();
  },
  render: function(){

    return (
      <div className="container__footer">
        <input type='text' ref="taskInput" placeholder='Task' />
        <a href="#" onClick={this.addTask} className="button expanded">Save Task</a>
      </div>
    )
  }
});

module.exports = AddTask;
