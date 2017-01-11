import React from 'react'
import Modal from 'react-modal';

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


export default function ModalBase(props) {

    const {
            isOpen,
            update,
            valueInput,
            nameValue,
            valueTextarea,
            nameTextarea,
            save,
            cancel
          } = props;

    return (
            <Modal
              isOpen={isOpen}
              style={customStyles}
              contentLabel='Example Modal'
            >

              <h2>Создайте задачу</h2>
                <input value={valueInput} name={nameValue} onChange={update}/>
                <textarea value={valueTextarea} name={nameTextarea} onChange={update}/>
                <button  onClick={save}>Сохранить</button>
                <button  onClick={cancel}>Отмена</button>
            </Modal>
    );
}