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
    return {...state, createTask : createTask, neededCreateNewTask : true, startEditedTask: false, }
}

/**
 * Сохранить задачу
 */
export function taskSave (state, payload) {
    const {id} = payload;
    const {tasks, editedTask} = state;

    const newTask = tasks.map((elem) => {
        if(elem.id == id) {
            elem = editedTask;
            return elem;
        }
        return elem
    })

    return {
        ...state, 
        tasks : newTask, 
        neededCreateNewTask : false,
        startEditedTask: false, 
        editedTask: {}
    }
}

/**
 * Сохранить задачу
 */
export function taskSaveCreate (state) {
    const {tasks, createTask} = state;

    tasks.push(createTask);
    return {
        ...state, 
        tasks : tasks, 
        neededCreateNewTask : false,
        startEditedTask: false, 
        createTask : {}
    }
}

/**
 * Отменить создание задачи
 */
export function CancelCreateTask (state) {
    return {...state, neededCreateNewTask : false, startEditedTask: false,  createTask : {}}
}

/**
 * Редактирование поля
 */
export function editField (state, payload) {
    const {name, value, typeTask} = payload;
    return {...state, [typeTask] : {...state[typeTask], [name]: value } }
}

/**
 * Редактирование задачи
 */
export function editTask (state, payload) {
    const {id} = payload;
    const {tasks} = state;
    const editedTask = tasks.filter((elem) => {
        if(elem.id == id) {
            return elem
        }
        return false
    })
    return {...state, editedTask: editedTask[0], startEditedTask: true }
}
