import React, {Component} from 'react';
import Header from './Header/Header';
import Form from './Form/Form'

class App extends Component {
  cotizarSeguro = (datos) => {
    console.log(datos)
  }

    
  render(){
    return (
      <div className="contenedor">
        <Header 
          title="Assess car"
        />

        <div className="contenedor-formulario">
          <Form 
            cotizarSeguro={this.cotizarSeguro}
          />
        </div>

      </div>
    );
  }
  
}

export default App;
