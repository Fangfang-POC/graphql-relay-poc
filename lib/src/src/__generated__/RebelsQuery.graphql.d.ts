/**
 * @generated SignedSource<<53226a2f1606756fc479b81f76be99e7>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ConcreteRequest } from 'relay-runtime';
export declare type RebelsQuery$variables = {
    id: string;
};
export declare type RebelsQuery$data = {
    readonly rebels: {
        readonly id: string;
        readonly name: string | null;
        readonly ships: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly name: string | null;
                } | null;
            } | null> | null;
            readonly pageInfo: {
                readonly hasNextPage: boolean;
                readonly hasPreviousPage: boolean;
                readonly startCursor: string | null;
                readonly endCursor: string | null;
            };
        } | null;
    } | null;
    readonly user: {
        readonly id: string;
        readonly name: string | null;
    } | null;
};
export declare type RebelsQuery = {
    variables: RebelsQuery$variables;
    response: RebelsQuery$data;
};
declare const node: ConcreteRequest;
export default node;
