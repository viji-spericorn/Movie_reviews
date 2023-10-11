import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddadminForm from './admins/components/Addadmins';
import Dashboard from './admins/components/Dashboard';
import LoginForm from './admins/login';
import Header from './main/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetErrorMessage, resetSuccessMessage } from '../actions/index';
// toaster
const toastConfig = {
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

const App = () => {
  const dispatch = useDispatch();

  const { successMessage, errorMessage } = useSelector(
    (state) => state.reducer
  );
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, toastConfig);
      dispatch(resetSuccessMessage());
    } else if (errorMessage) {
      toast.error(errorMessage, toastConfig);
      dispatch(resetErrorMessage());
    }
  }, [successMessage, errorMessage]);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/auth/login" exact element={<LoginForm />}></Route>
        <Route path="/admin" exact element={<Dashboard />}></Route>
        <Route path="/subadmin" exact element={<AddadminForm />}></Route>
        <Route path="/" exact element={<Header />}></Route>
      </Routes>
    </div>
  );
};

export default App;
