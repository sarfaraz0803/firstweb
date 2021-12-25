import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import Navmenu from './Navmenu';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

const Error = () => {
    const history = useHistory();
    return (
        <>
        <h2>Oops!...Page Not Found. 💥</h2>
        <button onClick={()=>{history.goBack()}}>Go Back</button>
        </>        
    );
}
const Webmain = () => {
    return(
        <>
            <Navmenu />
            <Switch>
                <Route exact path="/firstweb" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Route component={Error} />
                
            </Switch>
            <Footer/>
        </>
    );
}

export default Webmain;
