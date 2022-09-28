import React from "react";
import {Switch, Route, Redirect} from 'react-router'

import Home from "../components/Home/Home";
import UserCRUD from "../components/User/UserCrud";

export default props => ( 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users' component={UserCRUD} />
        <Redirect from='*' to='/' />
    </Switch>
)