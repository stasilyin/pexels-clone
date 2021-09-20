import React from 'react';
import Router from "./components/Router/Route";


const App: React.FC = () => {
  console.log(process.env.REACT_APP_PEXELS_API_KEY)
  return (
      <div className="App">
        <Router />
      </div>
  );
}

export default App;
