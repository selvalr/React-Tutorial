import './App.css';
import React from 'react';
import Navbar from './Navbar';

//parent component

export default class App extends React.Component{
  constructor(props){
      super()
      console.log("App-constructor");//1.
  }

  componentDidMount(){
      console.log("App-mount");//3.
  }

  /*
  componentDidUpdate(prevProps,prevState){
    console.log("APp counter update");
    console.log("app-preProps",prevProps);
    console.log("app-prevState",prevState);
  }
*/

  render(){
      console.log("App-renders");//2.
      return(
      <div>
      <h1>hello</h1>
      <Navbar></Navbar>
      </div>
      )
  }
      
 
}



