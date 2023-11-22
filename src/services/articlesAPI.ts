import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const RAPID_KEY = import.meta.env.VITE_RAPID_API_KEY
export const articleAPI = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', RAPID_KEY)
            headers.set(
                'X-RapidAPI-Host',
                'article-extractor-and-summarizer.p.rapidapi.com'
            )
            return headers
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query<NewParamsType, Params>({
            query: (params) =>
                `/summarize?url=${encodeURIComponent(params.url)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleAPI
