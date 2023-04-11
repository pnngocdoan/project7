import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'

const App = () => {
  

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts />
    },
    {
      path:"/edit/:id",
      element: <EditPost />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>👍 Among Us</h1>
        <Link to="/"><button className="headerBtn"> Explore Your Crewmates 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Create a Crewmate 🏆 </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
