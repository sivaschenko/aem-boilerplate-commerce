import { FetchOptions } from '..';

declare const signalTypes: {
    cart: import('@preact/signals-core').Signal<{
        pending: boolean;
        data?: import('../../data/models/cart').Cart | null | undefined;
    }>;
    customer: import('@preact/signals-core').Signal<{
        pending: boolean;
        data?: import('../../data/models/customer').Customer | null | undefined;
    }>;
    estimateShippingMethods: import('@preact/signals-core').Signal<{
        pending: boolean;
        data?: import('../../data/models/shipping-method').ShippingMethod[] | undefined;
    }>;
    storeConfig: import('@preact/signals-core').Signal<{
        data?: import('../../data/models/store-config').StoreConfig | undefined;
        pending: boolean;
    }>;
};
type SignalTypesType = typeof signalTypes;
type SignalTypesKeys = keyof SignalTypesType;
type SignalDataMap = {
    [K in SignalTypesKeys]: SignalTypesType[K]['value']['data'];
};
type DispatchApiCallParams<T extends SignalTypesKeys> = {
    type: 'query' | 'mutation';
    query: string;
    options?: FetchOptions;
    path: string;
    signalType: T;
    transformer?: (data: any) => SignalDataMap[T];
    defaultValueOnFail?: SignalDataMap[T];
};
export declare function getValueAtPath(obj: any, path: string): any;
declare function dispatchApiCall<T extends SignalTypesKeys>(params: DispatchApiCallParams<T>): Promise<SignalDataMap[T]>;
export { dispatchApiCall };
//# sourceMappingURL=dispatchApiCall.d.ts.map