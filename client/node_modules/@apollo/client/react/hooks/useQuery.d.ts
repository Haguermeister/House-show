import { OperationVariables } from '../../core';
import { ApolloClient, ApolloQueryResult, DocumentNode, TypedDocumentNode } from '../../core';
import { QueryHookOptions, QueryResult } from '../types/types';
import { useApolloClient } from './useApolloClient';
export declare function useQuery<TData = any, TVariables = OperationVariables>(query: DocumentNode | TypedDocumentNode<TData, TVariables>, options?: QueryHookOptions<TData, TVariables>): QueryResult<TData, TVariables>;
export declare function useInternalState<TData, TVariables>(client: ApolloClient<any>, query: DocumentNode | TypedDocumentNode<TData, TVariables>): InternalState<TData, TVariables>;
declare class InternalState<TData, TVariables> {
    readonly client: ReturnType<typeof useApolloClient>;
    readonly query: DocumentNode | TypedDocumentNode<TData, TVariables>;
    constructor(client: ReturnType<typeof useApolloClient>, query: DocumentNode | TypedDocumentNode<TData, TVariables>);
    forceUpdate(): void;
    useQuery(options: QueryHookOptions<TData, TVariables>): QueryResult<TData, TVariables>;
    private renderPromises;
    private queryHookOptions;
    private watchQueryOptions;
    private useOptions;
    private ssrDisabledResult;
    private skipStandbyResult;
    private createWatchQueryOptions;
    private onCompleted;
    private onError;
    private observable;
    private obsQueryFields;
    private useObservableQuery;
    private result;
    private previousData;
    private setResult;
    private handleErrorOrCompleted;
    private getCurrentResult;
    private toQueryResultCache;
    toQueryResult(result: ApolloQueryResult<TData>): QueryResult<TData, TVariables>;
    private unsafeHandlePartialRefetch;
}
export {};
//# sourceMappingURL=useQuery.d.ts.map