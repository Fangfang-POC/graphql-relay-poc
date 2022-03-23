// import {graphql, usePreloadedQuery} from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { QueryRenderer } from 'react-relay';
import React from 'react';
import {
  usePreloadedQuery,
  PreloadedQuery,
}
  from 'react-relay/hooks';
import * as RebelsQuery from './__generated__/RebelsQuery.graphql';

type Props = {
  preloadQuery: PreloadedQuery<RebelsQuery.RebelsQuery>
}

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

export default function Rebels(props: Props) {
  console.log(props);
  const data = usePreloadedQuery<RebelsQuery.RebelsQuery>(RebelsNameQuery, props.preloadQuery);
  console.log(data);
  return (
    <h1>{data?.rebels?.name}</h1>
  );
}