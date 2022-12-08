// import { render } from '@testing-library/react';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './style.css'
import { useNavigate } from 'react-router-dom';

const clientId = "103973934189-cnq7av0r6l1ajh606oklikljjjtdkiac.apps.googleusercontent.com";

function Sign() {

  const navigate = useNavigate();

  const onSuccess = (res) => {
    console.log("Logged in user => ", res.profileObj);
    navigate('/home', {
      state: { user: res.profileObj }
    });
  }

  const onFailure = (res) => {
    console.log("Login Failed : ", res);
  }

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} type="button">
            Login !
          </button>
        )}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Sign;