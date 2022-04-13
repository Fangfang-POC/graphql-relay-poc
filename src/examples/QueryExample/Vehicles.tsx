import React from 'react';
import { graphql } from 'react-relay';
import { usePreloadedQuery, PreloadedQuery, useQueryLoader } from 'react-relay/hooks';
import * as VehiclesType from './__generated__/VehiclesQuery.graphql';

type Props = {
    preloadQuery: PreloadedQuery<VehiclesType.VehiclesQuery>;
};
const VehiclesFragmentTest = graphql`
    fragment VehiclesFragment on Airplane {
        maxSpeed
    }
`;
const VehiclesQuery = graphql`
    query VehiclesQuery {
        vehicles {
            __typename
            ...VehiclesFragment
            ... on Car {
                maxSpeed
                licensePlate
            }
        }
    }
`;
export default function Vehicles(props: Props): JSX.Element {
    const data = usePreloadedQuery<VehiclesType.VehiclesQuery>(VehiclesQuery, props.preloadQuery);
    console.log(data);
    return (
        <div>
            <h1>Vehicles</h1>
            {data?.vehicles?.map((vehicle, key) => {
                return (
                    <div key={key}>
                        <span>{vehicle?.__typename}</span>
                        {/* <span>{vehicle?.licensePlate}</span>
                        <span>{vehicle?.maxSpeed}</span> */}
                    </div>
                );
            })}
        </div>
    );
}
