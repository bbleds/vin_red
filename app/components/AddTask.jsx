const React = require('react');
const actions = require('actions');
import {connect} from 'react-redux'; // this is the connecting point to react-redux "Provider" seen in app.jsx

export const AddTask = React.createClass({
  // this will pass the task to our parent component
  addTask: function(e){
    e.preventDefault();
    let value = this.refs.taskInput.value.trim();

    // check that we actually have a value
    let valid = (!value.trim()) ? false: true;

    // update our store and clear input
    (valid) ? (this.props.dispatch(actions.addTask(value)), this.refs.taskInput.value="") : this.refs.taskInput.focus();
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

export default connect(
  (state) => {
    return {
      tasks: state.tasks
    }
  }
)(AddTask);
