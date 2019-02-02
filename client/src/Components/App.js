import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const groupNew = () => <h2>groupNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/my-groups" component={Dashboard} />
          <Route path="/my-groups/new" component={groupNew} />
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
