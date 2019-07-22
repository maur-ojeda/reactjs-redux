import React, { Component } from 'react'
import P from './P';


const validate = values =>{
    const errors = {}
    if(!values.nombre){
        errors.nombre = 'Este campo es obligatorio'
    }
    if(!values.apellido){
        errors.apellido = 'Este campo es obligatorio'
    } 
    
    return errors
}


export default class FormularioSimple extends Component {
/* target hace referencia al mismo elemento html, asi se puede acceder al nombre y valor del elemento
se guarda todos los datos de los formularios 
*/

//todas la variables esta almacenadas en state 
state = {
    // contiene los mensajes de errores
    errors : {}
}
//
handleChange = ({target}) => {
    const { name, value } = target
    this.setState({ [name]: value })
}

handleSubmit = e =>{
    e.preventDefault()
//object destructuring de errores ya que viene con mensajes
    const { errors, ...sinErrors } = this.state
    const result = validate( sinErrors )
    
    this.setState({ errors: result})
    if(!Object.keys(result).length){
        //enviar formulario
        console.log('formulario válido')
        e.target.reset()
    } 
   
}

    render(){

        const { errors } = this.state

        return(
            <form onSubmit={this.handleSubmit}>
                <input name="nombre" onChange={this.handleChange}/>
                {/* && evalua lo de la izquerda como T or F  y retrona lo de la derecha, el componente de P*/
                    errors.nombre && <P>{ errors.nombre }</P>
                }
                <input name="apellido" onChange={this.handleChange}/>
                 { errors.apellido && <P>{ errors.nombre }</P>}
                <input type="submit" value="Enviar"></input>
            </form>
        )
    }
}