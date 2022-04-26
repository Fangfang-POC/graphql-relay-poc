import { graphql, useRelayEnvironment } from 'react-relay';
import React, { Suspense, useEffect, useMemo } from 'react';
import { useFragment, usePreloadedQuery, loadQuery, PreloadedQuery } from 'react-relay/hooks';
import * as UserComponetNameType from './__generated__/UserComponent_name.graphql';
import * as UserComponentUserType from './__generated__/UserComponent_user.graphql';
import * as UserComponentQueryType from './__generated__/UserComponentQuery.graphql';
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
            <Suspense fallback={<div>Fetching username</div>}>
                <UserNameSection user={user} />
            </Suspense>
        </>
    );
}

export default function User(): JSX.Element {
    const UserComponentQuery = graphql`
        query UserComponentQuery($id: ID!) {
            user(id: $id) {
                id
                ...UserComponent_user
            }
        }
    `;
    const preloadedQueryReference = useMemo(
        () =>
            loadQuery<UserComponentQueryType.UserComponentQuery>(
                useRelayEnvironment(),
                UserComponentQuery,
                { id: '1001' },
                { fetchPolicy: 'store-or-network', networkCacheConfig: { force: true } },
            ),
        [],
    );

    const data = usePreloadedQuery<UserComponentQueryType.UserComponentQuery>(
        UserComponentQuery,
        preloadedQueryReference!,
    );
    //@ts-ignore
    return <UserComponent user={data?.user} />;
}
