import React, {Component} from 'react'
import Tools from './Tools'
import typeConfig from '../data-config'

class FormField extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.data;

        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const fieldConfig = typeConfig[this.props.fieldName];

        switch (fieldConfig && fieldConfig.type) {
            case 'input': {
                return <input
                            value={this.state.value}
                            onChange={this.handleChange}
                            name={this.props.fieldName}/>
            }
            case 'select': {
                return (
                    <select
                        value={this.state.value}
                        onChange={this.handleChange}>
                            {fieldConfig.values.map((val, i) => <option key={i}>{val}</option>)}
                    </select>
                )
            }
            default: {
                return this.state.value;
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    clearField = (e) => {
        this.setState({
            value: ''
        });
    }
}

export default FormField;
