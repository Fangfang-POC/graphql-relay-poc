import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider, loadQuery, useQueryLoader } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import './index.css';
import { AddUser, GetUsers } from './Users';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={<div>Loading...</div>}>
                <GetUsers />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <AddUser />
            </Suspense>
        </RelayEnvironmentProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
