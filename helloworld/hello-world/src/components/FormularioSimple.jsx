import React, { Component } from 'react'


export default class FormularioSimple extends Component {
/* target hace referencia al mismo elemento html, asi se puede acceder al nombre y valor del elemento
se guarda todos los datos de los formularios 
*/

//todas la variables esta almacenadas en state 
state = {}

//
handleChange = ({target}) => {
    const { name, value } = target
    this.setState({ [name]: value })
}

handleSubmit = e =>{
    e.preventDefault()
    console.log('Prevenido', this.state );
}

    render(){
        console.log( this.state )
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="nombre" onChange={this.handleChange}/>
                <input name="apellido" onChange={this.handleChange}/>
                <input type="submit" value="Enviar"></input>
            </form>
        )
    }
}