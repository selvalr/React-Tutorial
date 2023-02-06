
import './App.css';

function App() {
  const Course=[
    {id:1,name:"selva"},
    {id:2,name:"karthi"},
    {id:3,name:"bala"},
    {id:4,name:"kaks"},
    {id:5,name:"ravi"}
  ]

  const Developer=[
    {
      name:"selva",
      skills:[
        {name:"angular",type:"frondend"},
        {name:"rect",type:"frond"}
      ]

    },
    {
      name:"kartho",
      skills:[
        {name:"angular",type:"frondend"},
        {name:"rect",type:"frond"}
      ]

    },
    {
      name:"bass",
      skills:[
        {name:"angular",type:"frondend"},
        {name:"rect",type:"frond"}
      ]

    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rect list and keys</h1>
        {/*
        <ul>
          {
            Course.map(data=>(
              <li>{data.name}</li>
            ))
          }
        </ul>
        */}

          {/*keys */}
        <ul>
          {
            Course.map(data=>(
              <li key={data.id}>{data.name}</li>
            ))
          }
        </ul>


      {/*index to the unique id not the array  */}
        <ul>
          {
            Course.map((data,index)=>(
              <li key={index}>{data.name}</li>
            ))
          }
        </ul>

{/*Developer */}
        <div>
{Developer.map((dev,index)=>(
  <div key={index}>
    <h2>{dev.name}</h2>
    <div>
      {dev.skills.map((skill,index)=>(

      <p key={index}>{skill.type}-{skill.name}</p>
      )
      )}
    </div>
  </div>
))}

        </div>
      </header>
    </div>
  );
}

export default App;
