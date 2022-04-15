import { graphql } from 'react-relay';
import React, { Suspense, useState } from 'react';
import {
    useQueryLoader,
    loadQuery,
    PreloadedQuery,
    useMutation,
    usePreloadedQuery,
    useLazyLoadQuery,
} from 'react-relay/hooks';
import * as AddUserMutationType from './__generated__/UsersMutation.graphql';
import * as UsersQueryType from './__generated__/UsersQuery.graphql';
import RelayEnvironment from '../../utils/RelayEnvironment';
import './style.scss';

const UsersQuery = graphql`
    query UsersQuery {
        users {
            name
            id
            age
            gender
            username
        }
    }
`;
const AddUserMutation = graphql`
    mutation UsersMutation($user: AddUserInput) {
        addUser(input: $user) {
            name
            id
            age
        }
    }
`;
const preloadQueryAddUser = loadQuery<AddUserMutationType.UsersMutation>(
    RelayEnvironment,
    AddUserMutationType.default,
    {},
);
const preloadQueryUsers = loadQuery<UsersQueryType.UsersQuery>(RelayEnvironment, UsersQueryType.default, {});

export function AddUser(): JSX.Element {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [queryReference, loadQuery, disposeQuery] = useQueryLoader<UsersQueryType.UsersQuery>(
        UsersQuery,
        preloadQueryUsers,
    );

    const [commit, isInFlight] = useMutation(AddUserMutation);
    if (isInFlight) {
        return <div>Loading</div>;
    }
    return (
        <div>
            <label>User Name: </label>
            <input value={name} onChange={(evt) => setName(evt.target.value)} />
            <br />
            <br />
            <label>User Age: </label>
            <input type="number" value={age} onChange={(evt) => setAge(parseInt(evt.target.value))} />
            <br />
            <br />
            <button
                onClick={() =>
                    commit({
                        variables: { user: { name, age } },
                        onCompleted: (data) => {
                            loadQuery(queryReference ? queryReference.variables : {}, { fetchPolicy: 'network-only' });
                        },
                        onError: (error) => {
                            console.log(error);
                        },
                    })
                }
            >
                Add User
            </button>
        </div>
    );
}

export function GetUsers(): JSX.Element {
    const [queryReference, loadQuery, disposeQuery] = useQueryLoader<UsersQueryType.UsersQuery>(
        UsersQuery,
        preloadQueryUsers,
    );
    return (
        <div>
            <button
                onClick={() => {
                    loadQuery(queryReference ? queryReference.variables : {}, { fetchPolicy: 'network-only' });
                }}
            >
                Get Users
            </button>
            <button
                onClick={() => {
                    disposeQuery();
                }}
            >
                Dispose Query
            </button>
            <Suspense fallback={<div>Loading...</div>}>
                <UserDisplay queryReference={queryReference!} />
            </Suspense>
        </div>
    );
}
function UserDisplay(props: { queryReference: PreloadedQuery<UsersQueryType.UsersQuery> }): JSX.Element {
    if (props.queryReference === null) {
        return <div>Load users manually please</div>;
    }
    const data = usePreloadedQuery<UsersQueryType.UsersQuery>(UsersQuery, props.queryReference);
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                {data?.users?.map((user) => (
                    <tr key={user?.id}>
                        <td>{user?.id}</td>
                        <td>{user?.name}</td>
                        <td>{user?.age}</td>
                        <td>{user?.gender}</td>
                        <td>{user?.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
