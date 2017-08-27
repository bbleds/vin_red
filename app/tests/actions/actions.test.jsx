const expect = require ('expect');
const actions = require ('actions');

describe('App actions', ()=>{

  describe('Search Actions',()=>{
    it('Should generate SET_SEARCH_TEXT action', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Testing'
      }

      let actionResp = actions.setSearchText('Testing');
      expect(actionResp).toEqual(action);
    });
  });

  describe('Add task actions', ()=>{
    it('Should generate an ADD_TASK action', () => {
      let action = {
        type: "ADD_TASK",
        text: "Testing"
      };

      let actionResp = actions.addTask('Testing');
      expect(actionResp).toEqual(action);
    });
  });

  describe('Completed task actions', ()=>{
    it('Should generate an TOGGLE_COMPLETED_TASKS action', () => {
      let action = {
        type: "TOGGLE_COMPLETED_TASKS",
        show: false
      };

      let actionResp = actions.toggleCompletedTasks(false);
      expect(actionResp).toEqual(action);
    });

    it('Should generate a TOGGLE_TASK action', () => {
      let action = {
        type: "TOGGLE_TASK",
        taskId: 1
      };

      let actionResp = actions.toggleTask(1);
      expect(actionResp.taskId).toEqual(1);
    });
  });

});
