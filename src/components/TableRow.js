import React, {Component} from 'react'
import EditForm from './EditForm'
import Tools from './Tools'
import ReactDOM from 'react-dom'

class TableRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isEditing: false
        };

        this.briefData = this.props.data;
        this.briefView = this.createRowCells(this.briefData);

        // ?? да, можноне писать нул, но вроде так наглядно по полям пока нет jsdoc
        this.fullData = null;
        this.fullView = null;
    }

    render() {
        return (
            <div className={['row', this.props.isOpen ? ' row_state_open' : ''].join("")}
                onClick={this.toogleInfo}>
                    { this.props.isOpen ? this.fullView : this.briefView }
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        //загрузим данные с сервера
        nextProps.isOpen && this.createFullView();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // почитать про pureComponent
        return this.props.isOpen !== nextProps.isOpen;
    }

    toogleInfo = () => {
        !this.props.isOpen && this.props.changeActiveRow();
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

export default TableRow;
