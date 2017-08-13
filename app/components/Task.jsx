const React = require('react');

const Task = React.createClass({
  getInitialState: () => {
    // set our inital app state
    return {
    }
  },
  render: function(){

    return (
      <div>
        {this.props.taskData.text}
      </div>
    )
  }
});

module.exports = Task;
