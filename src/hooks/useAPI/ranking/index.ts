// lib
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useApi = <
  TQueryKey extends [string, (Record<string, unknown> | string)?],
  TQueryFnData,
  TError,
  TData = TQueryFnData,
>(
  queryKey: TQueryKey,
  // fetcher: (params: TQueryKey[1], token: string) => Promise<TQueryFnData>,
  fetcher: (requestUrl: string) => Promise<TQueryFnData>,
  options?: Omit<
    // UseQueryOptions<unknown, TError, TData, TQueryKey>,
    CacheQueryOptions,
    'queryKey' | 'queryFn'
  >,
) => {
  // accessTokenを何らかの形で取得する
  // const { accessToken } = useAuthGuardContext();

  // return useQuery({
  //   queryKey,
  //   // queryFn: async () => fetcher(queryKey[1], accessToken || ''),

  //   // ゴルフのAPIになっているので修正
  //   queryFn: async () => fetcher("https://app.rakuten.co.jp/services/api/Gora/GoraGolfCourseSearch/20170623?format=json&applicationId=1064065473399477324"),
  //   ...options,
  // });
};
