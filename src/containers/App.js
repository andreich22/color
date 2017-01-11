import React, { Component} from 'react'
import {connect}              from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import ButtonBasic from '../components/button/ButtonBasic'
import ListLView from '../components/listLView/ListLView'
import * as taskAction from '../actions/taskAction'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

//home/andrey/project/wily/color/src/actions/taskAction.js
//home/andrey/project/wily/color/src/containers/App.js

class App extends Component {

  constructor(props) {
		super(props);

		this.actionsTask = bindActionCreators(taskAction, props.dispatch);
    this.addNewTask = this.addNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.clickHnadlerButton = this.clickHnadlerButton.bind(this);
    this.markCheckbox = this.markCheckbox.bind(this);
    this.createTaskCancel = this.createTaskCancel.bind(this);
    this.editField = this.editField.bind(this);
    
    
	}

  //добавить новую задчу
  addNewTask (x) {
    console.log('addNewTask' ,x)
    this.actionsTask.createTask()
  }


  //Удалить задачу Mark for Removal
  deleteTask (x) {
    console.log('deleteTask' ,x)
    this.actionsTask.deleteTask()
  }

  //Редактировать задачу
  clickHnadlerButton (x) {
    console.log('clickHnadlerButton' ,x)
  }

  markCheckbox (x) {
    const {id, target : {name}} = x
    
    this.actionsTask.markCheckbox({id, name})
  }

  createTaskCancel() {
    this.actionsTask.createTaskCancel();
  }

  editField (x) {
    const {name, value} =x.target
    this.actionsTask.editField({name, value})
  }

  render() {
    const {tasks, neededCreateNewTask, createTask} = this.props;

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
            
            <Modal
              isOpen={neededCreateNewTask}
              style={customStyles}
              contentLabel='Example Modal'
            >

              <h2 ref='subtitle'>Создайте задачу</h2>
                <input value={createTask.nameTask} name='nameTask' onChange={this.editField}/>
                <textarea value={createTask.bodyTask} name='bodyTask' onChange={this.editField}/>
                <button onClick={this.actionsTask.taskSave}>Сохранить</button>
                <button onClick={this.createTaskCancel}>Отмена</button>
            </Modal>

    </div>
  }
}

function mapStateToProps({task}) {
    return {
        ...task
    };
}

export default connect(mapStateToProps)(App);