import React, {Component} from 'react';
import axios from 'axios';
import FormularioSimple from './components/FormularioSimple'




class App extends Component {
constructor() {
  super()

 // axios.get('https://jsonplaceholder.typicode.com/users')
 // .then(({data}) => console.log(data))

 axios.post('https://jsonplaceholder.typicode.com/users',
 {
  name: 'Mauricio Ojeda' ,
  username : 'moeb'
 })
 .then(({data}) => console.log(data))


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


