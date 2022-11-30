import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoverPassword from '../containers/RecoverPassword';
import '../styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoverPassword} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App