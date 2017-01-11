import * as types from '../constans/taskActionTypes';


/**
 * Действие Смены статуса удаления
 * @param {string} payload идентификатор элемента
 * @returns {ReduxAction}
 */
export function markCheckbox(payload) {
    return {
        type: types.TASK_SHOULD_BY_DELETE,
        payload: payload
    };
}

/**
 * Действие удаляет задачи
 * @returns {ReduxAction}
 */
export function deleteTask() {
    return {
        type: types.TASK_DELETE,
    };
}

/**
 * Создать задачу
 * @returns {ReduxAction}
 */
export function createTask() {
    return {
        type: types.TASK_CREATE,
    };
}

/**
 * Создать задачу
 * @returns {ReduxAction}
 */
export function CancelCreateTask() {
    return {
        type: types.TASK_CREATE_CANCEL,
    };
}


/**
 * Сохранить редактируемую задачу
 * @returns {ReduxAction}
 */
export function taskSave(payload) {
    return {
        type: types.TASK_SAVE_EDITING,
        payload: payload
    };
}

/**
 * Сохранить созданую задачу
 * @returns {ReduxAction}
 */
export function taskSaveCreate() {
    return {
        type: types.TASK_CREATE_CSAVE
    };
}

/**
 * Редактировать поле
 * @returns {ReduxAction}
 */
export function editField(payload) {
    return {
        type: types.TASK_EDIT_FIELD,
        payload: payload
    };
}

/**
 * Редактировать поле
 * @returns {ReduxAction}
 */
export function editTask(payload) {
    return {
        type: types.TASK_EDIT,
        payload: payload
    };
}
