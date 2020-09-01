import React, { Component } from 'react';
import InputText from './components/ejercicio2/InputText';
import ListItem from './components/ejercicio2/ListItem'
import './Ejercicio2.css';

class Ejercicio2 extends Component {
    state = {
        text: '',
    }

    changedTextHandler = (event) => {
        this.setState({
            text: event.target.value,
        })
        //console.log(event.target.value);
    }

    deleteChartHandler = (index) => {
        let text = this.state.text.split('');
        text.splice(index, 1);
        let newText = text.join('');
        this.setState({
            text: newText
        });
    }

    render() {

        let list = this.state.text.split('').map((chart, i) => {
            return <ListItem
                className='chartComponent'
                chart={chart}
                key={chart + i}
                click={() => this.deleteChartHandler(i)} />
        })

    return (
        <div className='ejercicio2'>
            <h1>React - Ejercicio N°2</h1>
            <InputText
                change={(event) => this.changedTextHandler(event)}
                textLength={this.state.text.length}
                text={this.state.text}
            />
            {list}
        </div>
    )
  }
}

export default Ejercicio2;