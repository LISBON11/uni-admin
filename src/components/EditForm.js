import React, {Component} from 'react'
import Tools from './Tools'
import FormField from './FormField'
import typeConfig from '../data-config'

class EditForm extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.data;

        this.state = {};
        this.state.form = Object.assign(this.data);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const fields = Object.keys(this.data).map((field, i) =>
            this.createFormCell(field, this.data[field], i)
        );

        return (
            <form className='edit-form'
                onSubmit={this.handleSubmit}
                ref='form'>
                    {fields}
                    <Tools actions={Object.assign(this.props.actions, { clearForm: this.clearForm})}/>
            </form>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.refs.form.reset();
    }

    handleChange = (e) => {
        this.setState({
            form: {
                [e.target.name]: e.target.value
            }
        })
    }

    createFormCell = (fieldName, value, key) => {
        const fieldConfig = typeConfig[fieldName];

        switch (fieldConfig && fieldConfig.type) {
            case 'input': {
                return <input key={key}
                            value={this.state.form[fieldName]}
                            onChange={this.handleChange}
                            ref='name'
                            name={fieldName}/>
            }
            case 'select': {
                return (
                    <select key={key}
                        value={this.state.form[fieldName]}
                        onChange={this.handleChange}>
                            {fieldConfig.values.map((val, i) => <option key={i}>{val}</option>)}
                    </select>
                )
            }
            default: {
                return value;
            }
        }
    }

    clearForm = (e) => {
        const clearFormState = Object.keys(this.state.form).reduce((acc, key) => {
            acc[key] = '';

            return acc;
        }, {});

        this.setState({
            form: clearFormState
        });
    }
}

export default EditForm;
