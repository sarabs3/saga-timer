import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'
import App from '../App';

export default () => (
  <Switch>
    <Route path="/page2" render={()=>(
    <div>
      <h4>It's a page 2</h4>
      <Link to="/">Go Back</Link>
    </div>)} />
    <Route path="/page" render={()=>(
    <div>
      <h4>It's a page</h4>
      <Link to="/">Go Back</Link>
    </div>)} />
    <Route path="/" render={()=> (
    <Goo />)} />
  </Switch>
);

const Go = (props) => (
  <div>
      <h1>Welcome to this boilerplate!</h1>
      <button onClick={props.button} className="header" >Login</button>
        <button onClick={props.buttonSide} className="sidebar" >Logout</button>
        <button onClick={props.other} className="sidebar" >Other</button>
      <Link to="/page">Page 1</Link>
      <br />
      <Link to="/page2">Page 2</Link>
    </div>
) ;
const mapDispatch = (dispatch) => ({
  button: () =>  dispatch({type: 'login'}),
  buttonSide:  () => dispatch({type: 'logout'}),
  other:  () => dispatch({type: 'other'})
})
const Goo = connect(null, mapDispatch)(Go)