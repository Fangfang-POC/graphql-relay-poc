import React, { Suspense } from 'react';
import { graphql, loadQuery } from 'react-relay';
import { QueryRenderer } from 'react-relay';
import { usePreloadedQuery, PreloadedQuery, useQueryLoader } from 'react-relay/hooks';
import * as RebelsQuery from './__generated__/RebelsQuery.graphql';
import RelayEnvironment from '../../utils/RelayEnvironment';

type Props = {
    preloadQuery: PreloadedQuery<RebelsQuery.RebelsQuery>;
};

const RebelsNameQuery = graphql`
    query RebelsQuery($id: ID!) {
        rebels(id: $id) {
            id
            name
            ships {
                edges {
                    node {
                        id
                        name
                    }
                }
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    startCursor
                    endCursor
                }
            }
        }

        user(id: $id) {
            id
            name
        }
    }
`;

function Rebels(props: Props): JSX.Element {
    const data = usePreloadedQuery<RebelsQuery.RebelsQuery>(RebelsNameQuery, props.preloadQuery);
    console.log(data);
    return <h1>{data?.rebels?.name}</h1>;
}

const preloadQuery = loadQuery<RebelsQuery.RebelsQuery>(RelayEnvironment, RebelsNameQuery, { id: '12' });

export function RebelsApp() {
    return <Rebels preloadQuery={preloadQuery} />;
}
