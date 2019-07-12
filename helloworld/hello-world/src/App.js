import React, {Component} from 'react';
import Cabecera from './components/Cabecera'
import './App.css';


class App extends Component {
  manejaClick = texto => { 
    console.log(texto) 
  }
  render() {
    const miau = 'texto de miau'
    const guau = 'texto de guau'
    return (
      <div className="App">
         <header className="App-header" >
                <Cabecera miau={miau} manejaClick={this.manejaClick}/>
                <Cabecera miau={guau} manejaClick={this.manejaClick}/>
        </header>
      </div>
    );
  }
}
export default App;
