import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  age: Yup.number()
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
});

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  age: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const App = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <Field type="text" id="fullName" name="fullName" />
            <ErrorMessage name="fullName" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <Field type="number" id="age" name="age" />
            <ErrorMessage name="age" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
