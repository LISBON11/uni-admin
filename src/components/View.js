import React, {Component} from 'react'
import TableView from './TableView'
import MapView from './MapView'

class View extends Component {
    state = {
        displayType: 'table'
    }

    render() {
        const data = this.props.data;

        return this.state.displayType === 'table' ? <TableView data={data}/> : <MapView data={data}/>
    }

    toggleDisplayMode = () => this.setState({
        displayType: this.state.displayType === 'map' ? 'table' : 'map'
    })
};

export default View;
