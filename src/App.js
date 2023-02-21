import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  let api = 'https://jsonplaceholder.typicode.com/todos'

  let getAPIData = () => {
    axios
      .get(api)
      .then((res) => {

        setData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data)

  return (
    <div>
      <button className='ham' onClick={getAPIData} variant="contained">
        get data
      </button>
      {data.map((e, i) => <div>
        <p>{e.title}</p>
      </div>
      )}
    </div>
  )
}



export default App;