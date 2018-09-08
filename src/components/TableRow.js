import React, {Component} from 'react'
import EditForm from './EditForm'
import ReactDOM from 'react-dom'

class TableRow extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
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
            <div className='row' onClick={this.toggleDisplayFullness}>
                {
                    this.state.isOpen ? this.fullView : this.briefView
                }
            </div>
        )
    }

    // чуть позде отменить всплытие
    // componentDidMount() {
    //     ReactDOM.findDOMNode(this).addEventListener('click', this.toggleDisplayFullness);
    // }

    createRowCells = (data, hasTools) => {
        return [
            Object.keys(data).map((prop, i) =>
                <div key={i} className='row__cell'>
                    {data[prop]}
                </div>
            ),
            // что делаеть с key? выбрасывает без него ошибку если массив
            hasTools && <button key={Object.keys(data).length} onClick={this.openEditForm}>edit</button>
        ]
    }

    // какое карсивое название функции:) поменять
    toggleDisplayFullness = (e) => {
        // в форме EditForm сгенерить событие закрытия формы и тут словить еге. проверить на тагет/тип и закрыть форму
        // тут надо асинхронно поиграться, set state асинхронный, дернуть спинер а потом Promise.All от данных и сет стэйт?
        if(!this.state.isOpen) {
            this.fullView = this.createRowCells(this.getFullInfo(), true);

            this.setState({
                isOpen: true
            })
        }
    }

    //здесь ходим якобы за полными данными на бэк
    getFullInfo = () => (this.fullData = Object.assign(this.briefData, { width: '120m', height: '30m' }))

    openEditForm = () => {
        this.setState({
            isEditing: true
        })
        // this.fullView = Object.keys(this.fullData).map((prop, i) => this.createFormCell(prop, this.fullData[prop]))
        this.fullView = <EditForm data={this.fullData}/>
    }
};

export default TableRow;


// componentDidMount() {
//     ReactDOM.findDOMNode(this).addEventListener('click', (event) => {
//       event.stopPropagation();
//     }, false);
//   }
