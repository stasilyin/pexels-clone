import React, {useEffect} from 'react';
import Router from "./components/Router/Route";
import {useTypedSelector} from "./hooks/useTypedSelector";


const App: React.FC = () => {
    const lang = useTypedSelector(state => state.changeLanguage.language)

    useEffect(() =>  {

    },[lang])

    return (
      <div className="App">
        <Router />
      </div>
    );
}

export default App;
