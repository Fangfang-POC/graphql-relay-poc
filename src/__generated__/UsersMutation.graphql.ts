/**
 * @generated SignedSource<<b3622fc6b9b88c9d4c7c8a22b3aed1a0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddUserInput = {
  name?: string | null;
  age?: number | null;
};
export type UsersMutation$variables = {
  user?: AddUserInput | null;
};
export type UsersMutation$data = {
  readonly addUser: {
    readonly name: string | null;
    readonly id: string;
    readonly age: number | null;
  } | null;
};
export type UsersMutation = {
  variables: UsersMutation$variables;
  response: UsersMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "user"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "user"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "addUser",
    "plural": false,
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "367a979d104594b79348d21c19bc8519",
    "id": null,
    "metadata": {},
    "name": "UsersMutation",
    "operationKind": "mutation",
    "text": "mutation UsersMutation(\n  $user: AddUserInput\n) {\n  addUser(input: $user) {\n    name\n    id\n    age\n  }\n}\n"
  }
};
})();

(node as any).hash = "a2f3b589d12d9479636e451f73d52b0e";

export default node;
