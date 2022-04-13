import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider, loadQuery, useQueryLoader } from 'react-relay/hooks';
import RelayEnvironment from './utils/RelayEnvironment';
import './index.css';
import UserComponent from './examples/FragmentExample/User';

ReactDOM.render(
    <React.StrictMode>
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={<div>Loading...</div>}>
                <UserComponent />
            </Suspense>
        </RelayEnvironmentProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
