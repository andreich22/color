import React, { Component, PropTypes} from 'react'
import ButtonBasic from '../button/ButtonBasic'

export default class ListLtem extends Component {

    static propTypes = {
        name     : PropTypes.string,
        textTask : PropTypes.string,
        checkedDelete  : PropTypes.bool,
        checkedFinish  : PropTypes.bool,
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
        const {target} = x;
        const {id} = this.props;
        this.props.toogleChekbox({id, target})
    }


    render() {

    const {name, textTask, checkedDelete, checkedFinish, id} = this.props;

    return <div className='list-item'>
                <div className='list-item-head'>{name}</div>
                <div className='list-item-body'>{textTask}</div>
                
                <input 
                    type='checkbox' 
                    name='shouldByDelete' 
                    checked={checkedDelete}
                    onClick={this.clickHnadlerСheckbox} 
                />Отметить для удаленя
                
                <input 
                    type='checkbox' 
                    name='shouldByFinish' 
                    checked={checkedFinish}
                    onClick={this.clickHnadlerСheckbox}  
                />Завершить задачу
                <ButtonBasic 
                    id={id}
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