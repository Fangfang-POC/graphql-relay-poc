/**
 * @generated SignedSource<<7796d1ac93c7a39c99f5604c941d5fc4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserComponent_name$data = {
  readonly name: string | null;
  readonly " $fragmentType": "UserComponent_name";
};
export type UserComponent_name$key = {
  readonly " $data"?: UserComponent_name$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserComponent_name">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserComponent_name",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "35a82cf7f7ca99aa70ffb83033b21357";

export default node;
