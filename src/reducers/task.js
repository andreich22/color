import * as types from '../constans/taskActionTypes';
import {randomId} from '../lib/id';
import * as helpers from './helpers/taskHelper';
// /home/andrey/project/wily/color/src/reducers/helpers/taskHelper.js
///home/andrey/project/wily/color/src/reducers/task.js
const initialState = {
  tasks : [
    { 
      nameTask: 'first', 
      bodyTask : 'bodyTask',
      shouldByDelete : false,
      shouldByFinish : false,
      id: randomId()
    },
    { 
      nameTask: 'second', 
      bodyTask : 'bodyTask',
      shouldByDelete : false,
      shouldByFinish : false,
      id: randomId()
    }
  ],
  shouldByCreateNewTask : false,
};


/**
 * Создаёт редьюсер для задач
 * @param {object} state
 * @returns {object} action
 */
export default function task(state = initialState, action) {
    const {payload, type} = action;
    switch (type) {
      //Переключает чекбоксы
        case types.TASK_SHOULD_BY_DELETE:
            return helpers.toogleCheckbox(state, payload)
      //Удаляет задачи
        case types.TASK_DELETE:
            return helpers.deleteTask(state, payload)
      //создает задачу
        case types.TASK_CREATE:
            return helpers.createTask(state, payload)

            
    }
    return state;
}