import React, { useMemo, useState } from 'react';
import { graphql, requestSubscription, useSubscription, useRelayEnvironment } from 'react-relay';
import { GraphQLSubscriptionConfig } from 'relay-runtime';
import * as LatestUserSubscriptionType from './__generated__/LatestUserSubscription.graphql';

const UserAddedSubscription = graphql`
    subscription LatestUserSubscription {
        userAdded {
            age
            name
        }
    }
`;

export default function LatestUser() {
    const environment = useRelayEnvironment();
    const [data, setData] = useState<LatestUserSubscriptionType.LatestUserSubscription$data>();
    const config: GraphQLSubscriptionConfig<LatestUserSubscriptionType.LatestUserSubscription> = useMemo(
        () => ({
            variables: {},
            subscription: UserAddedSubscription,
            onCompleted: () => {
                console.log('Completed');
            },
            onError: (error: Error) => {
                console.log('Error', error);
            },
            updater: (store: any) => {
                //update store
                console.log(store);
            },
            onNext: (data: LatestUserSubscriptionType.LatestUserSubscription$data | undefined | null) => {
                /* Subscription payload received */
                setData(data!);
            },
        }),
        [],
    );
    // useSubscription(config);
    requestSubscription(environment, config);
    return (
        <>
            <label>The user just added: </label>
            <br />
            <span className="userValue">{data?.userAdded?.name}</span>
            <span className="userValue">{data?.userAdded?.age}</span>
        </>
    );
}
