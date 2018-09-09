import React, {Component} from 'react'
import TableRow from './TableRow';

class TableView extends Component {
    state = {
        // для аккордеона
        openRowId: null
    }

    render() {
        const {data} = this.props;

        return (
            <div className='table'>
                {
                    data.map((row, i) =>
                        <TableRow key = {i}
                            data = {row}
                            isOpen = {this.state.openRowId === row.id}
                            changeActiveRow = {this.changeActiveRow.bind(this, row.id)}
                        />
                    )
                }
            </div>
        )
    }

    changeActiveRow = rowId =>
        this.setState(state => ({ openRowId: state.openRowId === rowId ? null : rowId }))
};

export default TableView;
