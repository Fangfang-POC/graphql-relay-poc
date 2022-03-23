import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider, loadQuery, useQueryLoader } from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import './index.css';
import Rebels from './Rebels';
import AddUser from './AddUser';
import * as RebelsQuery from './__generated__/RebelsQuery.graphql';
import * as AddUserMutationType from './__generated__/AddUserMutation.graphql';
import reportWebVitals from './reportWebVitals';

const preloadQuery = loadQuery<RebelsQuery.RebelsQuery>(RelayEnvironment, RebelsQuery.default, { id: '12' });
const preloadQueryUser = loadQuery<AddUserMutationType.AddUserMutation>(RelayEnvironment, AddUserMutationType.default, {
    user: { name: 'Fangfang', age: 12 },
});

ReactDOM.render(
    <React.StrictMode>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={<div>Loading...</div>}>
                <Rebels preloadQuery={preloadQuery} />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <AddUser preloadQuery={preloadQueryUser} />
            </Suspense>
        </RelayEnvironmentProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
