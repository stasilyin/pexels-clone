import React from 'react';
import Main from "./pages/Main";


const App: React.FC = () => {
  console.log(process.env.REACT_APP_PEXELS_API_KEY)
  return (
      <div className="App">
        <Main />
      </div>
  );
}

export default App;
