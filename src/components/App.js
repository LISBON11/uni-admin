import React, {Component} from 'react'
import View from './View'
import data from '../data/boards'


class App extends Component {
    componentWillMount() {
        // сходили за данными
        this.data = data
    }

    render() {
        return (
            <View type='table' data={this.data}/>
        )
    }
};

export default App;
