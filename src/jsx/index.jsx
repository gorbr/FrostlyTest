import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home1 from './pages/home1';
import Index2 from './pages/home2';
import Index3 from './pages/home3';
import Index4 from './pages/home4';
import Index5 from './pages/home5';
import Index6 from "./pages/home6";
import Index7 from "./pages/home7";
import Index8 from "./pages/home8";
import Index9 from "./pages/home9";
import Index10 from "./pages/home10";
import Index11 from "./pages/home11";
import Index12 from "./pages/home12";
import Index13 from "./pages/home13";
import Index14 from "./pages/home14";
import Index15 from "./pages/home15";
import Index16 from "./pages/home16";
import Index17 from "./pages/home17";

class Router extends Component {
    render() {
        return (
            <>

                <BrowserRouter basename={'/react/'}>
                    <div className="content-body">
                        <div className="container-fluid">
                            <div className="row">
                                <Switch>
                                    <Route path='/' exact component={Home1} />
                                    <Route path='/index2' component={Index2} />
                                    <Route path='/index3' component={Index3} />
                                    <Route path='/index4' component={Index4} />
                                    <Route path='/index5' component={Index5} />
                                    <Route path='/index6' component={Index6} />
                                    <Route path='/index7' component={Index7} />
                                    <Route path='/index8' component={Index8} />
                                    <Route path='/index9' component={Index9} />
                                    <Route path='/index10' component={Index10} />
                                    <Route path='/index11' component={Index11} />
                                    <Route path='/index12' component={Index12} />
                                    <Route path='/index13' component={Index13} />
                                    <Route path='/index14' component={Index14} />
                                    <Route path='/index15' component={Index15} />
                                    <Route path='/index16' component={Index16} />
                                    <Route path='/index17' component={Index17} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>


            </>
        );
    }
}

export default Router;
