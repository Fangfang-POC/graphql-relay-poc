import { graphql } from 'react-relay';
import React, { Suspense, useEffect } from 'react';
import { useFragment, usePreloadedQuery, loadQuery, PreloadedQuery } from 'react-relay/hooks';
import * as UserComponetNameType from './__generated__/UserComponent_name.graphql';
import * as UserComponentUserType from './__generated__/UserComponent_user.graphql';
import * as UserComponentQueryType from './__generated__/UserComponentQuery.graphql';
import RelayEnvironment from '../../utils/RelayEnvironment';
import './style.css';

function UserNameSection(props: { user: UserComponetNameType.UserComponent_name$key }) {
    const userNameFragment = graphql`
        fragment UserComponent_name on User {
            name
        }
    `;
    const user = useFragment(userNameFragment, props.user);
    return <span className="userValue">{user?.name}</span>;
}

function UserComponent(props: { user: UserComponentUserType.UserComponent_user$key }) {
    const UserComponentFragment = graphql`
        fragment UserComponent_user on User {
            username
            age
            gender
            ...UserComponent_name
        }
    `;
    const user = useFragment(UserComponentFragment, props.user);
    return (
        <>
            <span className="userValue">{user.age}</span>
            <span className="userValue">{user.gender}</span>
            <span className="userValue">{user.username}</span>
            <UserNameSection user={user} />
        </>
    );
}

const UserComponentQuery = graphql`
    query UserComponentQuery($id: ID!) {
        user(id: $id) {
            id
            ...UserComponent_user
        }
    }
`;
const preloadedQueryReference = loadQuery<UserComponentQueryType.UserComponentQuery>(
    RelayEnvironment,
    UserComponentQuery,
    { id: '1001' },
);
export default function User(): JSX.Element {
    const data = usePreloadedQuery<UserComponentQueryType.UserComponentQuery>(
        UserComponentQuery,
        preloadedQueryReference!,
    );
    //@ts-ignore
    return <UserComponent user={data?.user} />;
}
