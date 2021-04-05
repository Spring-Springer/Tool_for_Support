import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../project/Home'
import MTL from '../project/MTL'
import AZAY from '../project/AZAY'
import TSLI from '../project/TSLI'
import KTAXA from '../project/KTAXA'
import THAIL from '../project/THAIL'


export default () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/MTL" component={MTL} />
    <Route exact path="/AZAY" component={AZAY} />
    <Route exact path="/TSLI" component={TSLI} />
    <Route exact path="/KTAXA" component={KTAXA} />
    <Route exact path="/THAIL" component={THAIL} />
  </Switch>
)