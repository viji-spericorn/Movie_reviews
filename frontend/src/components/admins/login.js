import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import '../../css/dashboard.css';
import { loginadmins } from '../../actions/index';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container-fluid backimage">
      <div>
        <h1>Login</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .min(2, 'Too Short!')
              .max(50, 'Too Long!')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email')
              .required('Email is Required'),
          })}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            dispatch(loginadmins(values, navigate));
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <div className="w-50 ">
              <form onSubmit={handleSubmit} className="loginform">
                <h3>Login</h3>
                <div className="form-outline m-4 formfields">
                  <label className="form-label text-white">Email address</label>
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control bg-light"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <div>
                    <span>
                      {errors.email && touched.email ? (
                        <div className="text-danger">{errors.email}</div>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="form-outline m-4">
                  <label className="form-label text-white">Password</label>
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control bg-light"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span>
                    {errors.password && touched.password ? (
                      <div className="text-danger">{errors.password}</div>
                    ) : null}
                  </span>
                </div>
                <div className="row m-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check"></div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block m-3 mt-0"
                >
                  Login
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
