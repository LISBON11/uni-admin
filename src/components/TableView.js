import React, {Component} from 'react'
import TableRow from './TableRow';

class TableView extends Component {
    state = {
        openRowId: null
    }

    render() {
        const {data} = this.props;

        return (
            <div className='table'>
                {
                    data.map((row, i) =>
                        // <TableRow key={i} data={row} isOpen={this.state.openRowId === row.id}/>
                        <TableRow key={i} data={row}/>
                    )
                }
            </div>
        )
    }
};

export default TableView;
