import { __assign } from "tslib";
import { compact } from "./compact.js";
export function mergeOptions(defaults, options) {
    return compact(defaults, options, options.variables && {
        variables: __assign(__assign({}, defaults.variables), options.variables),
    });
}
//# sourceMappingURL=mergeOptions.js.map