import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import InputText from 'components/form/InputText';
import InputPassword from 'components/form/InputPassword';

class FormPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Form</h1>
        <Formik
          initialValues={{
            fullName: '',
            username: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex flex-col px-4 pt-2 py-4 bg-gray-300">
            <Field
              name="fullName"
              id="fullName"
              label="Full Name"
              as={InputText}
            />
            <Field
              name="username"
              id="username"
              label="Username"
              as={InputText}
            />
            <Field
              name="password"
              id="password"
              label="Password"
              as={InputPassword}
            />
            <Field
              name="confirmPassword"
              id="confirm_password"
              label="Confirm Password"
              as={InputPassword}
            />
            <button
              className="p-2 bg-red-400 mt-4 hover:bg-red-600 uppercase font-bold rounded-lg trans trans-bg"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default FormPage;
