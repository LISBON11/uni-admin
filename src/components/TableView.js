import React, {Component} from 'react'
import TableRow from './TableRow';
import {connect} from 'react-redux';


class TableView extends Component {
    state = {
        // для аккордеона
        openRowId: null
    }

    render() {
        const dataKeys = Object.keys(this.props.boards);

        return (
            <div className='table'>
                { dataKeys.map(key => <TableRow key={key} id={key}/>)}
            </div>
        )
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

export default connect(mapSetToProps, matchDispatchToProps)(TableView);
