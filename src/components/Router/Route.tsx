import React from 'react';
import {Route, Switch} from  'react-router-dom'
import Main from "../../pages/Main";
import SearchPage from "../../pages/SearchPage";
// import Modal from "./components/Modal/Modal";

export function Router() {
    return (<div>
            <Switch>
                <Route exact path="/" render={() => <Main />}/>
                <Route path="/search/:searchTitle" render={() => <SearchPage /> }/>
                {/*<Route path="/photo/:id" children={<Modal/>}/>*/}
            </Switch>
        </div>
    );

}


