import React, { Component, PropTypes} from 'react'

export default class ListLtem extends Component {

    static propTypes = {
        name     : PropTypes.string
        //className: PropTypes.string,
        //select: PropTypes.bool,
        //clickHandler: PropTypes.func,
        //value: PropTypes.string
    };

    


    render() {
    const {name, textTask} = this.props;

    return <div className='list-item'>
                <div className='list-item-head'>{name}</div>
                <div className='list-item-body'>{textTask}</div>
           </div>
    }
}

ListLtem.defaultProps = {
  name: 'Stranger',
  textTask: 'Описание задачи'
};