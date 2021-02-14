import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Courses from './components/Courses';
function App() {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">

              <Sidebar />

            </div>
            <div className="col-lg-9 app__main-content">
            
              <Navbar />

              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route path="/projects" component={Projects} />
                <Route path="/courses" component={Courses} />
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;