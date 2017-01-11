import React, { Component} from 'react'
// import ButtonBasic from '../button/ButtonBasic'
import ListLtem from '../listItem/ListLtem'

export default class ListLView extends Component {

    constructor(props) {
        super(props);
        this.renderListItem = this.renderListItem.bind(this);	
    }

    renderListItem () {
      const {tasks} = this.props;
      return tasks.map((elem, i) => {
        return <ListLtem 
                  key={`${i}-key`}
                  name={elem.nameTask} 
                  textTask={elem.bodyTask} 
                  checkedDelete={elem.shouldByDelete}
                  checkedFinish={elem.shouldByFinish}
                  clickHnadlerButton={this.clickHnadlerButton}
              />
      })
    }

  render() {
    
    return <div>
            {this.renderListItem()}
          </div>
  }
}