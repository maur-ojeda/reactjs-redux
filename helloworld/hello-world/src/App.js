import React, {Component} from 'react';
import Cabecera from './components/Cabecera'
import './App.css';


class App extends Component {
  
  state= {
  // son de uso del mismo componente  pero se pueden pasar copmo props
    miau: 'Bienvenido a miau'
  }

  cambiartextoDelEstado = () => {
    //recarga al hacer click con el setState
    this.setState({miau: 'hola mundo'})
  }

  
  render() {
    const { miau } = this.state
    const texto = 'texto de miau'
    
    return (
      <div className="App">
         <Cabecera miau={miau} manejaClick={this.manejaClick}/>
        <p onClick={this.cambiartextoDelEstado} className="App-intro">
           {miau}
        </p>
      </div>
    );
  }
}
export default App;
