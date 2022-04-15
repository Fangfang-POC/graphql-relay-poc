/**
 * @generated SignedSource<<0c053da786e413636e0443924cfa3928>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type LatestUserSubscription$variables = {};
export type LatestUserSubscription$data = {
  readonly userAdded: {
    readonly age: number | null;
    readonly name: string | null;
  } | null;
};
export type LatestUserSubscription = {
  variables: LatestUserSubscription$variables;
  response: LatestUserSubscription$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "age",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LatestUserSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "userAdded",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LatestUserSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "userAdded",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7cffb57e35a7e15ae6e1340847acbea0",
    "id": null,
    "metadata": {},
    "name": "LatestUserSubscription",
    "operationKind": "subscription",
    "text": "subscription LatestUserSubscription {\n  userAdded {\n    age\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "134f6c8b03fac3ba526040b380f32b7b";

export default node;
