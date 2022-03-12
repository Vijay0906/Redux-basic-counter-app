import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {IncAction,DecAction} from './actions';


function App({local_variable,IncAction,DecAction}) {
  return (
    <div className="App">
        <h1>Hello{local_variable}</h1>
        <button onClick={() => IncAction(5)}>Increment</button>
        <button onClick={DecAction}>Decrement</button>
    </div>
  );
}

const mapStateToProps = state => ({
  local_variable : state
 
})
export default connect(mapStateToProps,{IncAction,DecAction})(App);
