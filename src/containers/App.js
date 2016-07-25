import React, { Component} from 'react'
export default class App extends Component {
  

  componentDidMount() {
    // const divOne = document.getElementById('one');
    // const divTwo = document.getElementById('two');
    // const divTre = document.getElementById('tre');
    // const color = [
    //     'white',
    //     'black',
    //     'blue',
    //     'red',
    //     'green'
    // ];
    // const count = 0;
    this.getColor();
  }


  getColor() {
    const one = this.refs.one;
    const two = this.refs.two;
    const tre = this.refs.tre;
    console.log(one,two,tre);

    //let count = 0;

    function sec() {
        //divOne.style.background = color[count];
        one.style.background = ('#' + ((Math.random() * 0x1000000) | 0).toString(16));
        two.style.background = ('#' + ((Math.random() * 0x1000000) | 0).toString(16));
        tre.style.background = ('#' + ((Math.random() * 0x1000000) | 0).toString(16));
        //count == color.length ? count = 0 : count++;
    }

    setInterval(sec, 450);
  }

  render() {
    

    return <div className='wrap'>
            <div ref='one' className='one'></div>
            <div ref='two' className='two'></div>
            <div ref='tre' className='tre'></div>
            <div ref='footer' className='footer'></div>
          </div>
  }
}
