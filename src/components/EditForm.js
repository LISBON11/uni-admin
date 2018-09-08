import React, {Component} from 'react'
import typeConfig from '../data-config'

class EditForm extends Component {
    data = this.props.data

    render() {
        return Object.keys(this.data).map((prop, i) => this.createFormCell(prop, this.data[prop]))
    }

    createFormCell = (propName, value) => {
        const fieldConfig = typeConfig[propName];

        switch (fieldConfig && fieldConfig.type) {
            case 'input': {
                return <input key='2' defaultValue={value}/>
            }
            case 'select': {
                return (
                    <select key='1'>
                        {fieldConfig.values.map((val, i) => <option key={i}>{val}</option>)}
                    </select>
                )
            }
            default: {
                return value;
            }
        }
    }
}

export default EditForm;
