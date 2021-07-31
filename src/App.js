import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from "./components/NavBar"
import Login from './components/Login'
import Register from "./components/Register"
import Logout from "./components/Logout"
import Help from "./components/Help"
function App() {
  return (
    <>
    <NavBar />
    <Route exact path="/">
       <Login />
    </Route>
    <Route path="/help">
       <Help />
    </Route>
    <Route path="/login">
       <Login />
    </Route>
    <Route path="/register">
       <Register />
    </Route>
    <Route path="/logout" >
       <Logout />
    </Route>
    </>
  );
}

export default App;
