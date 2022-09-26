import React from 'react'
import { Route, Router, hashHistory, Redirect } from 'react-router' 

import authOrApp from '../authOrApp'
import Dashboard from '../../dashboard/dashboard'
import BillingCycle from '../../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={authOrApp} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)