import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopPage from "./pages/top";
import SamplePage from "./pages/sample";
import Tasks from "./components/tasks/tasks";
import * as Sentry from "@sentry/react";
import {Integrations} from "@sentry/tracing";

Sentry.init({
    dsn: "https://024890a3f373499b8945c647a26da165@o502953.ingest.sentry.io/5587125",
    autoSessionTracking: true,
    integrations: [
        new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={TopPage}/>
            <Route exact path="/sample" component={SamplePage}/>
            <Route exact path="/tasks" component={Tasks}/>
        </div>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
