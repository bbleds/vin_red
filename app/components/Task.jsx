const React = require('react');

const Task = React.createClass({
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
