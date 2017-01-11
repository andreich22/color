import {isEmpty} from 'ramda';
import * as types from '../constans/taskActionTypes';
import {randomId} from '../lib/id';
import * as helpers from './helpers/taskHelper';


const initialState = {
  tasks : [
    { 
      nameTask: 'first', 
      bodyTask : 'Текст задачи',
      shouldByDelete : false,
      shouldByFinish : false,
      id: randomId()
    },
    { 
      nameTask: 'second', 
      bodyTask : 'Текст задачи',
      shouldByDelete : false,
      shouldByFinish : false,
      id: randomId()
    }
  ],
  createTask : {},
  editedTask : false,
  startEditedTask: false,
  neededCreateNewTask: false
};

// localStorage.setItem('task' , '');

//Если localStorage не пустой то берем state из него
function getInit (initialState){
  let storageState = {};
  if(localStorage.task){
    storageState = JSON.parse(localStorage.task)
  }

  if(isEmpty(storageState) === false){
    return storageState
  }

  JSON.stringify(initialState)
  localStorage.setItem('task' , JSON.stringify(initialState));
  return initialState
}

/**
 * Создаёт редьюсер для задач
 * @param {object} state
 * @returns {object} action
 */
export default function task(state = getInit(initialState), action) {
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