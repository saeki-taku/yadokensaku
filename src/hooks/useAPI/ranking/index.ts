// // lib
// import { useQuery, useQueryClient } from '@tanstack/react-query';

// export const useApi = <
//   TQueryKey extends [string, (Record<string, unknown> | string)?],
//   TQueryFnData,
//   TError,
//   TData = TQueryFnData,
// >(
//   queryKey: TQueryKey,
//   // fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
//   fetcher: (requestUrl: string) => Promise<TQueryFnData>,
//   options?: Omit<
//     // UseQueryOptions<unknown, TError, TData, TQueryKey>,
//     CacheQueryOptions,
//     'queryKey' | 'queryFn'
//   >,
// ) => {

// };
