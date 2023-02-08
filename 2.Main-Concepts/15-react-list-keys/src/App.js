import React from 'react';
import './App.css';

function App() {
  const person=[
    {id:1,name:"selva",study:"BCA"},
    {id:2,name:"selva",study:"BCA"},
    {id:3,name:"selva",study:"BCA"},
    {id:4,name:"selva",study:"BCA"},
    {id:5,name:"selva",study:"BCA"}
  ];

  const Developer=[
    {
      name:"karthi",
    skill:[
      {name:"ag",type:"frontend"},
      {name:"re",type:"backend"},
    ]
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
      
    {/*  <ul>
        {person.map((item,index)=>(
          <li>{item.study}</li>
        ))}
      </ul>
    */}

      <ul>
        {person.map((item,index)=>(
          <li key={item.id}>{item.study}</li>
        ))}
      </ul>

      <ul>
        {person.map((item,index)=>(
          <li key={index}>{item.study}</li>
        ))}
      </ul>

      <div>
        {Developer.map((dev,index)=>(
          <div key={index}>
            <h3>{dev.name}skill</h3>
            <div>
              {dev.skill}
            </div>
          </div>
        ))}
      </div>
      </header>
    </div>
  );
}

export default App;
