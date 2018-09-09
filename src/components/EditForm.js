import React, {Component} from 'react'
import Tools from './Tools'
import FormField from './FormField'
import typeConfig from '../data-config'

class EditForm extends Component {
    constructor(props) {
        super(props);

        this.data = this.props.data;

        this.formFields = [];

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const formFields = Object.keys(this.data).map((fieldName, i) =>
            <FormField key={i}
                fieldName={fieldName}
                value={this.data[fieldName]}
                ref={instance => this.formFields.push(instance)}/>
        );

        return (
            <form className='edit-form'
                onSubmit={this.handleSubmit}>
                    {formFields}
                    <Tools actions={Object.assign(this.props.actions, { clearForm: this.clearForm})}/>
            </form>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    clearForm = (e) => {
        this.formFields.forEach(field => field.clearField())
    }
}

export default EditForm;
