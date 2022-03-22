/**
 * @generated SignedSource<<d92f5a531d12c2fa58857dceda2ec9ad>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppRepositoryQuery$variables = {||};
export type AppRepositoryQuery$data = {|
  +repository: ?{|
    +name: string,
  |},
|};
export type AppRepositoryQuery = {|
  variables: AppRepositoryQuery$variables,
  response: AppRepositoryQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "graphql-relay-poc"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "Fangfanghao"
  }
],
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
    "name": "AppRepositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": "repository(name:\"graphql-relay-poc\",owner:\"Fangfanghao\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppRepositoryQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"graphql-relay-poc\",owner:\"Fangfanghao\")"
      }
    ]
  },
  "params": {
    "cacheID": "9966c2d503183fce2fd1fc47972aa888",
    "id": null,
    "metadata": {},
    "name": "AppRepositoryQuery",
    "operationKind": "query",
    "text": "query AppRepositoryQuery {\n  repository(owner: \"Fangfanghao\", name: \"graphql-relay-poc\") {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "4bdf5e3c39ba0a7860272963ddb110ac";

module.exports = ((node/*: any*/)/*: Query<
  AppRepositoryQuery$variables,
  AppRepositoryQuery$data,
>*/);
