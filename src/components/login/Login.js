import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

export default function Login() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    // sign in...
    auth.signInWithPopup(provider).then(result => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user
      })
      console.log(result.user)
    })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in to My CodePen</h1>
        <img src={require('../../assets/images/codepen-min.webp')} alt='logo' />
        <p>It's great!!</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  )
}

