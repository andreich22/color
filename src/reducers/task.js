//import * as types from '../constants/classifiersActionTypes';
import {randomId} from '../lib/id';

const initialState = {
  tasks : [
    { 
      nameTask: 'nametask', 
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
export default function task(state = initialState) {
    // const {payload, type} = action;

    // switch (type) {
    //     case 'TEST':
    //         return {...state};
    // }
    return state;
}