import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './components/contactcard/contactCard';
import projectCards from './components/projectcards/projectCards';

class App extends Component {
    render() {
        return (
            <div class="react-card">
            <Card />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
