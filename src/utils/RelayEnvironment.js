import { Environment, Network, RecordSource, Store, Observable } from 'relay-runtime';
import { createClient } from 'graphql-ws';
import fetchGraphQL from './fetchGraphQL';

async function fetchRelay(params, variables) {
    console.log(`fetch query: ${params.name} with ${JSON.stringify(variables)}`);
    return fetchGraphQL(params.text, variables);
}

const wsClient = createClient({
    url: 'ws://localhost:4000/subscriptions',
});

const subscribe = (operation, variables) => {
    return Observable.create((sink) => {
        return wsClient.subscribe(
            {
                operationName: operation.name,
                query: operation.text,
                variables,
            },
            sink,
        );
    });
};

export default new Environment({
    network: Network.create(fetchRelay, subscribe),
    store: new Store(new RecordSource()),
});
