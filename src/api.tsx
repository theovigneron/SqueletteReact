import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { SqueletteModels } from './type'

export const squeletteApi = createApi({
  reducerPath: 'squeletteApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'baseUrl' }),
  endpoints: (builder) => ({
    getSquelette: builder.query<SqueletteModels, string>({
      query: (urlSupp) => urlSupp,
    })
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetSqueletteQuery } = squeletteApi