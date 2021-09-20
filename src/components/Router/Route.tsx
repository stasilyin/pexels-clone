import React from 'react';
import {Route, Switch} from  'react-router-dom'
import Main from "../../pages/Main";
import SearchPage from "../../pages/SearchPage";

const Router = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => <Main />}/>
                <Route path="/search/:searchTitle" render={() => <SearchPage /> }/>
            </Switch>
        </div>
    )
}

export default Router

