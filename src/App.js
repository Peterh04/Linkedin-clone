import React, { useEffect } from 'react';
import Login from './Login';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Widgets from './Widgets';



function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
   auth.onAuthStateChanged(userAuth =>{
    if (userAuth) {
      //user is logged in
       dispatch(
        login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL,
       }))
    }else{
      //user logged out
      dispatch(logout());
    }
   })
  }, [])
  return (
    <div className="app">
  <Header />
 
 {!user ? (
    <Login /> 
    ):(

    <div className="app_body">
      {/*Sidebar*/}
      <Sidebar />

      {/*Feed*/}
      <Feed />
      {/*Widgets */}
      <Widgets />
    </div>
   )}


    </div>
  );
}

export default App;
