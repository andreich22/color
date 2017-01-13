import React from 'react'
import ListLtem from '../listItem/ListLtem'
import {connect}              from 'react-redux';

export const ListLView = connect(mapStateToProps)(
  ({ tasksOrder }) => {
    return(
      <ul>
        { tasksOrder.map((id) => <ListLtem key={id} tasksOrderId={id} />) }
      </ul>
    )
  }
);

function mapStateToProps({task}) {
    return {
        tasksOrder : task.tasksOrder
    };
}


// export default class ListLView extends Component {

//     constructor(props) {
//         super(props);
//         this.renderListItem = this.renderListItem.bind(this);	
//     }

//     renderListItem (props) {
//       const {tasks, toogleChekbox, clickHnadlerButton} = props;
//       return tasks.map((elem, i) => {
//         return <ListLtem 
//                   key={`${i}-key`}
//                   id={elem.id}
//                   name={elem.nameTask} 
//                   textTask={elem.bodyTask} 
//                   checkedDelete={elem.shouldByDelete}
//                   checkedFinish={elem.shouldByFinish}
//                   toogleChekbox={toogleChekbox}
//                   clickHnadlerButton={clickHnadlerButton}
//               />
//       })
//     }

//     render() {
      
//       return <div>
//               {this.renderListItem(this.props)}
//             </div>
//     }
// }