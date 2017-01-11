import React, { Component} from 'react'
import {connect}                     from 'react-redux';
import ButtonBasic from '../components/button/ButtonBasic'
import ListLView from '../components/listLView/ListLView'


//home/andrey/project/wily/color/src/containers/App.js
//home/andrey/project/wily/color/src/components/button/ButtonBasic.js

class App extends Component {

  constructor(props) {
		super(props);
		
    this.addNewTask = this.addNewTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.clickHnadlerButton = this.clickHnadlerButton.bind(this);
	}

  //добавить новую задчу
  addNewTask (x) {
    console.log('addNewTask' ,x)
  }

  //Завершить задачу
  finishTask (x) {
    console.log('finishTask' ,x)
  }

  //Удалить задачу Mark for Removal
  deleteTask (x) {
    console.log('deleteTask' ,x)
  }

  //Редактировать задачу
  clickHnadlerButton (x) {
    console.log('clickHnadlerButton' ,x)
  }

  render() {
    const {tasks} =this.props;

    return <div>
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
            
            <ListLView 
              tasks={tasks} 
              checkedDelete={false}
              checkedFinish={true}
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

//  {
//   tasks : [
//     { 
//       nameTask: 'nametask', 
//       bodyTask : 'bodyTask',
//       shouldByDelete : false,
//       shouldByFinish : false,
//       id: randomId()
//     }
//   ],
//   shouldByCreateNewTask : false,
// };