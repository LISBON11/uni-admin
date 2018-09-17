import React, {Component} from 'react'
import TableView from './TableView'
import MapView from './MapView'

class View extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayType: 'table'
        };

        this.onAdd = this.props.onAdd;
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

function mapSetToProps(store) {
    return {
        boards: store.boards
    };
}

function matchDispatchToProps(dispatch) {
    return {
        onAdd: (row) => {
            dispatch({ type: 'ADD', payload: row})
        }
    }
}

export default connect(mapSetToProps, matchDispatchToProps)(View);
