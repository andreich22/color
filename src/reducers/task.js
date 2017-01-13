import * as types from '../constans/taskActionTypes';
import {randomId} from '../lib/id';
import * as helpers from './helpers/taskHelper';


// function createTasks () {
//   let array = [];
//   let idArray = [];

//   for (let index = 0; index < 1500; index++) {
//     const id =  randomId();
    
//     array.push({ 
//       nameTask: 'name'+ index, 
//       bodyTask : 'Текст задачи'+ index,
//       shouldByDelete : false,
//       shouldByFinish : false,
//       id: id
//     })

//     idArray.push(id);
//   }
//   return array;
// }


function createTasks () {
  let task = {};
  let tasksOrder = [];

  for (let index = 0; index < 3; index++) {
    const id =  'task-id-' + randomId();

    task[id] = { 
          nameTask: 'name'+ index, 
          bodyTask : 'Текст задачи'+ index,
          shouldByDelete : false,
          shouldByFinish : false,
          id: id
    }

    tasksOrder.push(id);
  }
  
  return {tasksOrder : tasksOrder, task : task };
}


// const state = {
//   targetsOrder: ['id-1', 'id-2'],
//   targets: {
//     'id-1': { id: 'id-1', radius: 10 },
//     'id-2': { id: 'id-2', radius: 20 },
//   }
// };

const initialState = {
  tasks : createTasks().task,
  tasksOrder : createTasks().tasksOrder,
  createTask : {},
  editedTask : false,
  startEditedTask: false,
  neededCreateNewTask: false
};

console.log('initialState', initialState)

/**
 * Создаёт редьюсер для задач
 * @param {object} state
 * @returns {object} action
 */
export default function task(state = initialState, action) {
    const {payload, type} = action;
    switch (type) {
      //Переключает чекбоксы
        case types.TASK_TOOGLE_CHEKBOX:
            return helpers.toogleCheckbox(state, payload)
      //Удаляет задачи
        case types.TASK_DELETE:
            return helpers.deleteTask(state, payload)
      //создает задачу
        case types.TASK_CREATE:
            return helpers.createTask(state, payload)
      //Отменить создание новой задачи
        case types.TASK_CREATE_CANCEL:
            return helpers.cancelCreateTask(state, payload)
      //Сохранить задачу соданую залдачу
        case types.TASK_CREATE_CSAVE:
            return helpers.taskSaveCreate(state, payload)
      //Редактировать поле
        case types.TASK_EDIT_FIELD:
            return helpers.editField(state, payload)
      //Редактировать поле
        case types.TASK_EDIT:
            return helpers.editTask(state, payload)
      //Сохранить редактируемую задачу
        case types.TASK_SAVE_EDITING:
            return helpers.taskSave(state, payload)
            
    }
    return state;
}