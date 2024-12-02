import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    tagTypes: ['Reviews'],
    endpoints: (builder) => ({
        getRestaurants: builder.query({ query: () => "/restaurants" }),
        getRestaurantById: builder.query({ query: (restaurantId) => `/restaurant/${restaurantId}` }),
        getDishes: builder.query({ query: () => `/dishes/` }),
        getUsers: builder.query({ query: () => `/users/` }),
        getReviews: builder.query({ query: () => `/reviews/` }),
        getReviewsByRestaurantId: builder.query({
            query: (id) => `/reviews?restaurantId=${id}`,
            providesTags: (id) => [{ type: 'Reviews', id }],
        }),
        addReview: builder.mutation({
            query: ({ restaurantId, review }) => ({
                method: "POST",
                body: review,
                url: `/review/${restaurantId}`,
            }),
            invalidatesTags: ({ restaurantId }) => [
                { type: "Reviews", id: restaurantId },
            ]
        }),
    })
})

export const { useGetRestaurantsQuery, useAddReviewMutation, useGetRestaurantByIdQuery, useGetDishesQuery, useGetReviewsQuery, useGetUsersQuery, useGetReviewsByRestaurantIdQuery } = apiSlice;