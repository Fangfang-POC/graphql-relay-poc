/**
 * @generated SignedSource<<035a682707d9726ddcf4863862d36101>>
 * @lightSyntaxTransform
 * @nogrep
 */
import { ConcreteRequest } from 'relay-runtime';
export declare type AddUserInput = {
    name?: string | null;
    age?: number | null;
};
export declare type AddUserMutation$variables = {
    user?: AddUserInput | null;
};
export declare type AddUserMutation$data = {
    readonly addUser: {
        readonly __typename: string;
        readonly name: string | null;
        readonly id: string;
        readonly age: number | null;
    } | null;
};
export declare type AddUserMutation = {
    variables: AddUserMutation$variables;
    response: AddUserMutation$data;
};
declare const node: ConcreteRequest;
export default node;
