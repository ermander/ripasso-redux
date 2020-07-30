import React from 'react';
import { Button } from "react-bootstrap"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from "react-redux" // Connette il componente a redux


const mapStateToProps = (state) => ({...state})

const mapDispatchToProps = (dispatch) => ({  
  increment: () => { // Action creator
    dispatch({
      type: 'INCREMENT'
    })
  },

  decrement: () => { // Action creator
    dispatch({
      type: 'DECREMENT'
    })
  }
})

function App(props) {
  return (
    <div className="App">
      {console.log(props)}
      <header className="App-header" style={{fontSize: "5em"}} >
        <Button variant="info" onClick={props.increment}>
          +
        </Button>
        {props.count}
        <Button variant="info" onClick={props.decrement}>
          -
        </Button>
      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
