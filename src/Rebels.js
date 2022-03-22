// import {graphql, usePreloadedQuery} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import React, {Suspense} from 'react';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
}
  from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
// import type {RebelsQuery} from './__generated__/RebelsQuery.graphql';

// const React = require('React');
// const {usePreloadedQuery} = require('react-relay');
const RebelsNameQuery = graphql`
query RebelsQuery($id: ID!){
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

  user(id: $id){
    id
    name
  }
}
`;
const preloadQuery = loadQuery(RelayEnvironment, RebelsNameQuery, {id: "12"});

function Rebels(props) {
  const data = usePreloadedQuery(RebelsNameQuery, props.preloadQuery);
  console.log(data);
  return (
    <h1>{data.rebels.name}</h1>
  );
}

export default function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<div>Loading...</div>}>
        <Rebels preloadQuery={preloadQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  )
}