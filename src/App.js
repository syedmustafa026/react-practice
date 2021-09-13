import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
const question1 = "Hello World"
const obj = { name: "Hello World Object" }
const data = ['We', 'are', 'United']
const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]



function Apps() {

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="heading">Q1:</h2>
        <h3>1){question1}</h3>
        <h3>2){obj.name}</h3>
        <h3>3)<br /><ul>
          <li>{data[0]}</li>
          <li>{data[1]}</li>
          <li>{data[2]}</li>
        </ul></h3>
        <h3>4)<br /><ol>
          <li>{list[0].name}</li>
          <li>{list[1].name}</li>
          <li>{list[2].name}</li>
        </ol></h3>

        <h3>5)<br /><ol>
          <li>Company: {complex[0].company}<br />
            Job: {complex[0].jobs[0]} and {complex[0].jobs[1]}</li>
          <li>Company: {complex[1].company}<br />
            Job: {complex[1].jobs[0]} and {complex[1].jobs[1]}</li>
        </ol></h3>
        <h2 className="heading">Q2:</h2>
        <h5>Q:Briefly explain with an example what's the difference between
          import Something from 'package' VS import Something from 'package"</h5>



      </header>
    </div>
  );
}

export default Apps;

