import { __assign, __rest } from "tslib";
import { useCallback, useContext, useEffect, useMemo, useRef, useState, } from 'react';
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';
import { equal } from '@wry/equality';
import { mergeOptions } from "../../core/index.js";
import { getApolloContext } from "../context/index.js";
import { ApolloError } from "../../errors/index.js";
import { NetworkStatus, } from "../../core/index.js";
import { DocumentType, verifyDocumentType } from "../parser/index.js";
import { useApolloClient } from "./useApolloClient.js";
import { canUseWeakMap, isNonEmptyArray, maybeDeepFreeze } from "../../utilities/index.js";
var hasOwnProperty = Object.prototype.hasOwnProperty;
export function useQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return useInternalState(useApolloClient(options.client), query).useQuery(options);
}
export function useInternalState(client, query) {
    var stateRef = useRef();
    if (!stateRef.current ||
        client !== stateRef.current.client ||
        query !== stateRef.current.query) {
        stateRef.current = new InternalState(client, query);
    }
    var state = stateRef.current;
    var _a = useState(0), _tick = _a[0], setTick = _a[1];
    state.forceUpdate = function () {
        setTick(function (tick) { return tick + 1; });
    };
    return state;
}
var InternalState = (function () {
    function InternalState(client, query) {
        this.client = client;
        this.query = query;
        this.ssrDisabledResult = maybeDeepFreeze({
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: NetworkStatus.loading,
        });
        this.skipStandbyResult = maybeDeepFreeze({
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: NetworkStatus.ready,
        });
        this.toQueryResultCache = new (canUseWeakMap ? WeakMap : Map)();
        verifyDocumentType(query, DocumentType.Query);
    }
    InternalState.prototype.forceUpdate = function () {
    };
    InternalState.prototype.useQuery = function (options) {
        var _this = this;
        this.renderPromises = useContext(getApolloContext()).renderPromises;
        this.useOptions(options);
        var obsQuery = this.useObservableQuery();
        var result = useSyncExternalStore(useCallback(function () {
            if (_this.renderPromises) {
                return function () { };
            }
            var onNext = function () {
                var previousResult = _this.result;
                var result = obsQuery.getCurrentResult();
                if (previousResult &&
                    previousResult.loading === result.loading &&
                    previousResult.networkStatus === result.networkStatus &&
                    equal(previousResult.data, result.data)) {
                    return;
                }
                _this.setResult(result);
            };
            var onError = function (error) {
                var last = obsQuery["last"];
                subscription.unsubscribe();
                try {
                    obsQuery.resetLastResults();
                    subscription = obsQuery.subscribe(onNext, onError);
                }
                finally {
                    obsQuery["last"] = last;
                }
                if (!hasOwnProperty.call(error, 'graphQLErrors')) {
                    throw error;
                }
                var previousResult = _this.result;
                if (!previousResult ||
                    (previousResult && previousResult.loading) ||
                    !equal(error, previousResult.error)) {
                    _this.setResult({
                        data: (previousResult && previousResult.data),
                        error: error,
                        loading: false,
                        networkStatus: NetworkStatus.error,
                    });
                }
            };
            var subscription = obsQuery.subscribe(onNext, onError);
            return function () { return subscription.unsubscribe(); };
        }, [
            obsQuery,
            this.renderPromises,
            this.client.disableNetworkFetches,
        ]), function () { return _this.getCurrentResult(); });
        this.unsafeHandlePartialRefetch(result);
        return this.toQueryResult(result);
    };
    InternalState.prototype.useOptions = function (options) {
        var _a;
        var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
        var currentWatchQueryOptions = this.watchQueryOptions;
        var resolveFetchBlockingPromise;
        if (!equal(watchQueryOptions, currentWatchQueryOptions)) {
            this.watchQueryOptions = watchQueryOptions;
            if (currentWatchQueryOptions && this.observable) {
                this.observable.reobserve(__assign({ fetchBlockingPromise: new Promise(function (resolve) {
                        resolveFetchBlockingPromise = resolve;
                    }) }, watchQueryOptions));
                this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
                this.result = void 0;
            }
        }
        useUnblockFetchEffect(this.renderPromises, resolveFetchBlockingPromise);
        this.onCompleted = options.onCompleted || InternalState.prototype.onCompleted;
        this.onError = options.onError || InternalState.prototype.onError;
        if ((this.renderPromises || this.client.disableNetworkFetches) &&
            this.queryHookOptions.ssr === false) {
            this.result = this.ssrDisabledResult;
        }
        else if (this.queryHookOptions.skip ||
            this.watchQueryOptions.fetchPolicy === 'standby') {
            this.result = this.skipStandbyResult;
        }
        else if (this.result === this.ssrDisabledResult ||
            this.result === this.skipStandbyResult) {
            this.result = void 0;
        }
    };
    InternalState.prototype.createWatchQueryOptions = function (_a) {
        if (_a === void 0) { _a = {}; }
        var skip = _a.skip, ssr = _a.ssr, onCompleted = _a.onCompleted, onError = _a.onError, displayName = _a.displayName, defaultOptions = _a.defaultOptions, otherOptions = __rest(_a, ["skip", "ssr", "onCompleted", "onError", "displayName", "defaultOptions"]);
        var toMerge = [];
        var globalDefaults = this.client.defaultOptions.watchQuery;
        if (globalDefaults)
            toMerge.push(globalDefaults);
        if (defaultOptions)
            toMerge.push(defaultOptions);
        var latestOptions = this.observable && this.observable.options;
        if (latestOptions && toMerge.length) {
            var defaults_1 = toMerge.reduce(mergeOptions, Object.create(null));
            toMerge.length = 1;
            toMerge[0] = defaults_1;
            Object.keys(defaults_1).forEach(function (defaultOptionName) {
                var currentOptionValue = latestOptions[defaultOptionName];
                if (hasOwnProperty.call(latestOptions, defaultOptionName) &&
                    !equal(defaults_1[defaultOptionName], currentOptionValue)) {
                    defaults_1[defaultOptionName] = defaultOptionName === "variables"
                        ? __assign(__assign({}, defaults_1.variables), currentOptionValue) : currentOptionValue;
                }
            });
        }
        toMerge.push(otherOptions);
        var merged = toMerge.reduce(mergeOptions, Object.create(null));
        var watchQueryOptions = Object.assign(merged, { query: this.query });
        if (this.renderPromises &&
            (watchQueryOptions.fetchPolicy === 'network-only' ||
                watchQueryOptions.fetchPolicy === 'cache-and-network')) {
            watchQueryOptions.fetchPolicy = 'cache-first';
        }
        else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy = 'cache-first';
        }
        if (skip) {
            var _b = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? watchQueryOptions.fetchPolicy : _b;
            Object.assign(watchQueryOptions, {
                initialFetchPolicy: initialFetchPolicy,
                fetchPolicy: 'standby',
            });
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        return watchQueryOptions;
    };
    InternalState.prototype.onCompleted = function (data) { };
    InternalState.prototype.onError = function (error) { };
    InternalState.prototype.useObservableQuery = function () {
        var resolveFetchBlockingPromise;
        var obsQuery = this.observable =
            this.renderPromises
                && this.renderPromises.getSSRObservable(this.watchQueryOptions)
                || this.observable
                || this.client.watchQuery(__assign({ fetchBlockingPromise: new Promise(function (resolve) {
                        resolveFetchBlockingPromise = resolve;
                    }) }, this.watchQueryOptions));
        useUnblockFetchEffect(this.renderPromises, resolveFetchBlockingPromise);
        this.obsQueryFields = useMemo(function () { return ({
            refetch: obsQuery.refetch.bind(obsQuery),
            reobserve: obsQuery.reobserve.bind(obsQuery),
            fetchMore: obsQuery.fetchMore.bind(obsQuery),
            updateQuery: obsQuery.updateQuery.bind(obsQuery),
            startPolling: obsQuery.startPolling.bind(obsQuery),
            stopPolling: obsQuery.stopPolling.bind(obsQuery),
            subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
        }); }, [obsQuery]);
        if (this.renderPromises) {
            this.renderPromises.registerSSRObservable(obsQuery);
            var ssrAllowed = !(this.queryHookOptions.ssr === false ||
                this.queryHookOptions.skip);
            if (ssrAllowed && obsQuery.getCurrentResult().loading) {
                this.renderPromises.addObservableQueryPromise(obsQuery);
            }
        }
        return obsQuery;
    };
    InternalState.prototype.setResult = function (nextResult) {
        var previousResult = this.result;
        if (previousResult && previousResult.data) {
            this.previousData = previousResult.data;
        }
        this.result = nextResult;
        this.forceUpdate();
        this.handleErrorOrCompleted(nextResult);
    };
    InternalState.prototype.handleErrorOrCompleted = function (result) {
        if (!result.loading) {
            if (result.error) {
                this.onError(result.error);
            }
            else if (result.data) {
                this.onCompleted(result.data);
            }
        }
    };
    InternalState.prototype.getCurrentResult = function () {
        if (!this.result) {
            this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
        }
        return this.result;
    };
    InternalState.prototype.toQueryResult = function (result) {
        var queryResult = this.toQueryResultCache.get(result);
        if (queryResult)
            return queryResult;
        var data = result.data, partial = result.partial, resultWithoutPartial = __rest(result, ["data", "partial"]);
        this.toQueryResultCache.set(result, queryResult = __assign(__assign(__assign({ data: data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: true, previousData: this.previousData }));
        if (!queryResult.error && isNonEmptyArray(result.errors)) {
            queryResult.error = new ApolloError({ graphQLErrors: result.errors });
        }
        return queryResult;
    };
    InternalState.prototype.unsafeHandlePartialRefetch = function (result) {
        if (result.partial &&
            this.queryHookOptions.partialRefetch &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            this.observable.options.fetchPolicy !== 'cache-only') {
            Object.assign(result, {
                loading: true,
                networkStatus: NetworkStatus.refetch,
            });
            this.observable.refetch();
        }
    };
    return InternalState;
}());
function useUnblockFetchEffect(renderPromises, resolveFetchBlockingPromise) {
    if (resolveFetchBlockingPromise) {
        if (renderPromises) {
            resolveFetchBlockingPromise(true);
        }
        else {
            setTimeout(function () { return resolveFetchBlockingPromise(false); }, 5000);
        }
    }
    useEffect(function () {
        if (resolveFetchBlockingPromise) {
            resolveFetchBlockingPromise(true);
        }
    }, [resolveFetchBlockingPromise]);
}
//# sourceMappingURL=useQuery.js.map