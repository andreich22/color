import React, { Component} from 'react'
import ButtonBasic from '../components/button/ButtonBasic'
import ListLtem from '../components/listItem/ListLtem'

//home/andrey/project/wily/color/src/containers/App.js
//home/andrey/project/wily/color/src/components/button/ButtonBasic.js

export default class App extends Component {

  constructor(props) {
		super(props);
		
    this.addNewTask = this.addNewTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
	}

  //добавить новую задчу
  addNewTask (x) {
    console.log('addNewTask' ,x)
  }

  //Завершить задачу
  finishTask (x) {
    console.log('finishTask' ,x)
  }

  //Удалить задачу
  deleteTask (x) {
    console.log('deleteTask' ,x)
  }


  render() {

    return <div >
            <ButtonBasic 
              clikHandler={this.addNewTask}
              text='Добавление задачи' 
              />
            <ButtonBasic 
              clikHandler={this.finishTask}
              text='Отметить задачу как завершенную' 
             />
            <ButtonBasic 
              clikHandler={this.deleteTask}
              text='Удалить задачу' 
             />
            
            <ListLtem name='Имя задачи' textTask='описание задачи' />

          </div>
  }
}
