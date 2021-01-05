import {useState, useEffect} from 'react'
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import Posts from "./components/Posts";
import {Context} from "./Context";


function App() {
  const [posts, setPosts] = useState(null)
  const [searchReq, setSearchReq] = useState('')
  useEffect(() => {
      fetch('http://localhost:3001/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
    }
  , [])

  return (
    <div className="App">
      <Context.Provider
        value={{
          posts, setPosts,
          searchReq, setSearchReq
        }}
      >
        <Search/>
        <Posts />
      </Context.Provider>
    </div>
  );
}

export default App;
