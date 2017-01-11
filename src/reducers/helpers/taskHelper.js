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
    const {tasks} = state;
    const createTask = {
            nameTask: false, 
            bodyTask : false,
            shouldByDelete : false,
            shouldByFinish : false,
            id: randomId()
    }

    tasks.push(createTask)
    return {...state, tasks : tasks, neededCreateNewTask : true}
}