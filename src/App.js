import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewContact from './NewContact';
import MedicalCenter from './MedicalCenter';
import Video from './Video';
import About from './About';


function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>

            <Header />

            <Switch>
              <Route path="/" exact>
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </Route>
              <Route path="/contact" component={NewContact} />
              <Route path="/medical" component={MedicalCenter} />
              <Route path="/video" component={Video} />
              <Route path="/about" component={About} />

              
            </Switch>
          </>
        )}
      </div>
    </Router >
  );
}

export default App;
