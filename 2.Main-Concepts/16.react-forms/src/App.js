import React,{useState} from 'react';
import './App.css';

//form --> user input --> server side

function App() {

  const [username, setUsername] = useState('');  //3
  const [password, setPassword] = useState();  //4

  function changedElement(event){
    //console.log("changed value");  //1
    console.log(event.target.value);//type value  //2
    setUsername(event.target.value); //3
    /*console.log(event.target.type);// type name  //2
    console.log(event.target.placeholder);//placeholder  name*/ //2
  }

  function handleSubmit(event){
    console.log("submit");  
    setPassword(username);  
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {username}</h1>  {/*3*/}
      <h2>Password: {password}</h2> {/*4*/}

      <form onSubmit={handleSubmit}>

      <input onChange={changedElement} type="text" value={username} placeholder="name" />
     <input onChange={changedElement} type="email" placeholder="email"/>
     <button type='submit' >Submit</button>

      </form>
     
    </div>
  );
}

export default App;
