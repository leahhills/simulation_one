import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShelfList from './components/ShelfList/ShelfList';
import BinList from './components/BinList/BinList';
import Bin from './components/Bin/Bin'


export default (
    <Switch>
      
        <Route exact path='/' component={ShelfList} />
        <Route path='/bins/:id' component={BinList} />
        <Route path='/bin/:id' component={Bin} />
    </Switch>

)