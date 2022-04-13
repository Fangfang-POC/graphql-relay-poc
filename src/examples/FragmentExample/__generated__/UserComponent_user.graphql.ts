/**
 * @generated SignedSource<<2594bf62f7c3cd85933f1f1e689a0e3f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Gender = "FEMALE" | "MALE" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type UserComponent_user$data = {
  readonly username: string | null;
  readonly age: number | null;
  readonly gender: Gender | null;
  readonly " $fragmentSpreads": FragmentRefs<"UserComponent_name">;
  readonly " $fragmentType": "UserComponent_user";
};
export type UserComponent_user$key = {
  readonly " $data"?: UserComponent_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserComponent_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserComponent_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "UserComponent_name"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "07131dcfaf1f033c163d86e8398de8a6";

export default node;
