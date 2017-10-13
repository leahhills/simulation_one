import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainHome from './main/MainHome';
import MainShelf from './main/MainShelf';
import MainBin from './main/MainBin'


export default (
    <Switch>
        {/* <Route exact path= './main/MainShelf' component= { MainShelf }/>
        {/* <Route path= './main/MainBin.js' component= { MainBin }/> */}
        <Route exact path='/' component={MainHome} />
        <Route path='/bins/:id' component={MainShelf} />
        <Route path='/bin/:id' component={MainBin} />
    </Switch>

)