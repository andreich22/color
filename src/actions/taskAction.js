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




// /**
//  * Действие выбора продукта
//  * @param {string} productVersionId идентифтикатор продукта
//  * @returns {Function}
//  */
// function selectProduct(productVersionId) {
//     return dispatch => {
//         dispatch({
//             type: types.PRODUCT_VERSION_SELECT,
//             payload: productVersionId
//         });
//         dispatch(loadVersion(productVersionId));
//     };
// }