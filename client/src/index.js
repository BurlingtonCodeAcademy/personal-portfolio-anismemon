import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import './App.css';
import App from './App';
// import About from './About';
// import Navbar from './Navbar';
// import Portfolio from './Portfolio';
// import Interests from './Interests';
// import Work from './Work'
// import Footer from './Footer'
// import Header from './Header'
import * as serviceWorker from './serviceWorker';

// function Router(props) {
//     return (

//         <BrowserRouter>
//             <Header />
//             <Navbar />
//             <Switch>
//                 <Route exact path={'/'} component={App} />
//                 <Route path={'/about'} component={About} />
//                 <Route path={'/portfolio'} component={Portfolio} />
//                 <Route path={'/work'} component={Work} />
//                 <Route path={'/interests'} component={Interests} />
//             </Switch>
//             <Footer />
//         </BrowserRouter>

//     )
// }

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
