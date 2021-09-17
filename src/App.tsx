import React from 'react';
import Header from "./components/header/Header";

const App: React.FC = () => {
  console.log(process.env.REACT_APP_PEXELS_API_KEY)
  return (
      <div className="App">
          <Header />
      </div>
  );
}

export default App;
