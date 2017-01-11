import React, { Component, PropTypes} from 'react'
import {connect}              from 'react-redux';
import { bindActionCreators } from 'redux';
// import Modal from 'react-modal';
import ButtonBasic from '../components/button/ButtonBasic'
import ListLView from '../components/listLView/ListLView'
import ModalBase from '../components/modal/ModalBase'
import * as taskAction from '../actions/taskAction'


class App extends Component {

  constructor(props) {
		super(props);

		this.actionsTask = bindActionCreators(taskAction, props.dispatch);
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.clickHnadlerButton = this.clickHnadlerButton.bind(this);
    this.markCheckbox = this.markCheckbox.bind(this);
    this.CancelCreateTask = this.CancelCreateTask.bind(this);
    this.editFieldTask = this.editFieldTask.bind(this);
    this.editFieldCreateTask = this.editFieldCreateTask.bind(this);
    this.taskEditedSave = this.taskEditedSave.bind(this);
    this.taskCreateSave = this.taskCreateSave.bind(this);
    
	}

  static propTypes = {
        tasks     : PropTypes.array.isRequired,
        createTask : PropTypes.object,
        editedTask  : PropTypes.bool,
        startEditedTask  : PropTypes.bool,
        neededCreateNewTask  : PropTypes.bool,
    };

  //добавить новую задчу
  addNewTask () {
    this.actionsTask.createTask()
  }


  //Удалить задачу Mark for Removal
  deleteTask () {
    this.actionsTask.deleteTask()
  }

  //Редактировать задачу
  clickHnadlerButton (x) {
    const {id} = x.target;
    this.actionsTask.editTask({id})
  }

  markCheckbox (x) {
    const {id, target : {name}} = x
    this.actionsTask.markCheckbox({id, name})
  }

  // Отменить создание задачи
  CancelCreateTask() {
    this.actionsTask.CancelCreateTask();
  }

  //Редактировать поле созданой задачи
  editFieldCreateTask (x) {
    const {name, value} =x.target
    this.actionsTask.editField({name, value, typeTask : 'createTask' })
  }

  //Редактировать поле задачи
  editFieldTask (x) {
    const {name, value} =x.target
    this.actionsTask.editField({name, value, typeTask : 'editedTask' })
  }

  //Схранить созданую задачу
  taskCreateSave() {
    this.actionsTask.taskSaveCreate()
  }

  //Схранить редактируемую задачу
  taskEditedSave() {
    const {editedTask} = this.props;
    const {id} = editedTask;
    this.actionsTask.taskSave({id : id})
  }

  render() {
    const {tasks, neededCreateNewTask, createTask, editedTask, startEditedTask} = this.props;

    return <div>
            <ButtonBasic 
              clikHandler={this.addNewTask}
              text='Добавление задачи' 
              />
             
            <ButtonBasic 
              clikHandler={this.deleteTask}
              text='Удалить задачу' 
             />
            
            <ListLView 
              tasks={tasks} 
              markCheckbox={this.markCheckbox}
              clickHnadlerButton={this.clickHnadlerButton}
            />
            
            <ModalBase 
              contentLabel='Создать задачу'
              isOpen={neededCreateNewTask }
              update={this.editFieldCreateTask}
              valueInput={createTask.nameTask}
              nameValue='nameTask'
              valueTextarea={createTask.bodyTask}
              nameTextarea='bodyTask'
              save={this.taskCreateSave}
              cancel={this.CancelCreateTask}
            />

            <ModalBase 
              contentLabel='Редактировать задачу'
              isOpen={startEditedTask}
              update={this.editFieldTask}
              valueInput={editedTask.nameTask}
              nameValue='nameTask'
              valueTextarea={editedTask.bodyTask}
              nameTextarea='bodyTask'
              save={this.taskEditedSave}
              cancel={this.CancelCreateTask}
            />
    </div>
  }
}

App.defaultProps = {
    tasks : [],
    createTask : {},
    editedTask  : false,
    startEditedTask  : false,
    neededCreateNewTask  : false,
};

function mapStateToProps({task}) {
    return {
        ...task
    };
}

export default connect(mapStateToProps)(App);