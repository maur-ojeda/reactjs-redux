import React, {Component} from 'react';
import Cabecera from './components/Cabecera';
import P from './components/P';
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
          <P>{miau} y otras cosas mas </P>
      
      
      </div>
    );
  }
}
export default App;


//onClick={this.cambiartextoDelEstado}