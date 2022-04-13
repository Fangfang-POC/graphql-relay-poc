import React, { Suspense, ReactElement } from 'react';
import { RelayEnvironmentProvider, loadQuery, useQueryLoader } from 'react-relay/hooks';
import RelayEnvironment from '../../src/utils/RelayEnvironment';

export default function Wrapper({ children }: { children: ReactElement }) {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </RelayEnvironmentProvider>
    );
}
