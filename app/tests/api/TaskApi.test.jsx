const expect = require('expect');

const TaskApi = require('TaskApi');
const AppBase = require('AppBase');

describe('TaskApi',()=>{
  beforeEach(()=>{
    localStorage.removeItem('tasks');
  });

  it('Should exist', () =>{
    expect(TaskApi).toExist();
  });

  describe('TaskApi.setTasks',()=>{
    it('Should set tasks in local storage', () =>{
      let tasks = [{id:1,text:'testing',completed:true}];
      TaskApi.setTasks(tasks);

      expect(localStorage.getItem('tasks')).toEqual(JSON.stringify(tasks));
    });

    it('Should fail if invalid data is passed in', () =>{
      let tasks = {};
      let resp = TaskApi.setTasks(tasks);

      expect(resp).toEqual(null);
    });
  });

  describe('TaskApi.getTasks',()=>{
    it('Should get tasks from local storage', () =>{
      let tasks = [{id:1,text:'testing',completed:true}];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      let resp = TaskApi.getTasks();
      expect(resp).toEqual(tasks);
    });

    it('Should return an empty array if tasks are not valid json', () =>{
      localStorage.setItem('tasks',[]);
      let resp = TaskApi.getTasks();
      expect(resp).toEqual([]);
    });

    it('Should return an empty array if tasks not type of array', () =>{
      localStorage.setItem('tasks','string');
      let resp = TaskApi.getTasks();
      expect(resp).toEqual([]);

      localStorage.setItem('tasks',{});
      resp = TaskApi.getTasks();
      expect(resp).toEqual([]);

      localStorage.setItem('tasks','test');
      resp = TaskApi.getTasks();
      expect(resp).toEqual([]);
    });
  });

  describe('TaskApi.filterTasks',()=>{
    let tasks = [{id:12, text:"testing", completed: true}, {id:13, text:"example", completed: false}];

    it('Should return completed tasks if showCompleted filter is turned on', () =>{
      let completedTasks = TaskApi.filterTasks(tasks, true, '');
      expect(completedTasks[0].id).toEqual(13);
      expect(completedTasks.length).toEqual(2);
    });

    it('Should not return completed tasks if showCompleted filter is turned off', () =>{
      let incompleteTasks = TaskApi.filterTasks(tasks, false, '');
      expect(incompleteTasks[0].id).toEqual(13);
      expect(incompleteTasks.length).toEqual(1);
    });

    it('Should return all tasks when search terms are empty and showCompletedTasks is true', () =>{
      let allMatchedTasks = TaskApi.filterTasks(tasks, true, '');
      expect(allMatchedTasks.length).toEqual(2);
    });

    it('Should return tasks with text that match search terms', () =>{
      let strMatchedTasks = TaskApi.filterTasks(tasks, true, 'test');
      expect(strMatchedTasks[0].id).toEqual(12);
      expect(strMatchedTasks.length).toEqual(1);
    });

    it('Should sort by completed status where incomplete items appear first', () =>{
      let sortedTasks = TaskApi.filterTasks(tasks, true, '');
      expect(sortedTasks[0].completed).toEqual(false);
    });
  });
});
