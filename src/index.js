import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: "https://52ad8195fd3545eabc399c5cdd524cf6@o1135723.ingest.sentry.io/6185691",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})


ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
