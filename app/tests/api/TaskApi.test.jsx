const expect = require('expect');

const TaskApi = require('TaskApi');


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
});
