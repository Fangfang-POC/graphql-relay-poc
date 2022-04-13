/**
 * @generated SignedSource<<45f5935a10c8840306c3603a0dafad88>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VehiclesFragment$data = {
  readonly maxSpeed: number | null;
  readonly " $fragmentType": "VehiclesFragment";
};
export type VehiclesFragment$key = {
  readonly " $data"?: VehiclesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"VehiclesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VehiclesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "maxSpeed",
      "storageKey": null
    }
  ],
  "type": "Airplane",
  "abstractKey": null
};

(node as any).hash = "bf0906a029293401b8547294fa3f95e5";

export default node;
