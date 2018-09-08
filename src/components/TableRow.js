import React, {Component} from 'react'
import EditForm from './EditForm'
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
        nextProps.isOpen && this.getFullView();
    }

    shouldComponentUpdate(nextProps, nextState) {
        // почитать про pureComponent
        return this.props.isOpen !== nextProps.isOpen;
    }

    toogleInfo = () => {
        !this.props.isOpen && this.props.changeActiveRow();
    }

    getFullView = () => {
        this.fullView = this.createRowCells(this.getFullData(), true);
    }

    getFullData = () => (this.fullData = Object.assign(this.briefData, { width: '120m', height: '30m' }))

    createRowCells = (data, hasTools) => {
        return [
            Object.keys(data).map((prop, i) =>
                <div key={i} className='row__cell'>
                    {data[prop]}
                </div>
            ),
            // что делаеть с key? выбрасывает без него ошибку если массив
            hasTools && [
                <button key={Object.keys(data).length} onClick={this.openEditForm}>edit</button>,
                <button key={Object.keys(data).length + 1} onClick={this.props.changeActiveRow}>close</button>
            ]
        ]
    }

    openEditForm = () => {
        this.fullView = <EditForm data={this.fullData}/>

        this.forceUpdate();
    }
};

export default TableRow;
