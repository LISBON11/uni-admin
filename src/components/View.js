import React, {Component} from 'react'
import TableView from './TableView'
import MapView from './MapView'

class View extends Component {
    state = {
        displayType: 'table'
    }

    render() {
        const data = this.props.data
        const ViewComponent = this.state.displayType === 'table' ? TableView : MapView

        return <ViewComponent data={data}/>
    }

    toggleDisplayMode = () => this.setState(state => ({
        displayType: state.displayType === 'map' ? 'table' : 'map'
    }))
};

export default View;
