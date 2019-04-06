import React, {Component} from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'


class HelloWorld extends Component{
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <ClassComponent />
                <FunctionalComponent />
            </div>
        )
    }
}

export default HelloWorld