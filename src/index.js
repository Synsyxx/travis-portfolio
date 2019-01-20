import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactCard from './components/contactcard/contactCard';

class App extends Component {
    render() {
        return (
            <div class="react-card">
            <ContactCard />
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
