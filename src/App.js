import React ,{useState} from 'react';
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import FormPage from './components/SignUpForm';
import { ToastContainer } from 'react-toastify';
import MyProfile from "./pages/MyProfile"

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('jwt') !==null
  )
  
  
  return (
    <>
      <ToastContainer />
      <NavBar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <Switch>
        <Route path="/" exact>
          <HomePage /> 
        </Route>
        <Route path="/users/:userId" component={ProfilePage}/>
        {/* <Route path="/form" component={FormPage}/> */}
        <Route exact path="/MyProfile" component={MyProfile}/>
      </Switch>
    </>
  );
}

export default App;
