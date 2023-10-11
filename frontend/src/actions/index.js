import { loginadmin } from '../api/service';

//common actions

// toaster for success messsage
export const setSuccessMessage = (data) => (dispatch) => {
  dispatch({
    type: 'SUCCESS_MESSAGE',
    payload: data,
  });
};

// toaster for error message
export const setErrorMessage = (data) => (dispatch) => {
  dispatch({
    type: 'ERROR_MESSAGE',
    payload: data,
  });
};

// reset  success message toaster
export const resetSuccessMessage = () => (dispatch) => {
  dispatch({
    type: 'RESET_SUCCESS_MESSAGE',
  });
};

// reset error message toaster
export const resetErrorMessage = () => (dispatch) => {
  dispatch({
    type: 'RESET_ERROR_MESSAGE',
  });
};

export const loginadmins = (data, navigate) => async (dispatch) => {
  let des;
  await loginadmin('/auth/login', data).then((e) => {
    des = e.data.data;
    console.log(des.Designation);
    if (e.data.success === false) {
      dispatch(setErrorMessage(`${e.data.message}`));
      console.log('error');
    } else {
      localStorage.setItem('token', e.data.data.accessToken);
      localStorage.setItem('role', e.data.data.role);
      dispatch(setSuccessMessage('Login successfully'));
      if (e.data.data.role === 'superAdmin') {
        dispatch({ type: 'ADMIN_DATA', payload: des.Designation });
        localStorage.setItem('designation', JSON.stringify(des.Designation));
        navigate('/admin');
      } else {
        dispatch({
          type: 'LOGIN',
          payload: data,
        });
      }
    }
  });
};
