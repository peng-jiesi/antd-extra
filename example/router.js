import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import FormExt from "./routes/FormExt";
import PageExt from "./routes/PageExt";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/form-ext" exact component={FormExt} />
        <Route path="/page-ext" exact component={PageExt} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
