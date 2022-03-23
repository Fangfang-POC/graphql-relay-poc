import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {
  RelayEnvironmentProvider,
  loadQuery,
}
  from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import './index.css';
import App from './Rebels';
import * as RebelsQuery from './__generated__/RebelsQuery.graphql';
import reportWebVitals from './reportWebVitals';

const preloadQuery = loadQuery<RebelsQuery.RebelsQuery>(RelayEnvironment, RebelsQuery.default, { id: "12" });

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<div>Loading...</div>}>
        <App preloadQuery={preloadQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
