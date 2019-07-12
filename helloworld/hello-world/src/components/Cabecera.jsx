import React, {Component} from 'react';
import logo from '../logo.svg';


export default class Cabecera  extends Component {
    manejaClick = () => {
        const { miau, manejaClick } = this.props
        manejaClick(miau)

    }

    render(){

        const { miau, manejaClick } = this.props

        return(
            <div>
                <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo"/>
                    <p>{miau}</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">se cambia</a>

                </div>
        )
    }
}

