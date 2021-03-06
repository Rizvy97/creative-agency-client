import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Review from './Components/Dashboard/Review/Review';
import AddService from './Components/Dashboard/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddOrder from './Components/Dashboard/AddOrder/AddOrder';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Login from './Components/Login/Login';
import MyOrderList from './Components/Dashboard/MyOrderList/MyOrderList';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/addservice">
            <AddService />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/myOrderList">
            <MyOrderList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <AddOrder />
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/addNewAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;