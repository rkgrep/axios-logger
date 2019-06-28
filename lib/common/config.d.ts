import { ErrorLogConfig, GlobalLogConfig, RequestLogConfig, ResponseLogConfig } from './types';
declare function getGlobalConfig(): GlobalLogConfig;
declare function setGlobalConfig(config: GlobalLogConfig): void;
declare function mergeWithGlobalConfig(config?: RequestLogConfig | ResponseLogConfig | ErrorLogConfig): {
    data?: boolean | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    headers?: boolean | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
    code?: boolean | undefined;
    usePrefix?: boolean | undefined;
    prefixText?: string | undefined;
    useDate?: boolean | undefined;
    dateFormat?: string | undefined;
} | {
    data?: boolean | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    headers?: boolean | undefined;
    usePrefix?: boolean | undefined;
    prefixText?: string | undefined;
    useDate?: boolean | undefined;
    dateFormat?: string | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
    code?: boolean | undefined;
} | {
    data?: boolean | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
    headers?: boolean | undefined;
    usePrefix?: boolean | undefined;
    prefixText?: string | undefined;
    useDate?: boolean | undefined;
    dateFormat?: string | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    code?: boolean | undefined;
} | {
    data?: boolean | undefined;
    code?: boolean | undefined;
    usePrefix?: boolean | undefined;
    prefixText?: string | undefined;
    useDate?: boolean | undefined;
    dateFormat?: string | undefined;
    url?: boolean | undefined;
    method?: boolean | undefined;
    headers?: boolean | undefined;
    status?: boolean | undefined;
    statusText?: boolean | undefined;
};
export { getGlobalConfig, setGlobalConfig, mergeWithGlobalConfig, };
