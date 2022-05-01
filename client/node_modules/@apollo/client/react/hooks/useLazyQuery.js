import { __assign } from "tslib";
import { useCallback, useMemo, useRef } from 'react';
import { ApolloError } from "../../errors/index.js";
import { useInternalState } from "./useQuery.js";
import { useApolloClient } from "./useApolloClient.js";
import { isNonEmptyArray } from "../../utilities/index.js";
var EAGER_METHODS = [
    'refetch',
    'reobserve',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
export function useLazyQuery(query, options) {
    var internalState = useInternalState(useApolloClient(options && options.client), query);
    var execOptionsRef = useRef();
    var defaultOptions = internalState.client.defaultOptions.watchQuery;
    var initialFetchPolicy = (options && options.fetchPolicy) ||
        (execOptionsRef.current && execOptionsRef.current.fetchPolicy) ||
        (defaultOptions && defaultOptions.fetchPolicy) ||
        "cache-first";
    var useQueryResult = internalState.useQuery(__assign(__assign(__assign({}, options), execOptionsRef.current), { skip: !execOptionsRef.current }));
    var result = Object.assign(useQueryResult, {
        called: !!execOptionsRef.current,
    });
    var eagerMethods = useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    internalState.forceUpdate();
                }
                return method.apply(this, arguments);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, []);
    Object.assign(result, eagerMethods);
    var execute = useCallback(function (executeOptions) {
        var promise = result.reobserve(execOptionsRef.current = executeOptions ? __assign(__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
            fetchPolicy: initialFetchPolicy,
        }).then(function (apolloQueryResult) {
            apolloQueryResult = apolloQueryResult || internalState["getCurrentResult"]();
            if (apolloQueryResult.error ||
                isNonEmptyArray(apolloQueryResult.errors)) {
                var _a = result.observable.options.errorPolicy, errorPolicy = _a === void 0 ? "none" : _a;
                if (errorPolicy === "none") {
                    throw apolloQueryResult.error || new ApolloError({
                        graphQLErrors: apolloQueryResult.errors,
                    });
                }
            }
            return internalState.toQueryResult(apolloQueryResult);
        }).then(function (queryResult) { return Object.assign(queryResult, eagerMethods); });
        internalState.forceUpdate();
        promise.catch(function () { });
        return promise;
    }, []);
    return [execute, result];
}
//# sourceMappingURL=useLazyQuery.js.map