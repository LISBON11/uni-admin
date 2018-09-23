import React, {Component} from 'react';
import View from './View';
import {connect} from 'react-redux';


class App extends Component {
    constructor(props) {
        super(props);

        this.onLoad = this.props.onLoad;
    }

    componentDidMount() {
        // тут надо сходить за всей датой для странички
        fetch('/api/get/boards')
            .then(res => res.json())
            .then(boards => this.onLoad(boards))
            .catch(console.error);
    }

    render() {
        return <View/>
    }
};

function mapSetToProps(store) {
    return {
        boards: store.boards
    };
}

function matchDispatchToProps(dispatch) {
    return {
        onLoad: (boards) => {
            dispatch({ type: 'LOAD', payload: boards})
        }
    }
}

export default connect(mapSetToProps, matchDispatchToProps)(App);
