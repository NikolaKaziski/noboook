import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import ContactUs from './ContactUs';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


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
              <Route path="/contact" component={ContactUs} />
            </Switch>
          </>
        )}
      </div>
    </Router >
  );
}

export default App;
