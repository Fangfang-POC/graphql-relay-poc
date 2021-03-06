import React, { Suspense, ReactElement } from 'react';
import { RelayEnvironmentProvider, loadQuery, useQueryLoader } from 'react-relay/hooks';
import RelayEnvironment from '../../src/utils/RelayEnvironment';
import { ErrorBoundary } from './ErrorBoundary';

export default function Wrapper({ children }: { children: ReactElement }) {
    return (
        <ErrorBoundary>
            <RelayEnvironmentProvider environment={RelayEnvironment}>
                <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
            </RelayEnvironmentProvider>
        </ErrorBoundary>
    );
}
