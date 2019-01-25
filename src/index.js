import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/contactcard/contactCard';
import Projects from './components/projectcards/projectCards';

class App extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="react-card">
                <div className="container">
                    <Card />
                </div>
            </div>

            </React.Fragment>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
