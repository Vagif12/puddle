import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import PropertyDetails from './components/property-details';
import Property from './components/property';
import About from './components/about';
import Pricing from './components/pricing';
import Registraion from './components/registration';
import Error from './components/error';
import Faq from './components/faq';
import Contact from './components/contact';
import SearchMap from './components/search-map';
import SearchList from './components/search-list';
import AddNew from './components/add-property';
import MortgageCalc from './components/calculator/MortgageCalc';

class Root extends Component {
    render() {
        return (
            <Router>
                <HashRouter basename="/">
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/property" component={Property} />
                            <Route path="/calculator" component={MortgageCalc} />
                            <Route path="/property-details" component={PropertyDetails} />
                            <Route path="/about" component={About} />
                            <Route path="/pricing" component={Pricing} />
                            <Route path="/registration" component={Registraion} />
                            <Route path="/error" component={Error} />
                            <Route path="/faq" component={Faq} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/search-map" component={SearchMap} />
                            <Route path="/search-list" component={SearchList} />
                            <Route path="/add-property" component={AddNew} />
                        </Switch>
                    </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('puddle'));
