import {randomId} from '../../lib/id';

export function toogleCheckbox (state, payload) {
    const {tasks} = state;
    const {id, name} = payload;
    const newTask = tasks.map((elem) => {
        if(elem.id == id) {
           elem[name] = !elem[name];
           return elem;
        }
        return elem
    })
    
    return {...state, tasks : newTask}
}

/**
 * удалаяет задачи
 */
export function deleteTask (state) {
    const {tasks} = state;
    const newTask = tasks.filter((elem) => {
        if(elem.shouldByDelete) {
           return false;
        }
        return elem
    })
    return {...state, tasks : newTask}
}

/**
 * Создает задачу
 */
export function createTask (state) {
    const createTask = {
            nameTask: '', 
            bodyTask : '',
            shouldByDelete : false,
            shouldByFinish : false,
            id: randomId()
    }
    return {...state, createTask : createTask, neededCreateNewTask : true}
}

/**
 * Сохранить задачу
 */
export function taskSave (state) {
    const {tasks, createTask} = state;

    tasks.push(createTask);
    return {...state, tasks : tasks, neededCreateNewTask : false, createTask : {}}
}

/**
 * Отменить создание задачи
 */
export function createTaskCancel (state) {
    return {...state, neededCreateNewTask : false, createTask : {}}
}

/**
 * Редактирование поля
 */
export function editField (state, payload) {
    const {name, value} = payload;
    return {...state, createTask : {...state.createTask, [name]: value } }
}

