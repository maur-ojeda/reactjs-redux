import React, {Component} from 'react';
import logo from '../logo.svg';


export default class Cabecera  extends Component {
    render(){
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    cabecera
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    se cambia 
                    </a>
            </header>
        )
    }
}

