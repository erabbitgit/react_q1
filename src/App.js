import './App.css';
import Routers from '../src/router/router'
import { useHistory } from 'react-router-dom'
import axios from 'axios';

function App() {
  const history = useHistory()
  axios.get('/api/authentication').then(res => {
    console.log(res)
  }).catch(() =>{
    history.push('/login')
  })

  return (
    <div className="App">
        <Routers/>
    </div>
  );
}

export default App;
