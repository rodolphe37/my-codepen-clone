/* eslint-disable no-unused-vars */
import React from 'react';
import EditorInput from './components/editorInputs/EditorInput';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import { useStateValue } from './StateProvider';
import Login from './components/login/Login'

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <React.Fragment>
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            <EditorInput />
            <Footer />
          </>
        )}
    </React.Fragment>
  )
}

export default App;
