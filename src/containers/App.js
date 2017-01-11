import React, { Component} from 'react'
import {connect}              from 'react-redux';
import { bindActionCreators } from 'redux';
import ButtonBasic from '../components/button/ButtonBasic'
import ListLView from '../components/listLView/ListLView'
import * as taskAction from '../actions/taskAction'


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

  render() {
    const {tasks} = this.props;

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

    </div>
  }
}

function mapStateToProps({task}) {
    return {
        ...task
    };
}

export default connect(mapStateToProps)(App);