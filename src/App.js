import React, {lazy, Suspense} from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './component/home';


const ContactPage = lazy(() => import('./component/contact'));

const ContactPageLazy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ContactPage />
  </Suspense>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/contact" component={ContactPageLazy} />
      </Switch>
    </Router>
  );
}


export default App;
