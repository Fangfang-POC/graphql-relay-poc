/// <reference types="react" />
import { PreloadedQuery } from 'react-relay/hooks';
import * as AddUserMutationType from './__generated__/AddUserMutation.graphql';
declare type Props = {
    preloadQuery: PreloadedQuery<AddUserMutationType.AddUserMutation>;
};
export default function AddUser(props: Props): JSX.Element;
export {};
