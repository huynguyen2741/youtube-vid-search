/*
    TODO:
        create the modal part to get username and password
        have submit button at the end
        have a link to create an account
        connect to the sign_in sign_out action
*/

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {createUser} from '../actions';

import '../styles/SignIn.css';


class CreateUser extends Component {
    renderField = ({input, label, meta}) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div className="ui form error">{this.renderError(meta)}</div>
            </div>
        );
    }

    renderError = (meta) => {
        if (meta.touched && meta.error) {
            return (
                <div className="ui message error">{meta.error}</div>
            );
        }
    }

    // submit the form value to the action to create state.
    onSubmit = (formValues) => {
        this.props.createUser(formValues);
    }

    render() {
        return (
            <div className="forms ui form error">
                <form className="signin_form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <h2>Sign Up Form</h2>
                    <Field name="username" label="User Name:" component={this.renderField} />
                    <Field name="password" label="Password:" component={this.renderField} />
                    <Field name="c_password" label="Confirm Password:" component={this.renderField} />
                    <button className="ui blue button" type="submit">Create User</button>
                </form>
            </div>
        );
    }

}

const validate = (formValues) => {
    const error = {};
    if (!formValues.username) {
        error.username = 'Please enter username'
    };
    if (!formValues.password) {
        error.password = 'Please enter password'
    };
    if ((formValues.password) !== (formValues.c_password)) {
        error.c_password = 'Confirm password does not match';
    };
    return error;
}

const reduxFormConnect = reduxForm({form: "createForm", validate: validate})(CreateUser);

export default connect(null, {createUser})(reduxFormConnect);