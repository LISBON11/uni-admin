import React, {Component} from 'react';
import View from './View';
import data from '../data/boards';
import connect from 'react-redux';


class App extends Component {
    componentWillMount() {
        // сходили за данными
        this.data = data

        fetch('/api/get/boards')
            .then(res => res.json())
            // .then(res => res.json())
            .then(users => console.log('users', users))
            .catch(console.error);
    }

    // componentDidMount

    render() {
        return (
            <View data={this.data}/>
        )
    }
};

export default App;
