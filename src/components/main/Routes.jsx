import React from 'react';
import { Switch,Route,Redirect } from 'react-router';

import Home from '../content/home/Home';
import Forum from '../content/forum/Forum';
import Faq from '../content/faq/Faq';
import Contactus from '../content/contactus/Contactus';

function Routes() {
    return ( 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/forum' component={Forum}/>
        <Route path='/faq' component={Faq}/>
        <Route path='/contactus' component={Contactus}/>
        <Redirect from='*' to='/' />
    </Switch> );
}

export default Routes;