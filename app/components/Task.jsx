const React = require('react');

const Task = React.createClass({
  getInitialState: () => {
    // set our inital app state
    return {
    }
  },
  render: function(){
    let {taskData} = this.props;
    return (
      <div>
        {taskData.id} : {taskData.text}
      </div>
    )
  }
});

module.exports = Task;
