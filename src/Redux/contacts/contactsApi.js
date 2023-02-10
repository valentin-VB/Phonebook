import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'Redux/auth/authApi';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: baseQuery,
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),

    addContacts: build.mutation({
      query(contact) {
        return {
          url: '/contacts/',
          method: 'POST',
          body: contact,
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    editContact: build.mutation({
      query({ id, contact }) {
        console.log('contact', contact);
        console.log('id', id);
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: contact,
        };
      },
      invalidatesTags: ['Contacts'],
    }),

    deleteContact: build.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useEditContactMutation,
  useDeleteContactMutation,
} = contactsApi;
