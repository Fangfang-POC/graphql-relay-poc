/**
 * @generated SignedSource<<dff52f4c1b31e0a8e9ccce5af22a9fee>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type RebelsQuery$variables = {|
  id: string,
|};
export type RebelsQuery$data = {|
  +rebels: ?{|
    +id: string,
    +name: ?string,
    +ships: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
        |},
      |}>,
      +pageInfo: {|
        +hasNextPage: boolean,
        +hasPreviousPage: boolean,
        +startCursor: ?string,
        +endCursor: ?string,
      |},
    |},
  |},
  +user: ?{|
    +id: string,
    +name: ?string,
  |},
|};
export type RebelsQuery = {|
  variables: RebelsQuery$variables,
  response: RebelsQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  (v2/*: any*/),
  (v3/*: any*/)
],
v5 = [
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "Faction",
    "kind": "LinkedField",
    "name": "rebels",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "ShipConnection",
        "kind": "LinkedField",
        "name": "ships",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ShipEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Ship",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": (v1/*: any*/),
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": (v4/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RebelsQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RebelsQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "834f4cf32e7496710503849e03ecc5ee",
    "id": null,
    "metadata": {},
    "name": "RebelsQuery",
    "operationKind": "query",
    "text": "query RebelsQuery(\n  $id: ID!\n) {\n  rebels(id: $id) {\n    id\n    name\n    ships {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n  user(id: $id) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "90a3bdae87e972fff4d678d93c018d77";

module.exports = ((node/*: any*/)/*: Query<
  RebelsQuery$variables,
  RebelsQuery$data,
>*/);
