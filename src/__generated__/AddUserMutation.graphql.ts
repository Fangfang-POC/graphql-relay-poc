/**
 * @generated SignedSource<<79be12be2ddd21b057adb6e8f3b5a7e2>>
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
export type AddUserMutation$variables = {
  user?: AddUserInput | null;
};
export type AddUserMutation$data = {
  readonly addUser: {
    readonly name: string | null;
    readonly id: string;
    readonly age: number | null;
  } | null;
};
export type AddUserMutation = {
  variables: AddUserMutation$variables;
  response: AddUserMutation$data;
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
    "name": "AddUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7b8b5a083b636afad4748edd0a48a57d",
    "id": null,
    "metadata": {},
    "name": "AddUserMutation",
    "operationKind": "mutation",
    "text": "mutation AddUserMutation(\n  $user: AddUserInput\n) {\n  addUser(input: $user) {\n    name\n    id\n    age\n  }\n}\n"
  }
};
})();

(node as any).hash = "11f89dc63571421b1cf78f37427de244";

export default node;
