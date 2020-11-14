import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopPage from "./pages/top";
import SamplePage from "./pages/sample";

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={TopPage}/>
            <Route exact path="/sample" component={SamplePage}/>
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
