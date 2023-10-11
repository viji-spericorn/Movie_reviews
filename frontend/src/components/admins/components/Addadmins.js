import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// import { loginadmins } from '../../actions';

import { useSelector } from 'react-redux';

const addadminSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
  username: Yup.string().required('Username is required'),
  role: Yup.string().required('Role is required'),
  Designation: Yup.string().required('Designation is required'),
});

const AddadminForm = () => {
  const dispatch = useDispatch();

  const { designations } = useSelector((state) => state.reducer);

  useEffect(() => {
    const data = localStorage.getItem('designation');
  }, []);

  const fileInputRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      Name: '',
      role: '',
      Designation: '',
      phonenumber: '',
    },
    validationSchema: addadminSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className="background bg">
      <form onSubmit={formik.handleSubmit} className="form">
        <h3 className="h3">Add Here</h3>
        <div className="formfield">
          <div className="display">
            <label htmlFor="Name" className="label">
              Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              id="Name"
              name="Name"
              value={formik.values.Name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Name && formik.errors.Name ? (
              <div className="error">{formik.errors.Name}</div>
            ) : null}

            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error text-bg-danger">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}

            <label htmlFor="role" className="label">
              Role
            </label>
            <input
              className="input"
              type="text"
              placeholder="Role"
              id="role"
              name="role"
              value={formik.values.role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.role && formik.errors.role ? (
              <div className="error">{formik.errors.role}</div>
            ) : null}
          </div>
          <div className="display ">
            <label htmlFor="phonenumber" className="label">
              Role
            </label>
            <input
              className="input"
              type="text"
              placeholder="phonenumber"
              id="phonenumber"
              name="phonenumber"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber ? (
              <div className="error">{formik.errors.phonenumber}</div>
            ) : null}
            <label htmlFor="Designation">Designation</label>
            <select
              id="Designation"
              name="Designation"
              value={formik.values.Designation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option>Select Designation</option>
              {data.map((role) => (
                <option value={role.Designation}>{role.Designation}</option>
              ))}
            </select>
            {formik.touched.Designation && formik.errors.Designation ? (
              <div className="error">{formik.errors.Designation}</div>
            ) : null}

            <label htmlFor="Image" className="label">
              Photo
            </label>
            <input
              type="file"
              className="input"
              placeholder="Image"
              id="Image"
              name="Image"
              ref={fileInputRef}
              value={formik.values.Image}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.Image && formik.errors.Image ? (
              <div className="error">{formik.errors.Image}</div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
        <button type="submit" className="backbtn">
          Back
        </button>
      </form>
    </div>
  );
};

export default AddadminForm;
