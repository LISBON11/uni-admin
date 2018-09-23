import React, {Component} from 'react'
import EditForm from './EditForm'
import Tools from './Tools'
import {connect} from 'react-redux';


class TableRow extends Component {
    constructor(props) {
        super(props);

        this.id = this.props.id;

        this.briefData = this.props.boards[this.id];

        // console.log(this.briefData)
        this.briefView = this.createRowCells(this.briefData);

        // ?? да, можноне писать нул, но вроде так наглядно по полям пока нет jsdoc
        this.fullData = null;
        this.fullView = null;

        this.isOpen = false;
    }

    render() {
        this.isOpen = this.props.activeRowId === this.id;

        return (
            <div className={['row', this.isOpen ? ' row_state_open' : ''].join('')}
                onClick={this.toogleInfo}>
                    { this.props.isOpen ? this.fullView : this.briefView }
            </div>
        )
    }

    // componentWillReceiveProps(nextProps) {
    //     //загрузим данные с сервера
    //     nextProps.isOpen && this.createFullView();
    // }

    shouldComponentUpdate(nextProps) {
        const fromOpentoClose = this.isOpen && (nextProps.activeRowId !== this.id);
        const fromCloseToOpen = nextProps.activeRowId === this.id;

        return fromOpentoClose || fromCloseToOpen;
    }

    toogleInfo = () => {
        const newActiveId = (this.id === this.props.activeRowId) ? null : this.id;

        this.props.changeActiveRow(newActiveId)
    }

    createFullView = () => {
        // переделать без массива на () чтобы убрать key;
        this.fullView = [
            this.createRowCells(this.getFullData()),
            <Tools key='1' actions={{edit: this.openEditForm, close: this.props.changeActiveRow}}/>
        ]
    }

    getFullData = () => (this.fullData = Object.assign(this.briefData, { width: '120m', height: '30m' }))

    createRowCells = (data) => {
        return Object.keys(data).map((prop, i) =>
            <div key={i} className='row__cell'>
                {data[prop]}
            </div>
        )
    }

    openEditForm = () => {
        this.fullView = <EditForm
            data={this.fullData}
            actions={{ close: this.props.changeActiveRow }}
        />;

        this.forceUpdate();
    }
};

function mapSetToProps(store) {
    return {
        boards: store.boards,
        activeRowId: store.tableRow
    };
}

function matchDispatchToProps(dispatch) {
    return {
        changeActiveRow: (id) => {
            dispatch({ type: 'CHANGE_ACTIVE_ROW', payload: id})
        },
    }
}

export default connect(mapSetToProps, matchDispatchToProps)(TableRow);
