import { graphql } from 'babel-plugin-relay/macro';
import React from 'react';
import { usePreloadedQuery, PreloadedQuery } from 'react-relay/hooks';
import * as AddUserMutationType from './__generated__/AddUserMutation.graphql';

type Props = {
    preloadQuery: PreloadedQuery<AddUserMutationType.AddUserMutation>;
};
const AddUserMutation = graphql`
    mutation AddUserMutation($user: AddUserInput) {
        addUser(input: $user) {
            name
            id
            age
        }
    }
`;

export default function AddUser(props: Props): JSX.Element {
    const data = usePreloadedQuery<AddUserMutationType.AddUserMutation>(AddUserMutation, props.preloadQuery);
    console.log(data);
    return <h1>The added user: {data?.addUser?.name}</h1>;
}
