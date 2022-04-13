/**
 * @generated SignedSource<<083202fa397e29706dcf82d6662a8be6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Gender = "FEMALE" | "MALE" | "%future added value";
export type UsersQuery$variables = {};
export type UsersQuery$data = {
  readonly users: ReadonlyArray<{
    readonly name: string | null;
    readonly id: string;
    readonly age: number | null;
    readonly gender: Gender | null;
    readonly username: string | null;
  } | null> | null;
};
export type UsersQuery = {
  variables: UsersQuery$variables;
  response: UsersQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "age",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "gender",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "500ed34e90b58361cfcdb286e5393ab4",
    "id": null,
    "metadata": {},
    "name": "UsersQuery",
    "operationKind": "query",
    "text": "query UsersQuery {\n  users {\n    name\n    id\n    age\n    gender\n    username\n  }\n}\n"
  }
};
})();

(node as any).hash = "f6625cb96fccf3239c646e3e2ee7c592";

export default node;
