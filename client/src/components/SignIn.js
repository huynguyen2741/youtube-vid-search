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
import {signIn} from '../actions';
import {Link} from 'react-router-dom';

import '../styles/SignIn.css';


class SignIn extends Component {
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

    onSubmit = (formValues) => {
        this.props.signIn(formValues)
        // this.props.signIn();
    }

    render() {
        return (
            <div className="forms ui form error">
                <form className="signin_form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <h2>Sign In</h2>
                    <Field name="username" label="User Name:" component={this.renderField} />
                    <Field name="password" label="Password:" component={this.renderField} />
                    <button className="ui blue button" type="submit">Sign In</button>
                    <br />
                    <hr />
                    <Link to="/createuser" className="ui brown button" >Create User</Link>
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

    return error;
}

const reduxFormConnect = reduxForm({form: "signinForm", validate: validate})(SignIn);

export default connect(null, {signIn})(reduxFormConnect);