import React from "react";

//child component of App.js 
export default class Navbar extends React.Component{
   
    constructor(props){
    super(props);
    this.state={date:new Date()}
    //console.log("nav-child-constructor");
   }


   componentDidMount(){
    console.log("child-clock-DidMount");
    this.timerId=setInterval(()=>this.thick(),1000);
   }
   
   componentWillUnmount(){
    //console.log("child-componentWillUnmount");
    clearInterval(this.timerId)
   }

   thick(){
    this.setState({
        date:new Date()
    });

   }

    render(){

        console.log("child-clock-component-render");
        return(
            <div>
                <p>{this.state.date.toLocaleTimeString()} </p>
                <button onClick={this.componentWillUnmount.bind(this)}>reset</button>
            </div>
        )
    }
    

}