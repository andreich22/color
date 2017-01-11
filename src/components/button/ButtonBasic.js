import React, { Component, PropTypes} from 'react'

export default class ButtonBasic extends Component {

    static propTypes = {
        text     : PropTypes.string.isRequired,
        //className: PropTypes.string,
        //select: PropTypes.bool,
        clickHandler: PropTypes.func,
        //value: PropTypes.string
    };

    constructor(props) {
		super(props);

        this.clikHandler = this.clikHandler.bind(this);
		
	}


    //Обработчик клика
    clikHandler (x) {
        this.props.clikHandler(x)
    }

    render() {
    const {text} = this.props;

    return <div>
                <button onClick={this.clikHandler}>{text}</button>
            </div>
    }
}

ButtonBasic.defaultProps = {
  text: 'Stranger',
  clickHandler: x=>x
};