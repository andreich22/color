import React, { Component, PropTypes} from 'react'
import ButtonBasic from '../button/ButtonBasic'

export default class ListLtem extends Component {

    static propTypes = {
        name     : PropTypes.string,
        checkedDelete  : PropTypes.bool,
        checkedFinish  : PropTypes.bool,
        //className: PropTypes.string,
        //select: PropTypes.bool,
        //clickHandler: PropTypes.func,
        //value: PropTypes.string
    };

    constructor(props) {
		super(props);
		
        this.clickHnadlerButton = this.clickHnadlerButton.bind(this);
        this.clickHnadlerСheckbox = this.clickHnadlerСheckbox.bind(this);
	}

    clickHnadlerButton (x) {
        this.props.clickHnadlerButton(x)
    }

    clickHnadlerСheckbox (x) {
        this.props.clickHnadlerButton(x)
    }


    render() {

    const {name, textTask, checkedDelete, checkedFinish, idTask, key} = this.props;

    return <div className='list-item' key={key}>
                <div className='list-item-head'>{name}</div>
                <div className='list-item-body'>{textTask}</div>
                
                <input 
                    type='checkbox' 
                    name='shouldByDelete' 
                    checked={checkedDelete} 
                />Отметить для удаленя
                
                <input 
                    type='checkbox' 
                    name='shouldByFinish' 
                    checked={checkedFinish} 
                />Отметить для завершения
                <ButtonBasic 
                    idTask={idTask}
                    clikHandler={this.clickHnadlerButton}
                    text='Редактировать задачу' 
                />
           </div>
    }
}

ListLtem.defaultProps = {
  name: 'Stranger',
  textTask: 'Описание задачи',
  checkedDelete: false,
  checkedFinish : false,
  idTask: 1
};