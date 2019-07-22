import React, {Component} from 'react';
import FormularioSimple from './components/FormularioSimple'
class App extends Component {

constructor() {
  //llama al constructor de la clase que se esta extendiendo en este caso componenet
  super()
  // get
  //fetch('https://jsonplaceholder.typicode.com/users')
  //  .then(x => x.json())
  //  .then(x => console.log(x))

  //post
  fetch('https://jsonplaceholder.typicode.com/users',{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
      body: JSON.stringify({
        name: 'mauricio Ojeda',
        username: 'mojeda',
      })
  })
  .then(x=> x.json())
  .then(x=> console.log(x))
}

  render() {
    return (
      <div className="App">
        <FormularioSimple/>
       </div>
    );
  }
}
export default App;


