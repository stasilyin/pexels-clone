import React from 'react';
import Main from "./pages/Main";
import {Route} from "react-router-dom";
import {Router} from "./components/Router/Route";


const App: React.FC = () => {
  console.log(process.env.REACT_APP_PEXELS_API_KEY)
  return (
      <div className="App">
        <Router />
      </div>
  );
}

export default App;
