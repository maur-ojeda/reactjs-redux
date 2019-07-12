import React, {Component} from 'react';
import logo from '../logo.svg';



const styles = {
    header: ({ backgroundColor }) =>
    ({
        //no keyframes ni !important
        backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    })

}


export default class Cabecera  extends Component {

    state = {
        backgroundColor: 'darkviolet'
    }

    cambiaColorHeader = () => {
        this.setState({backgroundColor: '#555'});
    }

    manejaClick = () => {
        const { miau, manejaClick } = this.props
        manejaClick(miau)

    }

    render(){

        const { miau, manejaClick } = this.props
        const { backgroundColor } = this.state
        return(
            <header onClick={this.cambiaColorHeader} style = {styles.header({ backgroundColor })} >
                <img onClick={this.manejaClick} src={logo} className="App-logo" alt="logo"/>
                    <p>{miau}</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">se cambia</a>
            </header>
        )
    }
}

