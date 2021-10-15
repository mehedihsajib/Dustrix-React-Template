import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import News from './pages/News';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Team from './pages/Team';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/home-2">
                        <Home2 />
                    </Route>
                    <Route exact path="/home-3">
                        <Home3 />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/team">
                        <Team />
                    </Route>
                    <Route exact path="/faq">
                        <Faq />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/news">
                        <News />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/">
                        <Home1 />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
