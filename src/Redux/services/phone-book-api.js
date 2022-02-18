import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PhoneBookApi = createApi({
    reducerPath: 'PhoneBookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6203af0f4d21c200170b9f5a.mockapi.io/api/v1/',
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
        query: ({ newName, number}) => ({
            url: '/contacts',
            metod: 'POST',
            body: {
                newName,
                number,
            },
        }),
        invalidatesTags: ['Contact'],
    }),

    onDeleted: builder.mutation({
        query: todoid => ({
            url: `/contacts/${todoid}`,
            metod: 'DELETE'
        }),
        invalidatesTags: ['Contact'],
    }),
}),

});

