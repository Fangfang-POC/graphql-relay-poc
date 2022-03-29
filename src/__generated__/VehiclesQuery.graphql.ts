/**
 * @generated SignedSource<<aa824e0abd0dfa6c2b137023ee38dfb1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VehiclesQuery$variables = {};
export type VehiclesQuery$data = {
  readonly vehicles: ReadonlyArray<{
    readonly __typename: string;
    readonly maxSpeed?: number | null;
    readonly licensePlate?: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"VehiclesFragment">;
  } | null> | null;
};
export type VehiclesQuery = {
  variables: VehiclesQuery$variables;
  response: VehiclesQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maxSpeed",
  "storageKey": null
},
v2 = {
  "kind": "InlineFragment",
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "licensePlate",
      "storageKey": null
    }
  ],
  "type": "Car",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "VehiclesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vehicles",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "VehiclesFragment"
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "VehiclesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "vehicles",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v1/*: any*/)
            ],
            "type": "Airplane",
            "abstractKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "155aa984633adb8c0734ab29c48bd335",
    "id": null,
    "metadata": {},
    "name": "VehiclesQuery",
    "operationKind": "query",
    "text": "query VehiclesQuery {\n  vehicles {\n    __typename\n    ...VehiclesFragment\n    ... on Car {\n      maxSpeed\n      licensePlate\n    }\n  }\n}\n\nfragment VehiclesFragment on Airplane {\n  maxSpeed\n}\n"
  }
};
})();

(node as any).hash = "4a32ac1297d93d29f358d0893e9596b8";

export default node;
