import React, {Component} from 'react';

class Saludar extends Component{
    render(){
        const name = 'Poul'
        return(
            <p> Hola {name}: con class component</p>
        )
    }
}

export default Saludar